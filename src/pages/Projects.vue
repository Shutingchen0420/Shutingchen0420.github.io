<template>
  <v-container>
    <!-- Sticky 工具列：搜尋 + 類別快速跳 -->
    <v-sheet class="sticky-nav" elevation="1" rounded="xl">
      <div class="d-flex align-center flex-wrap ga-3">
        <v-text-field v-model="q" density="comfortable" clearable
          prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
          placeholder="搜尋作品（標題 / 標籤）" class="flex-grow-1" />
        <div class="d-flex ga-2">
          <v-chip
            v-for="c in categories" :key="c.key"
            :to="{ name: 'projects', hash: `#${c.key}` }"
            :ripple="false" variant="tonal"
            :color="activeHash === `#${c.key}` ? 'primary' : undefined"
          >{{ c.label }}</v-chip>
          <v-chip variant="text" :ripple="false" @click="scrollTop">Top</v-chip>
        </div>
      </div>
    </v-sheet>

    <!-- 類別區塊 -->
    <section v-for="c in categories" :key="c.key">
      <div :id="c.key" class="category-anchor"></div>
      <div class="text-h5 font-weight-bold mt-8 mb-3">{{ c.label }}</div>

      <v-row v-if="grouped[c.key]?.length" dense>
        <v-col cols="12" sm="6" md="4" v-for="p in grouped[c.key]" :key="p.slug">
          <v-card :to="{ name: 'project-detail', params: { slug: p.slug } }" rounded="xl" hover>
            <v-responsive aspect-ratio="16/9" class="rounded-t-xl overflow-hidden">
              <img
                :src="`${p.base}-800.jpg`"
                :srcset="`${p.base}-400.jpg 400w, ${p.base}-800.jpg 800w, ${p.base}-1200.jpg 1200w`"
                sizes="(min-width: 1280px) 33vw, (min-width: 960px) 50vw, 100vw"
                :alt="p.alt || p.title"
                loading="lazy" decoding="async"
                style="width:100%;height:100%;object-fit:cover;object-position:center"
              />
            </v-responsive>
            <v-card-title class="mt-2">{{ p.title }}</v-card-title>
            <v-card-subtitle>{{ p.subtitle }}</v-card-subtitle>
            <v-card-actions class="pt-0">
              <v-chip v-for="t in p.tags" :key="t" size="small" variant="outlined" class="ma-1">{{ t }}</v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-alert v-else variant="tonal" type="info">
        這個類別沒有符合「{{ q }}」的作品。
      </v-alert>
    </section>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { projects } from '../data/projects'

const q = ref('')

// 類別定義（順序 & 顯示名稱）
const categories = [
  { key: 'research', label: '研究｜HoloLens' },
  { key: 'ui',       label: 'UI' },
  { key: 'graphic',  label: '視覺設計' },
]

// 搜尋：比對 title / subtitle / tags
const norm = s => (s || '').toLowerCase()
const filtered = computed(() => {
  const k = norm(q.value)
  if (!k) return projects
  return projects.filter(p =>
    norm(p.title).includes(k) ||
    norm(p.subtitle).includes(k) ||
    (p.tags?.some(t => norm(t).includes(k)))
  )
})

// 分組顯示
const grouped = computed(() => {
  const g = Object.fromEntries(categories.map(c => [c.key, []]))
  for (const p of filtered.value) g[p.category || 'research'].push(p)
  return g
})

// 追蹤目前 hash，讓 chip 高亮
const activeHash = ref('')
const onHashChange = () => { activeHash.value = window.location.hash }
onMounted(() => { onHashChange(); window.addEventListener('hashchange', onHashChange) })
onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<style scoped>
.sticky-nav {
  position: sticky;
  top: 64px;                 /* 視你的 App Bar 高度微調 */
  z-index: 10;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(8px);
  padding: 12px 16px;
}
.category-anchor { scroll-margin-top: 88px; } /* 跳錨點時不被 App Bar 擋住 */
</style>
