<template>
  <v-app-bar flat class="app-nav">
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo / Title -->
      <RouterLink to="/" class="text-decoration-none">
        <span class="text-h6 font-weight-bold">Shuting • Portfolio</span>
      </RouterLink>

      <!-- 桌機：橫向導覽 -->
      <nav v-if="!mdAndDown" class="d-flex">
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

      <!-- 手機：漢堡按鈕 -->
      <v-btn
        v-else
        icon
        variant="text"
        :ripple="false"
        class="nav-btn"
        @click="drawer = true"
        aria-label="Open navigation"
      >
        <v-icon icon="mdi-menu" />
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- 手機抽屜選單 -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    width="280"
    class="app-nav-drawer"
  >
    <v-sheet class="px-4 py-4">
      <div class="text-subtitle-1 font-weight-bold">選單</div>
    </v-sheet>

    <v-divider />

    <v-list density="comfortable" nav>
      <v-list-item
        v-for="item in items"
        :key="item.name"
        :to="item.to"
        :ripple="false"
        class="no-overlay px-4"
        :class="{ 'text-primary font-weight-bold': isActive(item.name) }"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'

const route = useRoute()
const { mdAndDown } = useDisplay() // true = 螢幕寬度 ≦ md（手機/平板）
const drawer = ref(false)

const items = [
  { name: 'home',     label: 'Home',     to: { name: 'home' } },
  { name: 'projects', label: 'Projects', to: { name: 'projects' } },
  { name: 'about',    label: 'About',    to: { name: 'about' } },
  { name: 'contact',  label: 'Contact',  to: { name: 'contact' } },
]

// 只有當前頁亮色；/projects/xxx 也算在 Projects 底下
const isActive = name => (name === 'projects'
  ? route.path.startsWith('/projects')
  : route.name === name)
</script>

<style scoped>
.text-decoration-none { text-decoration: none; }

/* 關閉所有 overlay 疊加：按了不會越來越深（btn 與 list-item） */
.app-nav :deep(.nav-btn .v-btn__overlay) { opacity: 0 !important; }
.app-nav-drawer :deep(.no-overlay .v-list-item__overlay) { opacity: 0 !important; }

/* 也關掉 hover/pressed/active 的 overlay（多一道保險） */
.app-nav :deep(.nav-btn:hover .v-btn__overlay),
.app-nav :deep(.nav-btn:active .v-btn__overlay),
.app-nav :deep(.nav-btn:focus-visible .v-btn__overlay),
.app-nav :deep(.nav-btn.v-btn--active .v-btn__overlay) { opacity: 0 !important; }

/* 讓 App Bar 內容在小寬度時不擠壓 */
.app-nav .v-container { min-height: 56px; }
</style>
