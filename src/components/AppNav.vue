<template>
  <!-- 包一層 .app-nav，方便只影響這個 Header -->
  <v-app-bar flat class="app-nav">
    <v-container class="d-flex align-center justify-space-between">
      <RouterLink to="/" class="text-decoration-none">
        <span class="text-h6 font-weight-bold">Shuting • Portfolio</span>
      </RouterLink>

      <nav class="d-flex">
        <v-btn
          v-for="item in items"
          :key="item.name"
          :to="item.to"
          variant="plain"            
          :ripple="false"
          :active-class="''"
          :exact-active-class="''"
          class="mx-1 nav-btn"
          :class="{ 'text-primary font-weight-bold': isActive(item.name) }"
        >
          {{ item.label }}
        </v-btn>
      </nav>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const items = [
  { name: 'home',     label: 'Home',     to: { name: 'home' } },
  { name: 'projects', label: 'Projects', to: { name: 'projects' } },
  { name: 'about',    label: 'About',    to: { name: 'about' } },
  { name: 'contact',  label: 'Contact',  to: { name: 'contact' } },
]

// 只有當前頁亮色；/projects/xxx 也算在 Projects 底下
const isActive = (name) => {
  if (name === 'projects') return route.path.startsWith('/projects')
  return route.name === name
}
</script>

<style scoped>
/* 讓品牌標題的連結沒有底線 */
.text-decoration-none { text-decoration: none; }

/* 關閉 Vuetify v-btn 的 hover/pressed/active 疊加層（最關鍵） */
.app-nav :deep(.nav-btn .v-btn__overlay) { opacity: 0 !important; }
.app-nav :deep(.nav-btn:hover .v-btn__overlay),
.app-nav :deep(.nav-btn:active .v-btn__overlay),
.app-nav :deep(.nav-btn:focus-visible .v-btn__overlay),
.app-nav :deep(.nav-btn.v-btn--active .v-btn__overlay) { opacity: 0 !important; }
</style>
