<template>
  <div class="onboard-card">
  <!---
    <h2 class="onboard-title">Regional onboarding</h2>

    <p v-if="data.definition" class="onboard-subtitle">{{ data.definition }}</p>
--->
    <div v-if="error" class="onboard-error">
      Failed to load onboarding data: {{ error }}
    </div>

    <template v-else>
      <div class="onboard-summary">
        <div><strong>{{ completedCount }}</strong> / {{ totalCount }} subgroup sessions complete</div>

        <div class="onboard-bar">
          <div class="onboard-bar-fill" :style="{ width: percentComplete + '%' }"></div>
        </div>

        <div class="onboard-percent">{{ percentComplete.toFixed(0) }}%</div>
      </div>

      <div class="onboard-grid">
        <div
           v-for="r in regions"
           :key="r.code"
           class="onboard-region"
           :id="`region-${r.code}`"
           >
          <div class="onboard-region-header">
            <div class="onboard-region-name">{{ r.name }}</div>
            <div class="onboard-region-count">
              {{ regionComplete(r) }}/{{ (r.groups?.length ?? 0) }} complete
            </div>
          </div>

          <ul class="onboard-groups">
            <li v-for="g in (r.groups ?? [])" :key="g.name" class="onboard-group">
              <span class="badge" :class="'badge-' + (g.status || 'not_started')">
                {{ label(g.status) }}
              </span>
              <span class="group-name">{{ g.name }}</span>
              <span v-if="g.date" class="group-date">{{ g.date }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="upcoming.length" class="onboard-upcoming">
        <h3 class="onboard-upcoming-title">Upcoming scheduled sessions</h3>
        <ul>
          <li v-for="u in upcoming" :key="u.key">
            <strong>{{ u.date }}</strong> — {{ u.region }} ({{ u.group }})
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";

const error = ref("");

const data = reactive({
  definition: "",
  regions: [], // important: always an array
});

onMounted(async () => {
  try {
    const res = await fetch("/data/onboarding.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status} loading /data/onboarding.json`);
    const json = await res.json();

    data.definition = json.definition ?? "";
    data.regions = Array.isArray(json.regions) ? json.regions : [];
  } catch (e) {
    error.value = String(e?.message || e);
  }
});

const regions = computed(() => data.regions ?? []);

const allGroups = computed(() =>
  regions.value.flatMap((r) =>
    (r.groups ?? []).map((g) => ({
      region: r.name,
      regionCode: r.code,
      group: g.name,
      status: g.status ?? "not_started",
      date: g.date,
      key: `${r.code}:${g.name}`,
    }))
  )
);

const totalCount = computed(() => allGroups.value.length);

const completedCount = computed(
  () => allGroups.value.filter((g) => g.status === "complete").length
);

const percentComplete = computed(() =>
  totalCount.value ? (completedCount.value / totalCount.value) * 100 : 0
);

const upcoming = computed(() =>
  allGroups.value
    .filter((g) => g.status === "scheduled" && g.date)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))
);

function regionComplete(region) {
  return (region.groups ?? []).filter((g) => (g.status ?? "") === "complete").length;
}

function label(status) {
  switch (status) {
    case "complete":
      return "Complete";
    case "scheduled":
      return "Scheduled";
    case "in_progress":
      return "In progress";
    default:
      return "Not started";
  }
}
</script>

<style scoped>
.onboard-card {
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 16px;
  background: var(--c-bg);
}
.onboard-title { margin: 0 0 6px 0; }
.onboard-subtitle { margin: 0 0 14px 0; color: var(--c-text-quote); }

.onboard-error {
  padding: 10px 12px;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  background: var(--c-bg-soft);
}

.onboard-summary {
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
}

.onboard-bar {
  height: 10px;
  border-radius: 999px;
  background: var(--c-bg-light);
  overflow: hidden;
  border: 1px solid var(--c-border);
}
.onboard-bar-fill { height: 100%; background: var(--c-brand); }
.onboard-percent { color: var(--c-text-quote); }

.onboard-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
@media (max-width: 900px) {
  .onboard-grid { grid-template-columns: 1fr; }
}

.onboard-region {
  border: 1px solid var(--c-border);
  border-radius: 10px;
  padding: 12px;
  background: var(--c-bg-soft);
}

.onboard-region-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}
.onboard-region-name { font-weight: 700; }
.onboard-region-count { color: var(--c-text-quote); }

.onboard-groups { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
.onboard-group { display: grid; grid-template-columns: auto 1fr auto; gap: 8px; align-items: center; }

.badge {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid var(--c-border);
  background: var(--c-bg);
}
.badge-complete { border-color: rgba(0,128,0,.35); }
.badge-scheduled { border-color: rgba(255,165,0,.45); }
.badge-in_progress { border-color: rgba(0,120,255,.45); }
.badge-not_started { opacity: 0.8; }

.group-date { color: var(--c-text-quote); font-variant-numeric: tabular-nums; }
.onboard-upcoming { margin-top: 14px; }
.onboard-upcoming-title { margin: 0 0 6px 0; }

.region-flash {
  outline: 3px solid var(--c-brand);
  outline-offset: 4px;
  border-radius: 12px;
  transition: outline-color 0.9s ease;
}
</style>