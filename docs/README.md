---
title: Redirecting…
---

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSiteData } from "vuepress/client";

const router = useRouter();
const site = useSiteData();

onMounted(() => {
  const lang = (navigator.language || "").toLowerCase();
  const base = site.value.base || "/";

  // Ensure base ends with a single slash
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  // If your site base is "/en/" and French lives at "/fr/" (sibling locale),
  // then we need to redirect from "/" (root) server-side, not via router base.
  // But if your base is "/" (recommended for your domain root deployment),
  // this will correctly route to "/fr/" or "/en/".
  const target = lang.startsWith("fr") ? `${normalizedBase}fr/` : `${normalizedBase}en/`;

  router.replace(target);
});
</script>

Redirecting…
