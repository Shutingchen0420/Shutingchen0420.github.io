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
      content: [
        { type: 'h3', text: '研究目標' },
        { type: 'p',  text: '以 HoloLens 於工地現場量測與點雲疊合，驗證 MR 導引在施工檢核的可行性。' },
  
        { type: 'h3', text: '方法與流程' },
        { type: 'list', items: [
          '使用 Revit 產出 BIM 模型，匯出為點雲/網格',
          '以 Azure Spatial Anchors 進行現地定位與座標對準',
          'HoloLens 內部建立檢核步驟與互動 UI',
        ]},
  
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        { type: 'img', base: '/img/research-1', ratio: '16/9', alt: '現場點雲疊合示意', caption: '現場點雲與 BIM 疊合狀態' },
  
        { type: 'p',  text: '實驗在新北建案進行，針對樑柱與管線位置偏差做量測與記錄。' },
  
        // 雙圖並排
        { type: 'imageGrid', ratio: '4/3', images: [
          { base: '/img/research-2', alt: 'HoloLens 介面' },
          { base: '/img/research-3', alt: '量測結果標註' },
        ], caption: '左：介面；右：量測標註' },
  
        { type: 'h3', text: '結果' },
        { type: 'p',  text: '以 12 次檢核流程，錯位平均縮短 28%，現場人員平均熟悉時間 10 分鐘以內。' },
  
        { type: 'hr' },
        { type: 'p',  text: '更多技術細節或原始量測資料可於需求時提供。' },
      ],
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
  