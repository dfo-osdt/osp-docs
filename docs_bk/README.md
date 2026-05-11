---
title: Redirecting…
---

<script setup>
import { onMounted } from "vue";
import { usePageData } from "vuepress/client";

const page = usePageData();

onMounted(() => {
  const lang = (navigator.language || "").toLowerCase();

  // Use the current page path to compute the site root safely
  // If you're at "/": root = "/"
  // If you're at "/something/": root = "/"
  const root = "/";

  const target = lang.startsWith("fr") ? `${root}fr/` : `${root}en/`;

  // Hard redirect (works even when router isn't ready)
  window.location.replace(target);
});
</script>

Redirecting…
