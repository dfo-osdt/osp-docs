<template>
  <div class="map-card">
    <h3 class="map-title">{{ t.mapTitle }}</h3>

    <div v-if="error" class="map-error">Failed to load map/data: {{ error }}</div>

    <div v-else class="map-wrap" v-html="svg"></div>

    <div class="map-legend">
      <span class="swatch s0"></span> 0/3
      <span class="swatch s1"></span> 1/3
      <span class="swatch s2"></span> 2/3
      <span class="swatch s3"></span> 3/3
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from "vue";
import { usePageData } from "vuepress/client";
import { I18N } from "./i18n";
import { useRoute } from "vue-router";

const page = usePageData();
const route = useRoute();
const locale = computed(() =>
  (page.value.lang || "").toLowerCase().startsWith("fr") ? "fr" : "en");
const t = computed(() => I18N[locale.value] ?? I18N.en);


const base = computed(() => site.value.base);

const svg = ref("");
const error = ref("");

const SVG_ID_TO_CODE = {
  DFO_NL: "NL",
  DFO_PAC: "PAC",
  DFO_ONT_PRA: "ONT_PRA",
  DFO_QC: "QC",
  DFO_ARCTIC: "ARCTIC",
  DFO_MAR: "MAR",
  DFO_GULF: "GULF",
  DFO_NCR: "NCR",
};

function completionScore(region) {
  const groups = region.groups ?? [];
  return groups.filter((g) => g.status === "complete").length; // 0..3
}

function classForScore(score) {
  return score === 3 ? "s3" : score === 2 ? "s2" : score === 1 ? "s1" : "s0";
}

onMounted(async () => {
  try {
    const url = `/data/onboarding.${locale.value}.json`;
    const [svgRes, dataRes] = await Promise.all([
      fetch("/maps/dfo-regions.svg", { cache: "no-store" }),
      fetch(url, { cache: "no-store" }),
    ]);

    if (!svgRes.ok) throw new Error(`HTTP ${svgRes.status} loading /maps/dfo-regions.svg`);
    if (!dataRes.ok) throw new Error(`HTTP ${dataRes.status} loading /data/onboarding.json`);

    const rawSvg = await svgRes.text();
    if (!rawSvg.includes("<svg")) {
       throw new Error("Map file did not contain <svg> markup (check path /maps/dfo-regions.svg)");
       }
      // Strip XML declaration (breaks when injecting via v-html in HTML parser)
   svg.value = rawSvg.replace(/^\s*<\?xml[^>]*\?>\s*/i, "");
    const data = await dataRes.json();

    await nextTick(); // ensure v-html has inserted the SVG

    const regions = data.regions ?? [];

    // Color each province/territory by its region score
    for (const r of regions) {
      const score = completionScore(r);
      const cls = classForScore(score);

      for (const id of r.svgIds ?? []) {
        const el = document.getElementById(id);
        if (el) {
          el.classList.add("region-fill", cls);
          el.setAttribute("data-region", r.name);
          el.setAttribute("title", `${r.name} — ${score}/3 complete`);
        }
      }
    }
    function scrollToRegion(code) {
      const id = `region-${code}`;
      const el = document.getElementById(id);

      if (!el) return;

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Optional: a quick highlight pulse
      el.classList.add("region-flash");
      setTimeout(() => el.classList.remove("region-flash"), 900);
    }

    // Make SVG regions clickable
    for (const [svgId, code] of Object.entries(SVG_ID_TO_CODE)) {
      const el = document.getElementById(svgId);
      if (!el) continue;

      el.style.cursor = "pointer";
      el.addEventListener("click", (evt) => {
        evt.preventDefault();
        scrollToRegion(code);
      });

  // Keyboard accessibility (nice touch)
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "button");
  el.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter" || evt.key === " ") {
      evt.preventDefault();
      scrollToRegion(code);
    }
  });
}
  }
  catch (e) {
    error.value = String(e?.message || e);
  }
});
</script>

<style scoped>
.map-card {
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 16px;
  background: var(--c-bg);
}
.map-title { margin: 0 0 10px 0; }
.map-error {
  padding: 10px 12px;
  border: 1px solid var(--c-map-border);
  border-radius: 10px;
  background: var(--c-bg-soft);
}

.map-wrap :deep(svg) {
  width: 100%;
  height: auto;
  max-height: 520px;
}

.map-wrap :deep(.region-fill) {
  stroke: var(--c-map-border);
  stroke-width: 0.7;
}

.map-wrap :deep(.dfo-region) {
  fill: var(--c-bg-soft);
  stroke: var(--c-map-border);
  stroke-width: 0.7;
}

/* Use your theme colors; these are intentionally subtle */
.map-wrap :deep(.region-fill.s0) { fill: var(--c-bg-soft); }
.map-wrap :deep(.region-fill.s1) { fill: color-mix(in srgb, var(--c-brand) 50%, white); }
.map-wrap :deep(.region-fill.s2) { fill: color-mix(in srgb, var(--c-brand) 75%, white); }
.map-wrap :deep(.region-fill.s3) { fill: color-mix(in srgb, var(--c-brand) 100%, white); }

/* Hover hint */
.map-wrap :deep(.region-fill:hover) {
  filter: brightness(0.50);
  cursor: pointer;
}

.map-legend {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 12px;
  color: var(--c-text-quote);
  font-variant-numeric: tabular-nums;
}
.swatch {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid var(--c-border);
  display: inline-block;
  margin: 0 4px 0 12px;
}
.swatch.s0 { background: var(--c-bg-soft); }
.swatch.s1 { background: color-mix(in srgb, var(--c-brand) 20%, white); }
.swatch.s2 { background: color-mix(in srgb, var(--c-brand) 45%, white); }
.swatch.s3 { background: color-mix(in srgb, var(--c-brand) 75%, white); }
</style>