<template>
    <v-responsive :aspect-ratio="ratio" class="rounded-xl overflow-hidden">
      <iframe
        :src="embedUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        style="width:100%;height:100%;display:block"
      ></iframe>
    </v-responsive>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    id: { type: String, required: true },              // 影片 ID
    ratio: { type: [String, Number], default: '16/9' },
    start: { type: Number, default: 0 },
    autoplay: { type: Boolean, default: false },
    mute: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
  })
  
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
  