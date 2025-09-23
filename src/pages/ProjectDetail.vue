<template>
  <v-container v-if="project">
    <!-- Hero：重用 Home 同一張（-400/-800/-1200） -->
    <v-responsive aspect-ratio="16/9" class="rounded-xl overflow-hidden mb-6">
      <img
        :src="`${project.base}-800.jpg`"
        :srcset="`${project.base}-400.jpg 400w, ${project.base}-800.jpg 800w, ${project.base}-1200.jpg 1200w`"
        sizes="100vw"
        :alt="`${project.title} hero`"
        fetchpriority="high"
        decoding="async"
        style="width:100%;height:100%;object-fit:cover;object-position:center"
        @error="e => (e.target.src = `${project.base}-800.jpg`)"
      />
    </v-responsive>

    <!-- 標題 + 標籤（手機可換行） -->
    <div class="d-flex align-center flex-wrap ga-3 mb-2">
      <h1 class="project-title m-0">{{ project.title }}</h1>
      <div class="d-flex flex-wrap ga-2">
        <v-chip v-for="tag in project.tags" :key="tag" variant="tonal" size="small">{{ tag }}</v-chip>
      </div>
    </div>
    <p class="text-h6 text-medium-emphasis mb-6">{{ project.subtitle }}</p>

    <!-- ✅ 圖文內容 -->
    <div v-if="project.content?.length" class="rich">
      <template v-for="(b, i) in project.content" :key="i">
        <!-- 標題 -->
        <h2 v-if="b.type === 'h2'" class="mt-8 mb-3 text-h6 font-weight-bold">{{ b.text }}</h2>
        <h3 v-else-if="b.type === 'h3'" class="mt-6 mb-2 text-subtitle-1 font-weight-bold">{{ b.text }}</h3>

        <!-- 段落 / 清單 / 分隔線 -->
        <p v-else-if="b.type === 'p'" class="text-body-1 text-medium-emphasis" style="white-space: pre-line;">{{ b.text }}</p>
        <ul v-else-if="b.type === 'list'" class="mb-4">
          <li v-for="(item, j) in b.items" :key="j" class="text-body-1 text-medium-emphasis">{{ item }}</li>
        </ul>
        <v-divider v-else-if="b.type === 'hr'" class="my-6" />

        <!-- 單張圖片 -->
        <figure v-else-if="b.type === 'img'" class="my-5">
          <v-responsive :aspect-ratio="b.ratio || '16/9'" class="rounded-xl overflow-hidden">
            <img
              :src="`${b.base}-800.jpg`"
              :srcset="`${b.base}-400.jpg 400w, ${b.base}-800.jpg 800w, ${b.base}-1200.jpg 1200w`"
              sizes="100vw"
              :alt="b.alt || 'image'"
              loading="lazy"
              decoding="async"
              style="width:100%;height:100%;object-fit:cover;object-position:center"
              @error="e => (e.target.src = `${b.base}-800.jpg`)"
            />
          </v-responsive>
          <figcaption v-if="b.caption" class="text-caption text-medium-emphasis mt-2">{{ b.caption }}</figcaption>
        </figure>

        <!-- 圖片群組 -->
        <figure v-else-if="b.type === 'imageGrid'" class="my-5">
          <v-row dense>
            <v-col v-for="(img, k) in b.images" :key="k" :cols="12" :sm="12 / Math.min(b.images.length, 3)">
              <v-responsive :aspect-ratio="b.ratio || '4/3'" class="rounded-xl overflow-hidden">
                <img
                  :src="`${img.base}-800.jpg`"
                  :srcset="`${img.base}-400.jpg 400w, ${img.base}-800.jpg 800w, ${img.base}-1200.jpg 1200w`"
                  sizes="(min-width: 960px) 50vw, 100vw"
                  :alt="img.alt || 'image'"
                  loading="lazy"
                  decoding="async"
                  style="width:100%;height:100%;object-fit:cover;object-position:center"
                  @error="e => (e.target.src = `${img.base}-800.jpg`)"
                />
              </v-responsive>
            </v-col>
          </v-row>
          <figcaption v-if="b.caption" class="text-caption text-medium-emphasis mt-2">{{ b.caption }}</figcaption>
        </figure>

        <!-- 🔵 熱點圖片：b.type === 'hotspot' -->
        <figure v-else-if="b.type === 'hotspot'" class="my-5">
          <v-responsive :aspect-ratio="b.ratio || '16/9'" class="rounded-xl overflow-hidden">
            <img :src="b.src" :alt="b.alt || 'hotspot image'"
                 style="width:100%;height:100%;object-fit:cover;object-position:center" />
            <div class="hotspot-layer">
              <button
                v-for="(s, k) in b.spots"
                :key="k"
                class="hotspot"
                :style="{ left: s.x + '%', top: s.y + '%' }"
                type="button"
                @click="openSpot(s)"
                :aria-label="s.title"
              >
                <v-icon size="18">mdi-information</v-icon>
              </button>
            </div>
          </v-responsive>
          <figcaption v-if="b.caption" class="text-caption text-medium-emphasis mt-2">{{ b.caption }}</figcaption>
        </figure>

        <!-- 🟣 色票：b.type === 'colors' -->
        <div v-else-if="b.type === 'colors'" class="my-4">
          <div class="d-flex flex-wrap ga-3">
            <div v-for="hex in b.items" :key="hex" class="swatch" @click="copy(hex)">
              <div class="chip" :style="{ background: hex }" />
              <div class="label">{{ hex }}</div>
            </div>
          </div>
          <v-alert v-if="copied" type="success" variant="tonal" class="mt-3">{{ copied }} 已複製</v-alert>
        </div>

        <!-- 🟠 Lightbox：b.type === 'lightbox' -->
        <div v-else-if="b.type === 'lightbox'" class="my-4">
          <v-row dense>
            <v-col v-for="(img, k) in b.images" :key="k" cols="12" :sm="12 / (b.columns || 2)">
              <v-responsive :aspect-ratio="b.ratio || '16/9'" class="rounded-xl overflow-hidden">
                <img
                  :src="`${img.base ? img.base + '-800.jpg' : img.src}`"
                  :srcset="img.base ? `${img.base}-400.jpg 400w, ${img.base}-800.jpg 800w, ${img.base}-1200.jpg 1200w` : undefined"
                  sizes="(min-width: 960px) 50vw, 100vw"
                  :alt="img.alt || 'image'"
                  loading="lazy"
                  decoding="async"
                  style="width:100%;height:100%;object-fit:cover;cursor:zoom-in"
                  @click="openLightbox(b.images.map(toUrl), k)"
                />
              </v-responsive>
            </v-col>
          </v-row>
          <div v-if="b.caption" class="text-caption text-medium-emphasis mt-2">{{ b.caption }}</div>
        </div>

        <!-- 單顆按鈕 -->
        <div v-else-if="b.type === 'btn'" class="my-3">
          <v-btn
            :color="b.color || 'primary'"
            :variant="b.variant || 'flat'"
            :href="b.href"
            :to="b.to"
            :target="b.target || (b.href ? '_blank' : undefined)"
            :rel="b.href ? 'noopener' : undefined"
            :prepend-icon="b.icon"
            :append-icon="b.appendIcon"
          >
            {{ b.label }}
          </v-btn>
        </div>

        <!-- 段落 + 按鈕 -->
        <div v-else-if="b.type === 'cta'" class="d-flex flex-wrap align-center ga-3 my-3">
          <p class="text-body-1 text-medium-emphasis m-0">{{ b.text }}</p>
          <v-btn
            :color="b.color || 'primary'"
            :variant="b.variant || 'flat'"
            :href="b.href"
            :to="b.to"
            :target="b.target || (b.href ? '_blank' : undefined)"
            :rel="b.href ? 'noopener' : undefined"
            :prepend-icon="b.icon"
            :append-icon="b.appendIcon"
          >
            {{ b.label }}
          </v-btn>
        </div>
      </template>
    </div>

    <!-- fallback：沒有 content 就用描述/圖庫 -->
    <template v-else>
      <v-card rounded="xl" elevation="1" class="mb-6">
        <v-card-text class="text-body-1" style="white-space: pre-line">{{ project.description }}</v-card-text>
      </v-card>
    </template>

    <v-btn class="mt-6" variant="text" :to="{ name: 'projects' }">← 回到作品</v-btn>

    <!-- 全域：Hotspot / Lightbox 對話框 -->
    <v-dialog v-model="hotspot.open" max-width="420" :scrim="false">
      <v-card v-if="hotspot.active">
        <v-card-title class="text-subtitle-1 font-weight-bold">{{ hotspot.active.title }}</v-card-title>
        <v-card-text class="text-body-2 text-medium-emphasis" style="white-space: pre-line;">
          {{ hotspot.active.text }}
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="lightbox.open" max-width="1200px">
      <v-card class="pa-2">
        <v-carousel v-model="lightbox.index" hide-delimiter-background>
          <v-carousel-item v-for="(img, i) in lightbox.list" :key="i">
            <v-img :src="img" height="70vh" cover />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-container>

  <v-container v-else>
    <v-alert type="warning" variant="tonal" title="找不到這個作品">可能網址有誤或尚未建立。</v-alert>
    <v-btn class="mt-4" variant="text" :to="{ name: 'projects' }">回到作品</v-btn>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/projects'

const route = useRoute()
const slug = computed(() => route.params.slug?.toString() || '')
const project = computed(() => getProjectBySlug(slug.value))

/* Lightbox */
const lightbox = ref({ open: false, list: [], index: 0 })
const toUrl = (img) => (img.base ? `${img.base}-1200.jpg` : img.src)
const openLightbox = (list, start = 0) => { lightbox.value = { open: true, list: list.map(toUrl), index: start } }

/* Hotspot */
const hotspot = ref({ open: false, active: null })
const openSpot = (s) => { hotspot.value = { open: true, active: s } }

/* 色票複製 */
const copied = ref('')
const copy = async (txt) => {
  try { await navigator.clipboard.writeText(txt); copied.value = txt; setTimeout(() => copied.value = '', 1400) } catch {}
}
</script>

<style scoped>
.rich :is(p, ul, figure) { margin-block: 12px; }
.rich ul { padding-left: 20px; }

.project-title { font-weight: 700; line-height: 1.25; font-size: 1.375rem; }
@media (min-width: 600px) { .project-title { font-size: 1.75rem; } }

/* Hotspot */
.hotspot-layer { position: absolute; inset: 0; pointer-events: none; }
.hotspot-layer .hotspot {
  position: absolute; transform: translate(-50%, -50%);
  pointer-events: auto; border: 0; background: #fff; color: #1e293b;
  border-radius: 999px; width: 28px; height: 28px;
  box-shadow: 0 4px 14px rgba(0,0,0,.18); cursor: pointer;
  display: grid; place-items: center;
}

/* 色票 */
.swatch { cursor: pointer; width: 92px; }
.swatch .chip { height: 48px; border-radius: 10px; border: 1px solid rgba(0,0,0,.08); }
.swatch .label { font-size: 12px; margin-top: 6px; text-align: center; }
</style>
