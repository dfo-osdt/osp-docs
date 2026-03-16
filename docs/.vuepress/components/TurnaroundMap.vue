<template>
  <div class="map-card">
    <h3 class="map-title">{{ t.turnaroundMapTitle }}</h3>

    <p v-if="data.definition" class="map-subtitle">{{ data.definition }}</p>

    <div v-if="error" class="map-error">
      Failed to load map/data: {{ error }}
    </div>

    <div v-else class="map-wrap" v-html="svg"></div>

    <div class="map-legend">
      <span class="swatch enabled"></span> {{ t.turnaroundEnabled }}
      <span class="swatch disabled"></span> {{ t.turnaroundDisabled }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, computed } from "vue";
import { usePageData } from "vuepress/client";
import { I18N } from "./i18n";

const page = usePageData();

const locale = computed(() =>
  (page.value.lang || "").toLowerCase().startsWith("fr") ? "fr" : "en"
);

const t = computed(() => I18N[locale.value] ?? I18N.en);

const svg = ref("");
const error = ref("");

const data = reactive({
  definition: "",
  regions: [],
});

function classForEnabled(enabled) {
  return enabled ? "enabled" : "disabled";
}

function scrollToRegion(code) {
  const el = document.getElementById(`region-${code}`);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.classList.add("region-flash");
  setTimeout(() => el.classList.remove("region-flash"), 900);
}

onMounted(async () => {
  try {
    const [svgRes, dataRes] = await Promise.all([
      fetch("/maps/dfo-regions.svg", { cache: "no-store" }),
      fetch(`/data/turnaround.${locale.value}.json`, { cache: "no-store" }),
    ]);

    if (!svgRes.ok) throw new Error(`HTTP ${svgRes.status} loading /maps/dfo-regions.svg`);
    if (!dataRes.ok) throw new Error(`HTTP ${dataRes.status} loading turnaround data`);

    const rawSvg = await svgRes.text();
    if (!rawSvg.includes("<svg")) {
      throw new Error("Map file did not contain <svg> markup");
    }

    svg.value = rawSvg.replace(/^\s*<\?xml[^>]*\?>\s*/i, "");

    const ct = dataRes.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      const snippet = (await dataRes.text()).slice(0, 120);
      throw new Error(`Expected JSON but got "${ct}". Body starts: ${snippet}`);
    }

    const json = await dataRes.json();
    data.definition = json.definition ?? "";
    data.regions = Array.isArray(json.regions) ? json.regions : [];

    await nextTick();

    for (const r of data.regions) {
      const cls = classForEnabled(!!r.enabled);

      for (const id of r.svgIds ?? []) {
        const el = document.getElementById(id);
        if (el) {
          el.classList.add("region-fill", cls);
          el.setAttribute("data-region", r.name);

          

          const title = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "title"
          );

          title.textContent =
          `${r.code} — ${r.name}\n${r.enabled ? t.value.turnaroundEnabled : t.value.turnaroundDisabled}`;

          el.appendChild(title);
          el.style.cursor = "pointer";
          el.addEventListener("click", (evt) => {
            evt.preventDefault();
            scrollToRegion(r.code);
          });
        }
      }
    }
  } catch (e) {
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
.map-subtitle { margin: 0 0 12px 0; color: var(--c-text-quote); }

.map-error {
  padding: 10px 12px;
  border: 1px solid var(--c-map-border);
  border-radius: 10px;
  background: var(--c-bg-soft);
}

.map-wrap {
  min-height: 220px;
}

.map-wrap :deep(svg) {
  width: 100%;
  height: auto;
  max-height: 520px;
}

.map-wrap :deep(.dfo-region) {
  fill: var(--c-bg-soft);
  stroke: var(--c-map-border);
  stroke-width: 0.7;
}

.map-wrap :deep(.region-fill.enabled) {
  fill: color-mix(in srgb, var(--c-brand) 70%, white);
  stroke: var(--c-map-border);
  stroke-width: 0.7;
}

.map-wrap :deep(.region-fill.disabled) {
  fill: var(--c-bg-soft);
  stroke: var(--c-map-border);
  stroke-width: 0.7;
}

.map-wrap :deep(.region-fill:hover) {
  filter: brightness(0.95);
}

.map-legend {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 12px;
  color: var(--c-text-quote);
}

.swatch {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid var(--c-border);
  display: inline-block;
  margin: 0 4px 0 12px;
}

.swatch.enabled {
  background: color-mix(in srgb, var(--c-brand) 70%, white);
}

.swatch.disabled {
  background: var(--c-bg-soft);
}
</style>