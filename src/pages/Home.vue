<template>
    <!-- Hero 區 -->
    <v-sheet class="pa-8" rounded="xl" elevation="1">
      <div class="text-h4 font-weight-bold mb-2">嗨，我是 Shuting</div>
      <div class="text-body-1 text-medium-emphasis mb-6">
        視覺／UI 設計師，這裡是我的個人作品集網站（Vue 3 + Vuetify）。
      </div>
      <div class="d-flex gap-3">
        <v-btn color="primary" :to="{ name: 'projects' }" prepend-icon="mdi-briefcase">查看作品</v-btn>
        <v-btn variant="outlined" :to="{ name: 'about' }" prepend-icon="mdi-account">關於我</v-btn>
      </div>
    </v-sheet>
  
    <!-- 作品卡片（示例） -->
    <div class="text-h5 font-weight-bold mt-10 mb-4">最新作品</div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="card in cards" :key="card.title">
        <v-card :to="card.to" rounded="xl" hover>
          <v-img :src="card.img" height="180" cover />
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-btn variant="text" :to="card.to">詳細</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  const cards = [
    { title: '展覽主視覺', subtitle: 'Graphic / Poster',       to: { name: 'projects' } },
    { title: '品牌形象網站', subtitle: 'UI / Web',              to: { name: 'projects' } },
    { title: '教育圖示集',   subtitle: 'Icon / Illustration',   to: { name: 'projects' } },
  ]
  </script>
  