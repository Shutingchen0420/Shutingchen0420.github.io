<template>
    <!-- 外框 -->
    <v-sheet class="persona dashed" rounded="xl" elevation="0">
      <!-- 右上角徽章 -->
      <div class="badge">
        <v-chip size="large" variant="outlined" color="primary" :ripple="false">
          {{ segment }}
        </v-chip>
      </div>
  
      <v-container>
        <v-row class="align-start" dense>
          <!-- 左側照片 -->
          <v-col cols="12" md="4" class="d-flex justify-center">
            <v-img
              :src="photo"
              alt="persona photo"
              width="260" height="200"
              cover
              class="rounded-lg"
            />
          </v-col>
  
          <!-- 右側基本資料 -->
          <v-col cols="12" md="8">
            <div class="kv">
              <div class="row">
                <div class="k">姓名</div><div class="v">{{ name }}</div>
              </div>
              <div class="row">
                <div class="k">年齡</div><div class="v">{{ age }} 歲</div>
              </div>
              <div class="row">
                <div class="k">性別</div><div class="v">{{ gender }}</div>
              </div>
              <div class="row" v-if="job">
                <div class="k">工作</div><div class="v">{{ job }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
  
        <!-- 敘述 -->
        <v-divider class="my-5" />
  
        <div class="desc text-body-1" v-html="highlighted"></div>
      </v-container>
    </v-sheet>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    segment: { type: String, default: '一般民眾' },
    photo:   { type: String, required: true },          // 建議放 public/ 路徑，例如 /persona/shuting.jpg
    name:    { type: String, required: true },
    age:     { type: [String, Number], required: true },
    gender:  { type: String, default: '' },
    job:     { type: String, default: '' },
    description: { type: String, required: true },      // 純文字
    highlights:  { type: Array,  default: () => [] },   // 需要標紅的字串陣列
  })
  
  /* 將 description 中的關鍵字加上標記 */
  const highlighted = computed(() => {
    let html = props.description
    for (const key of props.highlights) {
      if (!key) continue
      const re = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
      html = html.replace(re, `<mark class="hl">${key}</mark>`)
    }
    return html.replace(/\n/g, '<br/>')  // 允許換行
  })
  </script>
  
  <style scoped>
  .persona {
    position: relative;
    padding: 16px 12px;
  }
  
  /* 虛線外框 */
  .dashed {
    border: 2px dashed var(--v-theme-outline-variant);
  }
  
  /* 右上角徽章 */
  .badge {
    position: absolute;
    right: 16px;
    top: -18px;
    background: transparent;
  }
  
  /* key-value 區 */
  .kv .row {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 12px;
    align-items: baseline;
    margin: 10px 0;
  }
  .kv .k {
    color: var(--v-theme-on-surface-variant);
    font-weight: 500;
    letter-spacing: .02em;
  }
  .kv .v {
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  /* 敘述與強調色 */
  .desc { line-height: 1.9; }
  .hl {
    background: transparent;
    color: #d32f2f;              /* 紅色強調 */
    font-weight: 700;
  }
  @media (max-width: 599px) {
    .kv .v { font-size: 1.1rem; }
  }
  </style>
  