<template>
  <!-- imageSide: 'right' | 'left'  決定圖片在右或左 -->
  <div class="snri" :class="imageSide">
    <!-- 圖片（控制比例 / 寬度） -->
    <v-responsive :aspect-ratio="ratioNum" class="img-box">
      <img :src="src" :alt="alt" class="img" />
      <!-- 圖上的錨點（依 y 百分比定位） -->
      <div v-for="(n, i) in notes" :key="'dot' + i" class="dot" :style="{ top: n.y + '%', '--x': (n.x || 0) + 'px' }" />
    </v-responsive>

    <!-- 註解與連接線：覆蓋在容器上，對齊到各自 y 位置 -->
    <div class="notes">
      <!-- 文字 -->
      <div v-for="(n, i) in notes" :key="'note' + i" class="note" :style="{ top: `calc(${n.y}% - 0.9em)` }">
        <div class="text">{{ n.text }}</div>
      </div>

      <!-- 連接線：從文字區邊界 → 圖片邊界 -->
      <div v-for="(n, i) in notes" :key="'line' + i" class="leader"
        :style="{ top: n.y + '%', '--x': (n.x || 0) + 'px' }" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** 圖片來源與無障礙說明 */
  src: { type: String, required: true },
  alt: { type: String, default: '' },

  /** 圖片長寬比：'16/9'、'3/4' 或數字（寬/高） */
  ratio: { type: [String, Number], default: '3/4' },

  /** 註解陣列：y 為對應到圖片中的垂直百分比（0=最上、100=最下） */
  notes: {
    type: Array,
    default: () => ([
      { y: 30, text: '上方註解' },
      { y: 75, text: '下方註解' },
    ])
  },

  /** 圖片在右或左 */
  imageSide: { type: String, default: 'right' }, // 'right' | 'left'
})

const ratioNum = computed(() => {
  if (typeof props.ratio === 'number') return props.ratio
  const [w, h] = String(props.ratio).split('/').map(Number)
  return (w && h) ? w / h : 3 / 4
})
</script>

<style scoped>
/* 版面參數（可在父層用 class 覆寫） */
.snri {
  --left-w: 44%;
  /* 左側（或右側）註解區寬度 */
  --img-w: 48%;
  /* 圖片寬度 */
  position: relative;
}

/* 圖片容器與圖片 */
.img-box {
  width: var(--img-w);
  border-radius: 16px;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block
}

/* 註解覆蓋層 */
.notes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* 需要選字可改為 auto */
}

/* 註解本體（依 y 定位） */
.note {
  position: absolute;
  width: var(--left-w);
}

.text {
  max-width: 360px;
  font-size: 18px;
  line-height: 1.7;
  color: rgba(0, 0, 0, .86);
}

/* 連接線（水平線） */
.leader {
  position: absolute;
  height: 0;
  border-top: 2px solid #2f4946;
  transform: translateY(-50%);
}

/* 圖上的錨點（小圓點） */
.dot {
  position: absolute;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2f4946;
  box-shadow: 0 0 0 3px #e1e8e4;
  pointer-events: none;
}

/* ——— 右圖（預設） ——— */
.snri.right .img-box {
  margin-left: auto;
  margin-right: 0;
}

.snri.right .note {
  left: 0;
  text-align: left;
}

.snri.right .leader {
  left: var(--left-w);
  right: var(--img-w);
}

.snri.right .dot {
  left: calc(var(--left-w) + 0px);
}

/* ——— 左圖（反過來） ——— */
.snri.left .img-box {
  margin-right: auto;
  margin-left: 0;
}

.snri.left .note {
  right: 0;
  left: auto;
  text-align: left;
}

/* 可改 right 對齊 */
.snri.left .leader {
  left: var(--img-w);
  right: var(--left-w);
}

.snri.left .dot {
  right: calc(var(--left-w) + 0px);
  left: auto;
}

/* 右圖（預設）：從文字區右緣 + xpx → 圖片左緣 */
.snri.right .leader{ left: calc(var(--left-w) + var(--x, 0px)); right: var(--img-w); }
.snri.right .dot{ left: calc(var(--left-w) + var(--x, 0px)); }

/* 左圖（反向）：從圖片右緣 ← 文字區左緣 - xpx */
.snri.left .leader{ left: var(--img-w); right: calc(var(--left-w) + var(--x, 0px)); }
.snri.left .dot{ right: calc(var(--left-w) + var(--x, 0px)); left: auto; }


/* 手機直向：單欄、隱藏線與錨點 */
@media (max-width: 768px) {
  .snri {
    --left-w: 100%;
    --img-w: 100%;
  }

  .img-box {
    width: 100%;
    margin: 0;
  }

  .notes {
    position: static;
    margin-top: 12px;
  }

  .note {
    position: static;
    width: 100%;
    margin-bottom: 12px;
  }

  .leader,
  .dot {
    display: none;
  }

  .text {
    max-width: none;
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  .text {
    color: rgba(255, 255, 255, .9)
  }

  .leader {
    border-top-color: rgba(255, 255, 255, .7)
  }
}
</style>
