<template>
  <v-app>
    <AppNav />
    <v-main>
      <v-container class="py-10">
        <router-view />
      </v-container>
    </v-main>
    <v-footer app class="py-6">
      <v-container class="text-center text-medium-emphasis">
        © {{ new Date().getFullYear() }} Shuting 
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import AppNav from './components/AppNav.vue'
</script>
