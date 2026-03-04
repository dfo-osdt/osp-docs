import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { geoMercator, geoPath } from "d3-geo";
import { geoConicConformal } from "d3-geo";

import { topology } from "topojson-server";
import { presimplify, simplify } from "topojson-simplify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGION_ID_MAP = new Map([
    ["Newfoundland & Labrador", "DFO_NL"],
    ["Pacific", "DFO_PAC"],
    ["Ontario and Prairie", "DFO_ONT_PRA"],
    ["Quebec", "DFO_QC"],
    ["Maritimes", "DFO_MAR"],
    ["Gulf", "DFO_GULF"],
    ["Arctic", "DFO_ARCTIC"],
    ["Arctic-Water", "DFO_ARCTIC"], // merge water into Arctic
]);

/**
 * CONFIG
 * - INPUT: GeoJSON of DFO region polygons
 * - OUTPUT: SVG written into VuePress public folder
 */
const INPUT = path.resolve(__dirname, "./data/dfo-regions.geojson");
const OUTPUT = path.resolve(__dirname, "../public/maps/dfo-regions.svg");

/**
 * Which property contains the region name in your GeoJSON?
 * Common candidates: "REGION", "Region", "region", "NAME", "Name", etc.
 *
 * You can override via env:
 *   DFO_NAME_FIELD=REGION pnpm node scripts/geojson-to-dfo-svg.mjs
 */
const NAME_FIELD = process.env.DFO_NAME_FIELD || "REGION";

/**
 * Simplification:
 * smaller => more detail, larger => simpler
 * 0.0005–0.003 is a common range depending on geometry complexity.
 */
const SIMPLIFY_AMOUNT = Number(process.env.DFO_SIMPLIFY || "0.0015");

/**
 * SVG size
 */
const WIDTH = Number(process.env.DFO_SVG_WIDTH || "1000");
const HEIGHT = Number(process.env.DFO_SVG_HEIGHT || "650");

/**
 * NCR marker (Ottawa-ish).
 * You can disable via: DFO_NCR=0
 */
const INCLUDE_NCR = (process.env.DFO_NCR ?? "1") !== "0";
const NCR_LON = -75.6972;
const NCR_LAT = 45.4215;

function slugRegionName(name) {
  return String(name || "")
    .trim()
    .toUpperCase()
    .replace(/&/g, "AND")
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function escapeXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function main() {
  const raw = await fs.readFile(INPUT, "utf8");
  const geo = JSON.parse(raw);

  if (!geo || !geo.type) {
    throw new Error(`Invalid GeoJSON: ${INPUT}`);
  }

  // Normalize to FeatureCollection
  const fc =
    geo.type === "FeatureCollection"
      ? geo
      : geo.type === "Feature"
        ? { type: "FeatureCollection", features: [geo] }
        : null;

  if (!fc) throw new Error(`Expected FeatureCollection/Feature in ${INPUT}`);

  // Convert to TopoJSON then simplify (stable + good compression)
  const topo = topology({ regions: fc });
  presimplify(topo);
  simplify(topo, SIMPLIFY_AMOUNT);

  // Back to GeoJSON-like features
  const features = topo.objects.regions.geometries.map((g) => ({
    type: "Feature",
    properties: g.properties || {},
    geometry: g, // topo geometry - geoPath can handle this via d3 with topology? safer to keep original features?
  }));

    // Canada-friendly conic conformal projection
    const projection = geoConicConformal()
          .parallels([49, 77])     // common parallels used for Canada
          .rotate([96, 0])         // center roughly over Canada
          .center([0, 63]);

  // Fit projection to the original (not simplified) FeatureCollection for good bounds
  projection.fitSize([WIDTH, HEIGHT], fc);

  const pathGen = geoPath(projection);

  // Build SVG paths from original features (keeps properties consistent)
  // If you want simplified shapes, swap fc.features for features (but may lose geometry conversion depending on topo geometry).
  const svgPaths = fc.features.map((f) => {
    const rawName = f?.properties?.[NAME_FIELD] ?? "UNKNOWN";
    const mappedId = REGION_ID_MAP.get(rawName);
    const id = mappedId || `DFO_${slugRegionName(rawName)}`;
    const d = pathGen(f);
    if (!d) return "";

    return `<path id="${escapeXml(id)}" class="dfo-region" data-name="${escapeXml(rawName)}" d="${d}"></path>`;
  });

  // NCR marker position in projection coords
  let ncrCircle = "";
  if (INCLUDE_NCR) {
    const p = projection([NCR_LON, NCR_LAT]);
    if (p) {
      const [x, y] = p;
      ncrCircle =
        `<circle id="DFO_NCR" class="dfo-ncr" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="12"></circle>` +
        `<text class="dfo-ncr-label" x="${(x + 10).toFixed(2)}" y="${(y + 4).toFixed(2)}">NCR</text>`;
    }
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="DFO Regions map">
  <style>
    .dfo-region { fill: #e9ecef; stroke: #adb5bd; stroke-width: 0.8; }
    .dfo-ncr { fill: #343a40; stroke: #000; stroke-width: 1.2;  }
    .dfo-ncr-label { font: 14px sans-serif; fill: #343a40; paint-order: stroke; stroke: white; stroke-width: 3px; }
  </style>
  <g id="DFO_REGIONS">
    ${svgPaths.join("\n    ")}
    ${ncrCircle}
  </g>
</svg>
`;

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await fs.writeFile(OUTPUT, svg, "utf8");

  console.log(`Wrote SVG: ${OUTPUT}`);
  console.log(`Used NAME_FIELD: ${NAME_FIELD}`);
  console.log(`Simplify amount: ${SIMPLIFY_AMOUNT} (TopoJSON pre-simplified; projection fit uses original bounds)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
