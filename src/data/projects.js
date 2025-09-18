// src/data/projects.js
// 圖放 public/img，下方 base 對應 -400/-800/-1200.jpg
export const projects = [
    // 研究｜HoloLens
    {
      slug: 'research-hololens',
      category: 'research', // ← 分類鍵
      title: '研究｜HoloLens',
      subtitle: 'MR / HoloLens / 點雲',
      base: '/img/research', // research-400/800/1200.jpg
      alt: 'HoloLens 研究封面',
      tags: ['MR', 'HoloLens', 'Point Cloud'],
      description: `簡述研究目標、技術棧與成果指標。`,
      galleryBases: ['/img/research-1', '/img/research-2'],
    },
  
    // UI
    {
      slug: 'ui-mytree',
      category: 'ui',
      title: 'My Tree',
      subtitle: '樹狀筆記 / 任務互動',
      base: '/img/ui-mytree',
      alt: 'My Tree App',
      tags: ['UI', 'App', 'Design System'],
      description: `資訊架構與關鍵流程…`,
      galleryBases: ['/img/ui-mytree-1', '/img/ui-mytree-2'],
    },
    {
      slug: 'ui-checkin',
      category: 'ui',
      title: '打卡 APP',
      subtitle: '出勤 / 地圖打卡',
      base: '/img/ui-checkin',
      alt: '打卡 App',
      tags: ['UI', 'App'],
      description: `地圖與打卡體驗…`,
    },
    {
      slug: 'ui-hopeart',
      category: 'ui',
      title: 'HopeArt 形象官網',
      subtitle: '品牌形象 / RWD',
      base: '/img/ui-hopeart',
      alt: 'HopeArt 官網',
      tags: ['UI', 'Web', 'RWD'],
      description: `首頁英雄區、作品牆與導流…`,
    },
  
    // 視覺設計
    {
      slug: 'graphic-event-poster',
      category: 'graphic',
      title: '活動海報',
      subtitle: '主視覺 / KV 延伸',
      base: '/img/graphic-event',
      alt: '活動海報',
      tags: ['Graphic', 'Poster'],
      description: `視覺主軸與色彩規劃…`,
    },
    {
      slug: 'graphic-social',
      category: 'graphic',
      title: '貼文圖',
      subtitle: '社群素材套件',
      base: '/img/graphic-social',
      alt: '社群貼文圖',
      tags: ['Graphic', 'Social'],
      description: `模板系統與套版規則…`,
    },
    {
      slug: 'graphic-derma-poster',
      category: 'graphic',
      title: '醫美海報',
      subtitle: '診所活動設計',
      base: '/img/graphic-derma',
      alt: '醫美海報',
      tags: ['Graphic', 'Poster'],
      description: `醫療情境的視覺與版式…`,
    },
  ]
  
  // 方便查找
  export const projectsMap = Object.fromEntries(projects.map(p => [p.slug, p]))
  export const getProjectBySlug = slug => projectsMap[slug]
  