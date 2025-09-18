<template>
  <v-container>
    <!-- Hero / Header -->
    <v-row align="center" class="mb-8">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-avatar size="160">
          <v-img src="/profile.jpg" alt="Shuting 的頭像" cover />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="8">
        <div class="text-h4 font-weight-bold mb-2">嗨，我是 Shuting</div>
        <div class="text-subtitle-1 text-medium-emphasis mb-4">
          視覺／UI 設計師，關注品牌一致性與介面可用性。喜歡把抽象需求轉成清楚的版型與設計系統，
          熟悉 Figma、Illustrator 與前端整合（Vue + Vuetify）。
        </div>
        <div class="d-flex flex-wrap ga-3">
          <v-btn color="primary" :href="resumeHref" target="_blank" rel="noopener"
            prepend-icon="mdi-file-download-outline">
            下載履歷
          </v-btn>
          <v-btn variant="outlined" :href="mailto" prepend-icon="mdi-email-outline">
            聯絡我
          </v-btn>
          <v-btn variant="text" :href="behance" target="_blank" rel="noopener" prepend-icon="mdi-behance">
            Behance
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Skills & Tools 
      <v-col cols="12" md="6">
        <v-card rounded="xl" elevation="1">
          <v-card-title class="pb-0">工具 & 堆疊</v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap ga-2">
              <v-chip v-for="t in tools" :key="t" class="text-body-2" variant="tonal" rounded="lg">
                <v-icon icon="mdi-checkbox-blank-circle" size="8" class="me-2" />
                {{ t }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>  -->

    <!-- Timeline: Experience & Education -->
    <v-row class="mb-8" dense>
      <v-col cols="12" md="7">
        <v-card rounded="xl" elevation="1">
          <v-card-title class="pb-0">經歷</v-card-title>
          <v-card-text>
            <v-timeline side="end" density="compact">
              <v-timeline-item dot-color="primary" size="small">
                <div class="font-weight-medium">個別指導員 · 台灣拓人</div>
                <div class="text-medium-emphasis text-body-2">2023 — 2025 · 新北</div>
                <ul class="mt-2 text-body-2">
                  <li>進行1對1以及1對2的個別指導老師，協助學生解決學業上的疑惑</li>
                  <li>針對不同學生的個性進行個別化教學，找到學生最適合的學習方式</li>
                </ul>
              </v-timeline-item>

              <v-timeline-item dot-color="primary" size="small">
                <div class="font-weight-medium mt-5">UI 設計師及視覺設計 · 輔具傢 ATHome（合作型）</div>
                <div class="text-medium-emphasis text-body-2">2023 — 現今</div>
                <ul class="mt-2 text-body-2">
                  <li>進行網頁以及系統 UI 的規劃和設計更新</li>
                  <li>針對活動設計一系列的視覺設計，如活動海報、背板、活動手牌</li>
                </ul>
              </v-timeline-item>

              <v-timeline-item dot-color="primary" size="small">
                <div class="font-weight-medium mt-5">圖編 · 點點塑（合作型）</div>
                <div class="text-medium-emphasis text-body-2">2023 — 現今</div>
                <ul class="mt-2 text-body-2">
                  <li>進行社群貼文圖的製作</li>
                  <li>針對活動設計一系列的視覺設計，例如活動背板、看板、手拿牌</li>
                </ul>
              </v-timeline-item>

              <v-timeline-item dot-color="primary" size="small">
                <div class="font-weight-medium mt-5">圖編 · 晴光皮膚科（合作型）</div>
                <div class="text-medium-emphasis text-body-2">2023 — 現今</div>
                <ul class="mt-2 text-body-2">
                  <li>進行社群貼文圖的製作</li>
                  <li>針對活動設計行銷海報</li>
                </ul>
              </v-timeline-item>

              <v-timeline-item dot-color="primary" size="small">
                <div class="font-weight-medium mt-5">UI 設計師 · 技嘉科技</div>
                <div class="text-medium-emphasis text-body-2">2021 — 2023 · 新北</div>
                <ul class="mt-2 text-body-2">
                  <li>系統規劃及 UI 設計</li>
                  <li>建立設計系統（色彩/元件/動態）</li>
                  <li>跨部門溝通</li>
                  <li>負責品牌形象網站與行銷素材，維持跨平台一致性</li>
                  <li>與前端合作將稿件落地到網頁</li>
                  <li>主視覺、海報與社群素材設計</li>
                  <li>影片規劃剪輯</li>
                  <li>系統使用手冊撰寫</li>
                </ul>
              </v-timeline-item>

              <v-timeline-item dot-color="primary" size="small">
                <div class="font-weight-medium mt-5">UI 設計實習 · 技嘉科技</div>
                <div class="text-medium-emphasis text-body-2">2019 — 2021 · 新北</div>
                <ul class="mt-2 text-body-2">
                  <li>系統 UI 設計</li>
                  <li>主視覺、海報與社群素材設計</li>
                  <li>影片規劃剪輯</li>
                </ul>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card rounded="xl" elevation="1">
          <v-card-title class="pb-0">學歷</v-card-title>
          <v-card-text>
            <div class="mb-4 mt-1">
              <div class="font-weight-medium">台灣科技大學 · 營建工程學系碩士 資訊組</div>
              <div class="text-medium-emphasis text-body-2">2023 — 2025</div>
            </div>
            <div class="mb-4">
              <div class="font-weight-medium">淡江大學 · 土木工程學系學士 營建規劃組</div>
              <div class="text-medium-emphasis text-body-2">2017 — 2021</div>
            </div>
            <v-divider class="my-4" />
            <div>
              <div class="font-weight-medium">證照 / 得獎</div>
              <ul class="mt-2 text-body-2">
                <li>Google UX Certificate（Coursera）</li>
                <li>Google Analytics Individual Qualification</li>
              </ul>
            </div>
          </v-card-text>
        </v-card>

        <v-card rounded="xl" elevation="1" class="mt-10">
          <v-card-title class="pb-0 mb-3">技能 & 軟體</v-card-title>
          <v-card-text>
            <div v-for="(grp, idx) in toolGroups" :key="grp.title" class="mb-2">
              <div class="font-weight-medium mb-2">{{ grp.title }}</div>
              <div class="d-flex flex-wrap ga-2">
                <v-chip v-for="t in grp.list" :key="t" class="text-body-2" variant="tonal" rounded="lg"
                  :color="grp.color">
                  <v-icon icon="mdi-checkbox-blank-circle" size="8" class="me-2" />
                  {{ t }}
                </v-chip>
              </div>
              <v-divider v-if="idx < toolGroups.length - 1" class="my-4" />
            </div>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

    <!-- CTA -->
    <v-sheet class="pa-6 text-center" rounded="xl" elevation="1">
      <div class="text-h6 font-weight-bold mb-2">有專案想合作嗎？</div>
      <div class="text-medium-emphasis mb-4">歡迎來信，一起把想法變成作品。</div>
      <v-btn color="primary" :href="mailto" prepend-icon="mdi-email-outline">寫信給我</v-btn>
    </v-sheet>
  </v-container>
</template>

<script setup>
const resumeHref = '/Shuting-Chen-Resume.pdf' // 放在 public/
const mailto = 'mailto:chenshuting990420@gmail.com'
const behance = 'https://www.behance.net/shutingchen'

// 依需求調整
const skills = [
  { name: 'UI / Web Design', level: 90 },
  { name: 'Visual / Branding', level: 85 },
  { name: 'Prototyping (Figma)', level: 85 },
  { name: 'Illustration / Icon', level: 80 },
  { name: 'Front-End Handoff', level: 75 },
]

const toolGroups = [
  {
    title: '設計 / 視覺',
    color: 'primary', 
    list: ['Figma', 'Illustrator', 'Photoshop']
  },
  {
    title: '程式 / 開發',
    color: 'teal', 
    list: ['HTML/CSS', 'Python/Open3D', 'C++', 'C#', 'Unity']
  },
  {
    title: '3D / MR / BIM ',
    color: 'purple', 
    list: ['點雲/PCL', 'HoloLens', 'Revit', 'MRTK']
  }
]

</script>

<style scoped>
ul {
  padding-left: 18px;
  margin: 0;
}
</style>
