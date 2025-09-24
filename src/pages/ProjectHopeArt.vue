<template>
    <v-container>
        <!-- 章節導覽（吸頂） -->
        <v-sheet class="sticky-nav" elevation="1" rounded="xl">
            <div class="d-flex align-center flex-wrap ga-2">
                <v-chip v-for="s in sections" :key="s.id" :color="hash === '#' + s.id ? 'primary' : undefined"
                    variant="tonal" :ripple="false" @click="scrollTo(s.id)">
                    {{ s.label }}
                </v-chip>

                <v-spacer />
                <v-btn size="small" variant="text" :to="{ name: 'projects' }">← 返回作品</v-btn>
            </div>
        </v-sheet>

        <!-- Hero / 基本資訊 -->
        <section id="intro" class="mb-8">
            <v-responsive aspect-ratio="16/9" class="rounded-xl overflow-hidden mb-4">
                <img src="/img/ui-hopeart-1200.jpg" alt="HOPE Art Studio hero"
                    style="width:100%;height:100%;object-fit:cover" />
            </v-responsive>

            <v-row dense>
                <v-col cols="12" md="7">
                    <h1 class="text-h5 font-weight-bold mb-2">HOPE Art Studio 官網</h1>
                    <p class="text-subtitle-1 text-medium-emphasis">
                        以黑白為基調強化品牌識別；導入月刊／藝術家／作品等模組化內容，提升導流與瀏覽效率。
                    </p>
                    <div class="d-flex ga-2 mt-2">
                        <v-chip size="small" variant="outlined">UI</v-chip>
                        <v-chip size="small" variant="outlined">Web</v-chip>
                        <v-chip size="small" variant="outlined">RWD</v-chip>
                    </div>
                </v-col>

                <v-col cols="12" md="5">
                    <v-card rounded="xl" elevation="1">
                        <v-card-text class="text-body-2">
                            <div class="d-flex justify-space-between"><span>設計時間</span><span>2022</span></div>
                            <div class="d-flex justify-space-between"><span>參與</span><span>陳姝廷</span></div>
                            <div class="d-flex justify-space-between">
                                <span>網址</span>
                                <a class="text-primary" href="https://hopeart.com.tw/" target="_blank"
                                    rel="noopener">hopeart.com.tw (目前網站已下架)</a>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </section>

        <!-- 定義問題與策略（熱點圖） -->
        <section id="strategy" class="mb-10">
            <div class="text-h6 font-weight-bold mb-3">定義問題與策略</div>
            <figure class="my-5">
                <v-responsive aspect-ratio="4/3" class="rounded-xl overflow-hidden">
                    <img src="/hopeart/hope.jpg" alt="策略三角示意" style="width:100%;height:100%;object-fit:cover" />
                    <div class="hotspot-layer">
                        <button v-for="(s, i) in strategySpots" :key="i" class="hotspot"
                            :style="{ left: s.x + '%', top: s.y + '%' }" type="button" @click="openSpot(s)"
                            :aria-label="s.title">
                            <v-icon size="18">mdi-information</v-icon>
                        </button>
                    </div>
                </v-responsive>
            </figure>
        </section>

        <!-- 色彩與字體（色票可複製） -->
        <section id="brand" class="mb-10">
            <div class="text-h6 font-weight-bold mb-3">色彩與字體</div>
            <p class="text-subtitle-1 text-medium-emphasis mb-3">
                主要色彩為白底黑字，目的是以簡單、乾淨的畫面來襯托藝術創作。在需要營造寧靜、神秘氛圍時使用黑底白字。
                </br>小範圍點綴使用黃色，用於營造強烈的品牌印象。暖灰則是用於背景有需要層次分隔時，以輔助白色。
            </p>
            <div rounded="xl" elevation="1">
                <img src="/hopeart/color.jpg" alt="色彩" style="width:100%;height:100%;object-fit:cover" />
                <v-card-title class="pb-0">色票</v-card-title>
                <v-card-text>
                    <div class="d-flex flex-wrap ga-3">
                        <div v-for="c in colors" :key="c.hex" class="swatch" @click="copy(c.hex)">
                            <div class="chip" :style="{ background: c.hex }" />
                            <div class="label">{{ c.hex }}</div>
                        </div>
                    </div>
                    <div class="text-caption text-medium-emphasis mt-2 ml-2">點色票可複製</div>
                    <v-alert v-if="copied" type="success" variant="tonal" class="mt-3">{{ copied }} 已複製</v-alert>
                </v-card-text>
            </div>
            <v-card rounded="xl" elevation="1" class="mt-5">
                <v-card-title class="pb-0">字體</v-card-title>
                <v-card-text>
                    <div class="font-sample noto">希望藝術，成為你的希望 · Noto Sans</div>
                    <div class="font-sample georgia">LET ART BE YOUR HOPE · Georgia</div>
                </v-card-text>
            </v-card>
        </section>

        <!-- 資訊架構（熱點圖） -->
        <section id="ia" class="mb-10">
            <div class="text-h6 font-weight-bold mb-3">官網整體架構</div>
            <figure class="my-5">
                <v-responsive aspect-ratio="16/9" class="rounded-xl overflow-hidden">
                    <img src="/hopeart/hope.jpg" alt="資訊架構" style="width:100%;height:100%;object-fit:cover" />
                    <div class="hotspot-layer">
                        <button v-for="(s, i) in iaSpots" :key="i" class="hotspot"
                            :style="{ left: s.x + '%', top: s.y + '%' }" type="button" @click="openSpot(s)"
                            :aria-label="s.title">
                            <v-icon size="18">mdi-information</v-icon>
                        </button>
                    </div>
                </v-responsive>
            </figure>
        </section>

        <!-- 頁面範例（可點放大） -->
        <section id="examples" class="mb-10">
            <div class="text-h6 font-weight-bold mb-3">頁面範例</div>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-img src="/hopeart/hope.jpg" height="300" cover class="rounded-lg"
                        @click="openLightbox(['/hopeart/monthly.jpg'])" />
                    <div class="text-caption text-medium-emphasis mt-1">月刊頁：以主題卡與大小版型引導點擊</div>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img src="/hopeart/hope.jpg" height="300" cover class="rounded-lg"
                        @click="openLightbox(['/hopeart/artworks.jpg'])" />
                    <div class="text-caption text-medium-emphasis mt-1">作品頁：輪播、作品細節、相關作品導流</div>
                </v-col>
            </v-row>
        </section>

        <!-- Mockups（可放大輪播） -->
        <section id="mockups" class="mb-10">
            <div class="text-h6 font-weight-bold mb-3">Mockups</div>
            <v-row dense>
                <v-col v-for="(m, i) in mockups" :key="i" cols="12" sm="6" md="4">
                    <v-img :src="m" height="220" cover class="rounded-lg" @click="openLightbox(mockups, i)" />
                </v-col>
            </v-row>
        </section>

        <v-btn variant="text" :to="{ name: 'projects' }">← 回到作品</v-btn>

        <!-- Dialogs -->
        <v-dialog v-model="hotspot.open" max-width="420" :scrim="false">
            <v-card v-if="hotspot.active">
                <v-card-title class="text-subtitle-1 font-weight-bold">{{ hotspot.active.title }}</v-card-title>
                <v-card-text class="text-body-2 text-medium-emphasis" style="white-space: pre-line;">
                    {{ hotspot.active.text }}
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="lightbox.open" max-width="1200px">
            <v-card class="pa-2">
                <v-carousel v-model="lightbox.index" hide-delimiter-background>
                    <v-carousel-item v-for="(img, i) in lightbox.list" :key="i">
                        <v-img :src="img" height="70vh" cover />
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* 章節列表（上方 chip 用） */
const sections = [
    { id: 'intro', label: '簡介' },
    { id: 'strategy', label: '策略' },
    { id: 'brand', label: '色彩/字體' },
    { id: 'ia', label: '資訊架構' },
    { id: 'examples', label: '頁面範例' },
    { id: 'mockups', label: 'Mockups' },
]

/* 熱點資料 */
const strategySpots = [
    { x: 63, y: 30, title: '提高品牌識別', text: '以核心理念為出發，重建視覺元素並強化一致性。' },
    { x: 77, y: 55, title: '導流策略', text: '導向月刊與藝術家專區，增加停留與轉換。' },
    { x: 42, y: 63, title: '資訊層級清楚', text: '模組化資訊架構，減少使用者迷失。' }
]
const iaSpots = [
    { x: 25, y: 30, title: '首頁', text: '以大視覺與分割模組呈現最新主題。' },
    { x: 28, y: 60, title: '藝術家專區', text: '提供作品瀏覽、作者資訊、追蹤動態。' },
    { x: 30, y: 82, title: 'FAQ', text: '快速找到問題解答。' }
]

/* 色票 */
const colors = [{ hex: '#000000' }, { hex: '#FFFFFF' }, { hex: '#FBED21' }, { hex: '#2F2F30' }]
const copied = ref('')
const copy = async (txt) => {
    try { await navigator.clipboard.writeText(txt); copied.value = txt; setTimeout(() => copied.value = '', 1400) } catch { }
}

/* Lightbox */
const mockups = ['/hopeart/mockups-1.jpg', '/hopeart/mockups-2.jpg', '/hopeart/mockups-3.jpg']
const lightbox = ref({ open: false, list: [], index: 0 })
const openLightbox = (list, start = 0) => { lightbox.value = { open: true, list, index: start } }

/* 熱點對話框 */
const hotspot = ref({ open: false, active: null })
const openSpot = (s) => { hotspot.value = { open: true, active: s } }

/* 追蹤 hash（讓上方 chip 高亮） */
const hash = ref(window.location.hash || '')
const onHash = () => { hash.value = window.location.hash }
onMounted(() => window.addEventListener('hashchange', onHash))
onBeforeUnmount(() => window.removeEventListener('hashchange', onHash))

/* 捲動到章節 */
const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.sticky-nav {
    position: sticky;
    top: 64px;
    z-index: 10;
    padding: 8px 12px;
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, .85);
}

/* 熱點 */
.hotspot-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.hotspot {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: auto;
    border: 0;
    background: #fff;
    color: #1e293b;
    border-radius: 999px;
    width: 28px;
    height: 28px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, .18);
    cursor: pointer;
    display: grid;
    place-items: center;
}

/* 色票 */
.swatch {
    cursor: pointer;
    width: 92px;
}

.swatch .chip {
    height: 48px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .08);
}

.swatch .label {
    font-size: 12px;
    margin-top: 6px;
    text-align: center
}

.font-sample {
    padding: 10px 0
}

.font-sample.noto {
    font-family: 'Noto Sans', system-ui, -apple-system, sans-serif;
}

.font-sample.georgia {
    font-family: Georgia, 'Times New Roman', serif;
    letter-spacing: .5px;
}
</style>