<template>
    <div class="positioning-map">
      <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="xMidYMid meet">
        <!-- 箭頭樣式 -->
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" :fill="axisColor"/>
          </marker>
        </defs>
  
        <!-- 背景 -->
        <rect :width="W" :height="H" :fill="bg"/>
  
        <!-- 中線（X/Y 軸） -->
        <line :x1="W/2" y1="0" :x2="W/2" :y2="H" :stroke="axisColor" :stroke-width="1" stroke-dasharray="3 4"/>
        <line x1="0" :y1="H/2" :x2="W" :y2="H/2" :stroke="axisColor" :stroke-width="1" stroke-dasharray="3 4"/>
  
        <!-- 帶箭頭的軸線 -->
        <line :x1="m" :y1="H/2" :x2="W-m" :y2="H/2"
              :stroke="axisColor" :stroke-width="2" marker-end="url(#arrow)"/>
        <line :x1="W/2" :y1="H-m" :x2="W/2" :y2="m"
              :stroke="axisColor" :stroke-width="2" marker-end="url(#arrow)"/>
  
        <!-- 軸標籤 -->
        <text :x="m-8" :y="H/2+20" text-anchor="end" class="axis-text">{{ xLeft }}</text>
        <text :x="W-m+8" :y="H/2+20" text-anchor="start" class="axis-text">{{ xRight }}</text>
        <text :x="W/2" :y="m-8" text-anchor="middle" class="axis-text">{{ yTop }}</text>
        <text :x="W/2" :y="H-m+24" text-anchor="middle" class="axis-text">{{ yBottom }}</text>
  
        <!-- 點位（Logo + 文字） -->
        <g v-for="(p, i) in items" :key="i" :transform="`translate(${toX(p.x)}, ${toY(p.y)})`">
          <!-- Logo 圖片（center） -->
          <image v-if="p.img"
                 :href="p.img"
                 :x="-size(p)/2" :y="-size(p)/2"
                 :width="size(p)" :height="size(p)"
                 style="clip-path: inset(0 round 8)" />
          <!-- 圖片外框（可選） -->
          <rect v-if="p.frame" :x="-size(p)/2" :y="-size(p)/2" :width="size(p)" :height="size(p)"
                :stroke="axisColor" fill="none" rx="8"/>
  
          <!-- 標籤 -->
          <text :x="0" :y="size(p)/2 + 20"
                text-anchor="middle" class="label">{{ p.label }}</text>
        </g>
      </svg>
    </div>
  </template>
  
  <script setup>
  /**
   * props:
   * - items: [{ x:-100~100, y:-100~100, label:'', img:'/path.png', size?:number, frame?:boolean }]
   * - xLeft/xRight/yTop/yBottom: 軸標籤文字
   */
  const props = defineProps({
    items: { type: Array, required: true },
    xLeft:   { type: String, default: '一般' },
    xRight:  { type: String, default: '專業' },
    yTop:    { type: String, default: '範圍大' },
    yBottom: { type: String, default: '範圍小' },
  })
  
  /* 畫布尺寸（SVG 座標系） */
  const W = 1000
  const H = 560
  const m = 36              // 內邊距
  const bg = 'transparent'  // 或 '#fff'
  const axisColor = '#9aa0a6'
  
  /* -100..100 → SVG 座標 */
  const toX = x => m + ((x + 100) / 200) * (W - m*2)
  const toY = y => {
    // SVG y 往下，定位圖 y=100 在下方、y=-100 在上方
    const t = (y + 100) / 200
    return m + (1 - t) * (H - m*2)
  }
  
  /* 點大小 */
  const size = p => p.size || 66
  </script>
  
  <style scoped>
  .positioning-map { width: 100%; }
  .axis-text {
    font-size: 16px;
    fill: rgba(0,0,0,.7);
  }
  .label {
    font-size: 18px;
    fill: rgba(0,0,0,.85);
  }
  @media (prefers-color-scheme: dark) {
    .axis-text, .label { fill: rgba(255,255,255,.85); }
  }
  </style>
  