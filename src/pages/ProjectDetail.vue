<template>
  <v-container v-if="project">
    <!-- Hero：重用 Home 圖（400/800/1200）-->
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

    <div class="d-flex align-center ga-3 mb-2">
      <h1 class="text-h5 font-weight-bold m-0">{{ project.title }}</h1>
      <v-chip v-for="tag in project.tags" :key="tag" variant="tonal" size="small">{{ tag }}</v-chip>
    </div>
    <p class="text-medium-emphasis mb-6">{{ project.subtitle }}</p>

    <v-card rounded="xl" elevation="1" class="mb-6">
      <v-card-text class="text-body-1" style="white-space: pre-line">{{ project.description }}</v-card-text>
    </v-card>

    <v-row v-if="project.galleryBases?.length" dense>
      <v-col v-for="(base, i) in project.galleryBases" :key="base" cols="12" sm="6" md="4">
        <v-responsive aspect-ratio="4/3" class="rounded-lg overflow-hidden">
          <img
            :src="`${base}-800.jpg`"
            :srcset="`${base}-400.jpg 400w, ${base}-800.jpg 800w, ${base}-1200.jpg 1200w`"
            sizes="(min-width: 1280px) 33vw, (min-width: 960px) 33vw, 100vw"
            :alt="`${project.title} 圖片 ${i + 1}`"
            loading="lazy"
            decoding="async"
            style="width:100%;height:100%;object-fit:cover;object-position:center"
            @error="e => (e.target.src = `${base}-800.jpg`)"
          />
        </v-responsive>
      </v-col>
    </v-row>

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
