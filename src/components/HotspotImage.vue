<template>
    <div class="relative" :style="wrapStyle">
      <img :src="src" :alt="alt" class="w-100 h-100" style="object-fit: cover" />
      <v-dialog v-model="open" max-width="420" :scrim="false">
        <v-card v-if="active">
          <v-card-title class="text-subtitle-1 font-weight-bold">{{ active.title }}</v-card-title>
          <v-card-text class="text-body-2 text-medium-emphasis" style="white-space: pre-line;">
            {{ active.text }}
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- 熱點 -->
      <button
        v-for="(s, i) in spots"
        :key="i"
        class="hotspot"
        :style="{ left: s.x + '%', top: s.y + '%' }"
        @click="openSpot(s)"
        :aria-label="s.title"
        type="button"
      >
        <v-icon size="18">mdi-information</v-icon>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    ratio: { type: String, default: '16/9' },          // '寬/高'
    spots: { type: Array, default: () => [] }          // [{x: %, y: %, title, text}]
  })
  
  const [w, h] = props.ratio.split('/').map(Number)
  const wrapStyle = computed(() => ({
    aspectRatio: `${w} / ${h}`,
    borderRadius: '16px',
    overflow: 'hidden'
  }))
  
  const open = ref(false)
  const active = ref(null)
  const openSpot = (s) => { active.value = s; open.value = true }
  </script>
  
  <style scoped>
  .relative { position: relative; width: 100%; }
  .hotspot {
    position: absolute; transform: translate(-50%, -50%);
    border: 0; background: #fff; color: #1e293b;
    border-radius: 999px; width: 28px; height: 28px;
    box-shadow: 0 4px 14px rgba(0,0,0,.18); cursor: pointer;
    display: grid; place-items: center;
  }
  .hotspot:hover { filter: brightness(0.95); }
  </style>  