<template>
    <v-container>
      <v-breadcrumbs :items="[
        { title: 'Home', to: { name: 'home' } },
        { title: 'Projects', to: { name: 'projects' } },
        { title: id }
      ]" class="mb-4" />
  
      <h1 class="text-h4 font-weight-bold mb-2">Project: {{ id }}</h1>
      <p class="text-medium-emphasis mb-6">這裡之後放專案內容（圖片、描述、流程）。</p>
  
      <v-btn variant="text" :to="{ name: 'projects' }">← 回到列表</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const id = route.params.id?.toString() ?? 'unknown'
  </script>
  