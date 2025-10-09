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
                <img src="/img/myTreeApp-1200.jpg" alt="My Tree App hero"
                    style="width:100%;height:100%;object-fit:cover" />
            </v-responsive>

            <v-row dense>
                <v-col cols="12" md="7">
                    <h1 class="text-h4 font-weight-bold mb-2">My Tree App</h1>
                    <p class="text-subtitle-1 text-medium-emphasis">
                        My Tree Your Tree​ 樹木的好朋友​
                    </p>
                    <div class="d-flex ga-2 mt-2 mb-10">
                        <v-chip size="small" variant="outlined">UI</v-chip>
                        <v-chip size="small" variant="outlined">Web</v-chip>
                        <v-chip size="small" variant="outlined">RWD</v-chip>
                    </div>
                </v-col>

                <v-col cols="12" md="5">
                    <v-card rounded="xl" elevation="1">
                        <v-card-text class="text-body-2">
                            <div class="d-flex justify-space-between"><span>設計時間</span><span>2024</span></div>
                            <div class="d-flex justify-space-between"><span>參與</span><span>陳姝廷</span></div>
                            <div class="d-flex justify-space-between"><span></span><span>李丞祐</span></div>
                            <div class="d-flex justify-space-between"><span></span><span>程鈺鈞</span></div>
                            <div class="d-flex justify-space-between"><span></span><span>吳承恩​</span></div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </section>

        <section id="strategy" class="mb-10">
            <div class="text-h5 font-weight-bold mb-3 mt-5">現況分析/確定目標</div>
            <div class="pb-3 text-h6">面臨的問題</div>
            <p class="text-subtitle-1 text-medium-emphasis mb-3">
                請專家目視檢查一棵需約200元，而以科學方式檢驗一棵則需約2000元，成本高昂；過程耗時又費力；可動用的人力資源不足；且檢查範圍過於廣闊，難以全面照顧到所有目標。</p>
            <div class="pb-3 text-h6">目的</div>
            <p class="text-subtitle-1 text-medium-emphasis mb-3">
                及早找出樹木潛在的安全隱患，降低倒塌與斷裂等意外風險以確保民眾安全；透過健檢迅速發現並處置可能的病蟲害，協助保護城市綠化、維護生態平衡，同時推廣公民科學；並評估樹木的健康狀況與價值，作為合理配置維護資源的依據。
            </p>
            <div class="pb-3 text-h6">競品分析</div>
            <ComparisonTable :columns="columns" :rows="rows" :data="data">
                <template #col-seek>
                    Seek by <span class="font-weight-bold">iNaturalist</span>
                </template>
            </ComparisonTable>
            <v-container>
                <div class="text-h6 font-weight-bold mb-3">產品定位圖</div>
                <PositioningMap :items="items" x-left="一般" x-right="專業" y-top="範圍大" y-bottom="範圍小" />
            </v-container>
            <div class="text-h6 font-weight-bold mb-3">人物誌</div>
            <v-card rounded="xl" elevation="1">
                <v-card-title class="pb-0">林粼粼</v-card-title>
                <v-card-text class="two-col">
                    <div>
                        <img src="/mytree/nature-girl.jpg" alt="nature-girl"
                            style="width:100%;height:100%;object-fit:cover" class="mt-5" />
                    </div>
                    <div>
                        <div class="font-weight-medium mt-5">年齡 22 歲</div>
                        <div class="font-weight-medium mt-2">性別 女</div>
                        <div class="font-weight-medium mt-2">工作 大學生</div>
                    </div>
                </v-card-text>
                <v-card-text>
                    <div class="mb-4">
                        <div class="font-weight-medium">
                            粼粼是個熱愛自然的青年，平時喜歡和朋友或家人到戶外踏青，享受大自然的美景。對環境保護有一定的意識，同時也是台灣護樹協會的一員，但對於樹木健康和種類了解有限，希望能夠透過樹木健檢app來學習更多樹木的知識、了解更多關於樹木健康的觀念。同時，他也是社區裡的環保志願者，積極參與樹木保護和環境改善的活動。​
                        </div>
                    </div>
                </v-card-text>
            </v-card>
            <div class="two-col11">
                <div>
                    <div class="text-h6 font-weight-bold mb-3 mt-5">設計方案​</div>
                    <v-card rounded="xl" elevation="1">
                        <v-card-text>
                            <div class="mb-4 mt-1">
                                <div class="font-weight-medium">
                                    結合遊戲化體驗​
                                </div>
                                <div class="text-medium-emphasis text-body-2 mt-1">
                                    設計養成樹木和使用者產生連結，以及獎牌收集或是積分排行榜，產生正回饋，讓使用者對產品的黏著度提高，進行公民科學時可以覺得開心​
                                </div>
                                <div class="font-weight-medium mt-3">
                                    提供專業知識​
                                </div>
                                <div class="text-medium-emphasis text-body-2 mt-1">
                                    提供民眾對於樹木健檢的專業知識，讓公眾對自身所處的環境能有更深的了解​
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
                <div>
                    <div class="text-h6 font-weight-bold mb-3 mt-5">5W1H​</div>
                    <v-card rounded="xl" elevation="1">
                        <img src="/mytree/5W1H.jpg" alt="5W1H" style="width:95%;height:100%;object-fit:cover"
                            class="mt-5 mx-3 mb-6" />
                    </v-card>
                </div>
            </div>
        </section>

        <section id="system" class="mb-10 pt-10">
            <div class="text-h5 font-weight-bold mb-3">System Framework & Prototype​</div>
            <div class="text-h6 font-weight-bold mb-3 mt-5">System Framework​</div>
            <img src="/mytree/SystemFramework.jpg" alt="SystemFramework" style="width:95%;height:100%;object-fit:cover"
                class="mx-3 mb-6" />
            <div class="text-h6 font-weight-bold mb-3 mt-5">Prototype</div>
            <img src="/mytree/Prototype.jpg" alt="Prototype" style="width:95%;height:100%;object-fit:cover"
                class="mx-3 mb-6" />
        </section>

        <section id="user" class="mb-10 pt-10">
            <div class="text-h5 font-weight-bold mb-3">使用者旅程地圖​</div>
            <div class="text-h6 font-weight-bold mb-3 mt-5">體驗​</div>
            <img src="/mytree/experience.jpg" alt="experience" style="width:95%;height:100%;object-fit:cover"
                class="mx-3 mb-6" />
            <div class="text-h6 font-weight-bold mb-3 mt-5">機會</div>
            <img src="/mytree/opportunity.jpg" alt="opportunity" style="width:95%;height:100%;object-fit:cover"
                class="mx-3 mb-6" />
        </section>

        <section id="ia" class="mb-10">
            <v-container>
                <div class="text-h6 font-weight-bold mb-3">專案介紹影片</div>
                <YouTubeEmbed id="bgRJP5or4wM" height="clamp(240px, 40vw, 560px)" maxWidth="1100px" />
            </v-container>
        </section>


        <!-- 頁面範例（可點放大） -->
        <section id="examples" class="mb-10 pt-10">
            <div class="text-h5 font-weight-bold mb-3">頁面介紹</div>
            <div class="ml-6">
                <div class="pb-3 text-h6">登入註冊及首頁</div>
            </div>
            <p class="text-subtitle-1 text-medium-emphasis mb-3 ml-6">
                首頁有最新關於數目健檢的資訊以及進行的注意事項和小知識
            </p>
            <div rounded="xl" elevation="1">
                <img src="/mytree/login.png" alt="登入" style="width:80%;height:80%;object-fit:cover" />
            </div>
            <div class="ml-6">
                <div class="pb-1 pt-2 text-h6">樹木健檢</div>
            </div>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                將原本是紙本進行的健檢資料改為使用電子的方式紀錄，更可以完整的統整以及進行資料傳輸給專家進行救治
            </p>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                Step1. 拍照上傳樹木目前的模樣，可拍攝多張不同角度的照片
            </p>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                Step2. 填寫樹木基本資料，位置系統會自動帶入
            </p>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                Step3. 填寫樹木詳細資料，若不確定如何辨別可點擊提示按鈕
                <br><span class="text-red">若不確定如何辨別可點擊提示按鈕，將會跳出提示框教您如何辨識</span>
            </p>
            <p class="text-subtitle-1 text-medium-emphasis mb-3 ml-6">
                Step4. 最後會顯示樹木的健康狀況
            </p>
            <div rounded="xl" elevation="1">
                <img src="/mytree/tree.png" alt="樹木健檢" style="width:80%;height:80%;object-fit:cover" />
            </div>
            <p class="text-subtitle-1 text-medium-emphasis mb-3 ml-6">
                <span class="text-red">根據樹木健康的評分會顯示3種不同的狀態</span>
            </p>
            <div rounded="xl" elevation="1">
                <img src="/mytree/threeType.png" alt="三種狀態" style="width:80%;height:80%;object-fit:cover" />
            </div>
            <div class="ml-6">
                <div class="pb-1 pt-2 text-h6">歷史紀錄</div>
            </div>
            <p class="text-subtitle-1 text-medium-emphasis mb-3 ml-6">
                使用集點卡的形式來紀錄每次的紀錄，點進去會有每次的詳細內容
            </p>
            <div rounded="xl" elevation="1">
                <img src="/mytree/history.png" alt="歷史紀錄" style="width:80%;height:80%;object-fit:cover" />
            </div>
            <div class="ml-6">
                <div class="pb-1 pt-2 text-h6">遊戲</div>
            </div>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                結合遊戲化體驗讓使用者能更加願意協助進行樹木健檢，其中分成三部分
            </p>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                成長小樹：會根據每次進行的樹木健檢獲得的分數換成肥料使小樹成長
            </p>
            <p class="text-subtitle-1 text-medium-emphasis ml-6">
                排行榜：可以結伴一起進行，大家一起比拼進行的數量
            </p>
            <p class="text-subtitle-1 text-medium-emphasis mb-3 ml-6">
                徽章：會根據您進行的內容來獲得相對性的徽章
            </p>
            <div rounded="xl" elevation="1">
                <img src="/mytree/game.png" alt="登入" style="width:80%;height:80%;object-fit:cover" />
            </div>
        </section>

        <section id="mockups" class="mb-10">
            <div class="text-h5 font-weight-bold mb-3">使用者測試計畫</div>
            <div class="two-col11">
                <div>
                    <div class="text-h6 font-weight-bold mb-3 mt-5">目的</div>
                    <v-card class="h-100 d-flex flex-column" rounded="xl" elevation="1">
                        <v-card-text class="flex-grow-1">
                            <div class="mb-9 mt-8 ml-4 mr-4">
                                <div class="font-weight-medium">
                                    測試 My Tree 應用程式在實際使用中的便利性、功能性和使用者滿意度。​
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
                <div>
                    <div class="text-h6 font-weight-bold mb-3 mt-5">範圍</div>
                    <v-card rounded="xl" elevation="1" class="h-100 d-flex flex-column">
                        <v-card-text class="flex-grow-1">
                            <div class="mb-4 mt-4 ml-4 mr-4">
                                <div class="font-weight-medium">
                                    年齡範圍：​18歲以上​​
                                </div>
                                <div class="font-weight-medium">
                                    一般民眾​
                                </div>
                                <div class="font-weight-medium">
                                    擁有智能手機的使用經驗​
                                </div>
                                <div class="font-weight-medium">
                                    非資訊科技專業背景​
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
            </div>
            <div class="two-col11">
                <div>
                    <div class="text-h6 font-weight-bold mb-3 mt-5">測試環境​</div>
                    <v-card rounded="xl" elevation="1">
                        <v-card-text>
                            <div class="mb-7 mt-6">
                                <div class="font-weight-medium">
                                    使用者將在自然環境中進行測試，如校園、公園或住宅區綠地，以確保測試的實際應用性和真實反映。​
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
                <div>
                    <div class="text-h6 font-weight-bold mb-3 mt-5">測試目標</div>
                    <v-card rounded="xl" elevation="1">
                        <v-card-text>
                            <div class="mb-4 mt-4">
                                <div class="font-weight-medium">
                                    - 評估應用程式的整體用戶體驗和介面設計的直觀性
                                    <br>- 驗證功能性，特別是樹木健康評估的準確性
                                    <br>- 收集使用者對應用程式的反饋，用於未來改進
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
            </div>
            <div class="text-h6 font-weight-bold mb-3 mt-12">測試結果​</div>
            <div class="font-weight-medium mt-3">
                測試人數：六人​
                <br>SUS平均分數77.5分​
            </div>
            <img src="/mytree/sus.png" alt="sus" style="width:80%;height:80%;object-fit:cover" />

            <div class="text-h6 font-weight-bold mb-3 mt-12">測試總結​</div>
            <div class="two-col11">
                <div>
                    <div class="font-weight-medium mt-3">
                        特別感觸的功能：​
                        <br>使用者對於樹木健檢界面在樹木外觀的選項描述表示直觀易懂，並且有圖片輔助解釋選項。遊戲功能方面，表明這些功能增加了互動性、趣味性和再次使用的意願。​
                    </div>
                </div>
                <div>
                    <img ml-10 src="/mytree/feedback.png" alt="感觸功能" style="width:70%;height:70%;object-fit:cover" />
                </div>
            </div>
            <div class="two-col11">
                <div>
                    <img src="/mytree/feedback02.png" alt="功能直觀性" style="width:80%;height:80%;object-fit:cover" />
                </div>
                <div class="font-weight-medium mt-3">
                    功能直觀性：​​
                    <br>
                    樹木健康檢查功能普遍被認為直觀易懂，但對於樹高測量，一些用戶感到困惑，希望能有更精確的工具支持，如集成iPhone的測距儀。希望樹木健檢的時候描述改用圖片判斷的功能。​
                </div>
            </div>
            <div class="two-col11">
                <div>
                    <div class="font-weight-medium mt-3">
                        遊戲設計：​
                        <br>遊戲被認為是舒壓且有趣的，會每天想使用讓小樹成長。一位使用者希望看到別人的小樹。建議有更實質的鼓勵機制、禮券兌換和公益種樹活動，以提供更實質的回饋。​
                    </div>
                </div>
                <div>
                    <img ml-10 src="/mytree/feedback03.png" alt="感觸功能" style="width:70%;height:70%;object-fit:cover" />
                </div>
            </div>
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
import ComparisonTable from '../components/ComparisonTable.vue'
import PositioningMap from '../components/PositioningMap.vue'
import YouTubeEmbed from '../components/YouTubeEmbed.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const columns = [
    { key: 'tw', label: '台灣巨大樹地圖' },
    { key: 'seek', label: 'Seek by iNaturalist' },
    { key: 'treeva', label: 'treeva' },
    { key: 'us', label: '我們' },
]

const rows = [
    { key: 'purpose', label: '用途' },
    { key: 'audience', label: '使用群體' },
    { key: 'platform', label: '平台' },
    { key: 'feature', label: '特色' },
    { key: 'limit', label: '限制' },
]

const data = {
    purpose: {
        tw: '搜尋全台灣樹高65m以上的巨木',
        seek: '利用影像辨別動植物種類',
        treeva: '樹木紀錄、木材堆積測量',
        us: '協助進行樹木健檢',
    },
    audience: {
        tw: '一般民眾',
        seek: '一般民眾',
        treeva: '森林管理人員或樹木擁有者',
        us: '一般民眾',
    },
    platform: {
        tw: 'website',
        seek: 'iOS、Android',
        treeva: 'Android',
        us: 'Android、iOS',
    },
    feature: {
        tw: '藉由網路民眾的力量來進行巨木調查',
        seek: '搭配遊戲化體驗，讓使用者在無意間進行公民科學',
        treeva: '簡化彼此溝通的成本，讓工作更加迅速',
        us: '藉由遊戲化體驗吸引使用者進行樹木健檢，同時達到環保及公民科學目的。',
    },
    limit: {
        tw: '台灣地區',
        seek: '全球地區',
        treeva: '德國地區',
        us: '台灣地區',
    },
}

const items = [
    { label: 'Seek by iNaturalist', img: '/mytree/seek.jpg', x: -70, y: 40, size: 64 },
    { label: '找樹的人', img: '/mytree/findtree.jpg', x: -40, y: -40, size: 60 },
    { label: 'MyTree', img: '/mytree/mytree.jpg', x: 0, y: -80, size: 68 },
    { label: 'treeva', img: '/mytree/treeva.jpg', x: 75, y: -40, size: 60 },
]

const sections = [
    { id: 'intro', label: '現況分析' },
    { id: 'system', label: '系統' },
    { id: 'user', label: '使用者旅程地圖' },
    { id: 'ia', label: '資訊架構' },
    { id: 'examples', label: '頁面介紹' },
    { id: 'mockups', label: '使用者測試' },
]

/* Lightbox */
const mockups = ['/hopeart/mockup-1.jpg', '/hopeart/mockup-2.jpg']
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




const homeSections = [
    {
        // 段落 1：圖在右、兩段註解
        src: '/hopeart/homepage-01.jpg',
        ratio: '16/9',
        imageSide: 'right',
        notes: [
            { y: 22, x: -130, text: '使用動態圖片增加網頁多樣性' }, // 這條線往右推 16px
            { y: 65, x: -30, text: '主題月刊使用黑底以凸顯作品及營造寧靜神祕感' },
        ],
        style: { '--left-w': '46%', '--img-w': '48%' } // 可選：段落級調整
    },
    {
        // 段落 2：反過來，圖在左、單段註解
        src: '/hopeart/homepage-02.jpg',
        ratio: '16/9',
        imageSide: 'left',
        notes: [
            { y: 40, x: 20, text: '關於 HOPE Art 主要以畫面分割的方式來展現特例性' }, // 這條線往右推 16px
        ],
        style: { '--left-w': '40%', '--img-w': '50%' } // 可選：段落級調整
    }
]
const themeSections = [
    {
        src: '/hopeart/theme01.jpg',
        ratio: '3/4',
        imageSide: 'left',
        notes: [
            { y: 26, text: '依據主題的不同設計對應的版型，以展現藝術家最核心的創作理念' },
        ],
        style: { '--left-w': '44%', '--img-w': '48%' },
    },
]

</script>

<style scoped>
.comparison .comp-table {
    border: 2px solid var(--v-theme-outline);
    /* 外框粗線 */
    border-radius: 12px;
    overflow: hidden;
    /* 圓角裁切 */
}

.comparison :deep(thead th) {
    background: rgba(0, 0, 0, .04);
}

.red-text {
    color: red;
}

@media (prefers-color-scheme: dark) {
    .comparison :deep(thead th) {
        background: rgba(255, 255, 255, .04);
    }
}

.two-col {
    display: grid;
    grid-template-columns: 1fr;
    /* 手機單欄 */
    gap: 16px 24px;
}

@media (min-width: 960px) {

    /* md↑ 兩欄 */
    .two-col {
        grid-template-columns: 1fr 4fr;
        /* ← 比例：左:右 = 2:1，改成 3fr 2fr 就是 3:2 */
        align-items: start;
    }
}

.two-col11 {
    display: grid;
    grid-template-columns: 1fr;
    /* 手機單欄 */
    gap: 16px 24px;
}

@media (min-width: 960px) {

    /* md↑ 兩欄 */
    .two-col11 {
        grid-template-columns: 1fr 1fr;
        /* ← 比例：左:右 = 2:1，改成 3fr 2fr 就是 3:2 */
        align-items: start;
    }
}

.three-col {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* 三欄 */
    gap: 16px;
    /* 欄間距 */
}

/* 響應式：手機一欄 */
@media (max-width: 600px) {
    .three-col {
        grid-template-columns: 1fr;
    }
}

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