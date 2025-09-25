<template>
    <div class="ia">
      <!-- 左側直立箭頭 Spine -->
      <div class="spine">
        <span class="spine-text">{{ spineText }}</span>
      </div>
  
      <!-- 右側每一列：虛線 → 六角標籤 → 說明 -->
      <div class="rows">
        <div v-for="(it, i) in items" :key="i" class="row">
          <div class="dash" />
          <component :is="it.to ? 'RouterLink' : 'div'" :to="it.to" class="hex">
            <span class="hex-label">{{ it.title }}</span>
          </component>
          <div class="desc">{{ it.desc }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  
  defineProps({
    items: { type: Array, default: () => [] },
    spineText: { type: String, default: 'HOPE Art Studio' },
  })
  </script>
  
  <style scoped>
  .ia{ display:flex; gap:24px; align-items:stretch }
  
  .spine{
    min-width:120px;
    background:#2f4946; color:#fff;
    border-radius:16px;
    /* 右指向箭頭形狀 */
    clip-path: polygon(0 0, 72% 0, 100% 50%, 72% 100%, 0 100%, 8% 50%);
    display:flex; align-items:center; justify-content:center;
    padding:16px 0;
  }
  .spine-text{
    writing-mode: vertical-rl; transform: rotate(180deg);
    letter-spacing:.08em; font-weight:700;
  }
  
  .rows{ flex:1; display:flex; flex-direction:column; gap:18px }
  .row{ display:grid; grid-template-columns: 90px minmax(140px,220px) 1fr; align-items:center; gap:16px }
  
  .dash{ height:0; border-top:3px dashed #9fb5ad; }
  
  .hex{
    --bg:#355a55; --fg:#fff;
    background:var(--bg); color:var(--fg);
    padding:12px 22px; text-align:center; font-weight:700; text-decoration:none;
    /* 六角牌 */
    clip-path: polygon(12% 0, 88% 0, 100% 50%, 88% 100%, 12% 100%, 0 50%);
  }
  .hex:hover{ filter:brightness(1.05) }
  .desc{ color:rgba(0,0,0,.72) }
  
  @media (max-width: 960px){
    .ia{ gap:16px }
    .spine{ display:none }               /* 手機隱藏左側大箭頭 */
    .row{ grid-template-columns: minmax(140px,220px) 1fr; }
    .dash{ display:none }
  }
  
  @media (prefers-color-scheme: dark){
    .desc{ color:rgba(255,255,255,.75) }
    .dash{ border-top-color:rgba(255,255,255,.28) }
  }
  </style>
  