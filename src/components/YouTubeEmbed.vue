<template>
    <!-- 外層可控尺寸：maxWidth / height -->
    <div
      class="mx-auto"
      :style="{
        maxWidth: maxWidth || undefined,
        height: height || undefined
      }"
    >
      <!-- 有 height 時就不吃 aspect-ratio，讓容器高度生效 -->
      <v-responsive
        :aspect-ratio="hasHeight ? undefined : ratio"
        class="rounded-xl overflow-hidden"
        :style="hasHeight ? 'height:100%' : ''"
      >
        <iframe
          :src="embedUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          style="width:100%;height:100%;display:block;border:0"
        ></iframe>
      </v-responsive>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    id: { type: String, required: true },                 // 影片 ID
    ratio: { type: [String, Number], default: '16/9' },   // 沒有 height 時生效
    start: { type: Number, default: 0 },
    autoplay: { type: Boolean, default: false },
    mute: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
  
    // ⬇️ 新增：可直接控制尺寸
    height: { type: String, default: '' },                // 例：'460px' 或 'clamp(240px,40vw,560px)'
    maxWidth: { type: String, default: '' },              // 例：'880px'、'min(92vw, 1000px)'
  })
  
  const hasHeight = computed(() => !!props.height)
  
  const embedUrl = computed(() => {
    const q = new URLSearchParams({
      rel: '0',
      playsinline: '1',
      start: String(props.start || 0),
      autoplay: props.autoplay ? '1' : '0',
      mute: props.mute ? '1' : '0',
      loop: props.loop ? '1' : '0',
    })
    if (props.loop) q.set('playlist', props.id) // loop 單片需要 playlist=ID
    return `https://www.youtube-nocookie.com/embed/${props.id}?${q.toString()}`
  })
  </script>
  