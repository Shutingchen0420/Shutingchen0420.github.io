<template>
  <v-container v-if="project">
    <!-- Hero：重用 Home 同一張（-400/-800/-1200） -->
    <v-responsive aspect-ratio="16/9" class="rounded-xl overflow-hidden mb-6">
      <img :src="`${project.base}-800.jpg`"
        :srcset="`${project.base}-400.jpg 400w, ${project.base}-800.jpg 800w, ${project.base}-1200.jpg 1200w`"
        sizes="100vw" :alt="`${project.title} hero`" fetchpriority="high" decoding="async"
        style="width:100%;height:100%;object-fit:cover;object-position:center"
        @error="e => (e.target.src = `${project.base}-800.jpg`)" />
    </v-responsive>

    <div class="d-flex align-center ga-3 mb-2">
      <h1 class="text-h4 font-weight-bold m-0">{{ project.title }}</h1>
      <v-chip v-for="tag in project.tags" :key="tag" variant="tonal" size="small">{{ tag }}</v-chip>
    </div>
    <p class="text-h6 text-medium-emphasis mb-6">
      {{ project.subtitle }}
    </p>

    <!-- ✅ 圖文內容：優先 -->
    <div v-if="project.content?.length" class="rich">
      <template v-for="(b, i) in project.content" :key="i">
        <!-- 標題 -->
        <h2 v-if="b.type === 'h2'" class="mt-8 mb-3 text-h6 font-weight-bold">{{ b.text }}</h2>
        <h3 v-else-if="b.type === 'h3'" class="mt-6 mb-2 text-subtitle-1 font-weight-bold">{{ b.text }}</h3>

        <!-- 段落 -->
        <p v-else-if="b.type === 'p'" class="text-body-1 text-medium-emphasis" style="white-space: pre-line;">
          {{ b.text }}
        </p>

        <!-- 清單 -->
        <ul v-else-if="b.type === 'list'" class="mb-4">
          <li v-for="(item, j) in b.items" :key="j" class="text-body-1 text-medium-emphasis">
            {{ item }}
          </li>
        </ul>

        <!-- 分隔線 -->
        <v-divider v-else-if="b.type === 'hr'" class="my-6" />

        <!-- 單張圖片（含 caption 可選） -->
        <figure v-else-if="b.type === 'img'" class="my-5">
          <v-responsive :aspect-ratio="b.ratio || '16/9'" class="rounded-xl overflow-hidden">
            <img :src="`${b.base}-800.jpg`"
              :srcset="`${b.base}-400.jpg 400w, ${b.base}-800.jpg 800w, ${b.base}-1200.jpg 1200w`" sizes="100vw"
              :alt="b.alt || 'image'" loading="lazy" decoding="async"
              style="width:100%;height:100%;object-fit:cover;object-position:center"
              @error="e => (e.target.src = `${b.base}-800.jpg`)" />
          </v-responsive>
          <figcaption v-if="b.caption" class="text-caption text-medium-emphasis mt-2">{{ b.caption }}</figcaption>
        </figure>

        <!-- 圖片群組（2~3 張並排） -->
        <figure v-else-if="b.type === 'imageGrid'" class="my-5">
          <v-row dense>
            <v-col v-for="(img, k) in b.images" :key="k" :cols="12" :sm="12 / Math.min(b.images.length, 3)">
              <v-responsive :aspect-ratio="b.ratio || '4/3'" class="rounded-xl overflow-hidden">
                <img :src="`${img.base}-800.jpg`"
                  :srcset="`${img.base}-400.jpg 400w, ${img.base}-800.jpg 800w, ${img.base}-1200.jpg 1200w`"
                  sizes="(min-width: 960px) 50vw, 100vw" :alt="img.alt || 'image'" loading="lazy" decoding="async"
                  style="width:100%;height:100%;object-fit:cover;object-position:center"
                  @error="e => (e.target.src = `${img.base}-800.jpg`)" />
              </v-responsive>
            </v-col>
          </v-row>
          <figcaption v-if="b.caption" class="text-caption text-medium-emphasis mt-2">{{ b.caption }}</figcaption>
        </figure>
      </template>
    </div>

    <!-- ⬇️ 舊版 fallback：沒有 content 就用描述 + 圖庫 -->
    <template v-else>
      <v-card rounded="xl" elevation="1" class="mb-6">
        <v-card-text class="text-body-1" style="white-space: pre-line">{{ project.description }}</v-card-text>
      </v-card>
      <v-row v-if="project.galleryBases?.length" dense>
        <v-col v-for="(base, i) in project.galleryBases" :key="base" cols="12" sm="6" md="4">
          <v-responsive aspect-ratio="4/3" class="rounded-lg overflow-hidden">
            <img :src="`${base}-800.jpg`" :srcset="`${base}-400.jpg 400w, ${base}-800.jpg 800w, ${base}-1200.jpg 1200w`"
              sizes="(min-width: 1280px) 33vw, (min-width: 960px) 33vw, 100vw" :alt="`${project.title} 圖片 ${i + 1}`"
              loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:center"
              @error="e => (e.target.src = `${base}-800.jpg`)" />
          </v-responsive>
        </v-col>
      </v-row>
    </template>

    <v-btn class="mt-6" variant="text" :to="{ name: 'projects' }">← 回到作品</v-btn>
  </v-container>

  <v-container v-else>
    <v-alert type="warning" variant="tonal" title="找不到這個作品">
      可能網址有誤或尚未建立。
    </v-alert>
    <v-btn class="mt-4" variant="text" :to="{ name: 'projects' }">回到作品</v-btn>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/projects'

const route = useRoute()
const slug = computed(() => route.params.slug?.toString() || '')
const project = computed(() => getProjectBySlug(slug.value))
</script>

<style scoped>
.rich :is(p, ul, figure) {
  margin-block: 12px;
}

.rich ul {
  padding-left: 20px;
}
</style>
