---
title: Redirecting…
---

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  const lang = (navigator.language || "").toLowerCase();
  router.replace(lang.startsWith("fr") ? "/fr/" : "/en/");
});
</script>

Redirecting…
