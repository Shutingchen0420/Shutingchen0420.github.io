<template>
  <!-- Hero 區 -->
  <v-sheet class="pa-8" rounded="xl" elevation="1">
    <div class="text-h4 font-weight-bold mb-2">嗨，我是 Shuting</div>
    <div class="text-body-1 text-medium-emphasis mb-6">
      這裡是我的個人作品集網站。
    </div>
    <div class="d-flex gap-3">
      <v-btn color="primary" :to="{ name: 'projects' }" prepend-icon="mdi-briefcase" >查看作品</v-btn>
      <v-btn variant="outlined" :to="{ name: 'about' }" prepend-icon="mdi-account" class="ml-5">關於我</v-btn>
    </div>
  </v-sheet>

  <!-- 作品卡片（示例） -->
  <div class="text-h5 font-weight-bold mt-10 mb-4">最新作品</div>
  <v-row>
  <v-col cols="12" sm="6" md="4" v-for="card in cards" :key="card.slug">
    <v-card :to="linkTo(card)" rounded="xl" hover>
      <!-- 固定 16:9 比例，裡面放原生 <img>（只有 JPG）-->
      <v-responsive aspect-ratio="16/9" class="rounded-t-xl overflow-hidden">
        <img
          :src="`${card.base}-800.jpg`"
          :srcset="`${card.base}-400.jpg 400w, ${card.base}-800.jpg 800w, ${card.base}-1200.jpg 1200w`"
          sizes="(min-width: 1280px) 33vw, (min-width: 960px) 50vw, 100vw"
          :alt="card.alt"
          loading="lazy"
          decoding="async"
          style="width:100%;height:100%;object-fit:cover;object-position:center"
        />
      </v-responsive>

      <v-card-title class="mt-2">{{ card.title }}</v-card-title>
      <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
      <v-card-actions>
        <v-btn variant="text" :to="linkTo(card)">詳細</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
</template>

<script setup>
import { projects } from '../data/projects'

const cards = projects.slice(0, 3)

const linkTo = (item) =>
  item.routeName
    ? { name: item.routeName }                                  // 走自訂頁
    : { name: 'project-detail', params: { slug: item.slug } }   // 走共用頁

</script>

