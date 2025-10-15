// src/data/projects.js
// 圖放 public/img，下方 base 對應 -400/-800/-1200.jpg
export const projects = [
    // 研究｜HoloLens
    {
      slug: 'research-hololens',
      category: 'research', // ← 分類鍵
      title: '整合頭戴式混合實境裝置與點雲場景分割技術之既有建物 BIM 自動建模',
      subtitle: 'MR / HoloLens / 點雲 / BIM',
      base: '/img/research', // research-400/800/1200.jpg
      alt: 'HoloLens 研究封面',
      tags: ['MR', 'HoloLens', 'Point Cloud'],
      description: `以 HoloLens 點雲＋場景分割技術結合 Revit API 進行自動建模，
      並在 HoloLens 上進行虛實套合比對，降低既有建物建模的人力與時間成本。`,
      content: [
        { type: 'h3', text: '研究目標' },
        { type: 'p',  text: '以 HoloLens 點雲＋場景分割技術結合 Revit API 進行自動建模，並在 HoloLens 上進行虛實套合比對，降低既有建物建模的人力與時間成本。' },
  
        { type: 'h3', text: '系統需求與開發工具' },
        { type: 'p',  text: `系統需求分析根據既有建築自動建模的目的分為六大需求 -
          HoloLens 點雲數據合併、物件切割模型、產生幾何元件資訊、生成組合模型、現場虛實貼合機制以及最終的 Revit 自動建模` },
        { type: 'p',  text: `本研究系統的開發工具，整體可以分成三大類來進行
          首先為點雲處理的部分，從 HoloLens 進行點雲掃描後，會先進入使用 Python 撰寫的物件切割演算法進行切割，而後切割結果將會再透過 PCL 點雲庫完成點雲演算法的計算
          接著為現場套合的部分，會透過 Unity 與 C# 撰寫邏輯建立組合模型，再結合 MRTK 混合實境開發工具以及 HoloLens 來實現現場套合的部分
          最後為自動建模的部分，依據組合模型的輸出資訊，透過 Revit API 將其送入 Revit 中完成自動建立建築資訊模型的目的`},
  
        // 雙圖並排
        { type: 'imageGrid', ratio: '4/3', images: [
          { base: '/img/research-2', alt: '系統需求分析' },
          { base: '/img/research-3', alt: '系統開發工具' },
        ], caption: '左：系統需求分析；右：系統開發工具' },

        { type: 'h3', text: '方法與流程' },
        { type: 'list', items: [
          '使用 HoloLens 進行點雲掃描',
          '使用 PointNet++ 進行點雲場景切割',
          '透過點雲演算法定向包圍盒(OBB)產生模型元件',
          '於 Unity 中加上材質載入 HoloLens 進行現場虛實套合',
          '使用基於點雲演算法所產生的模型元件 Json 檔，結合 Revit API 自動建立建築資訊模型',
        ]},
  
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        { type: 'img', base: '/img/research-1', ratio: '16/9', alt: '系統流程', caption: '系統流程' },
  
        
  
        { type: 'h3', text: '結論' },
        { type: 'p',  text: `本研究提出了一套整合點雲掃描、語意分割與 BIM 建模的自動化系統流程，其核心技術為：結合深度學習的場景分割演算法，並搭配 Revit API 以及 HoloLens 混合實境裝置進行整體流程整合與虛實呈現。
          實驗結果顯示，系統能夠自動辨識室內的柱子、樑、樓板、牆面等主要構件，並進一步透過定向包圍盒計算空間範圍，做為後續自動建模的依據。
          在物件切割模型的訓練上，本研究採用 PointNet++ 作為主要架構，並結合公開資料集 S3DIS 以及台科大掃描的實景資料，進行混合訓練與參數優化。
          最終模型成果達成：
          平均 IoU 為 51.13%，表示模型對多類別的區分能力具一定準確性
          整體準確率達 82.53%，展現本系統於實際場景辨識中的穩定效能。` },
  
        { type: 'hr' },
        { type: 'cta',
          text: '想看完整的內容請點擊',
          label: '看完整內容',
          href: 'https://etheses.lib.ntust.edu.tw/detail/46fe47b9165f68df4b6adfd694e3356e/',
          icon: 'mdi-open-in-new'
        },
      ],
    },
  
    // UI
    {
      slug: 'ui-mytree',
      category: 'ui',
      title: 'My Tree',
      routeName: 'project-mytree',
      subtitle: '樹木調查 / 公民科學',
      base: '/img/myTreeApp',
      alt: 'My Tree App',
      tags: ['UI', 'App', 'Design System'],
      description: `資訊架構與關鍵流程…`,
      content: [
        { type: 'h3', text: '研究目標' },
      ]
      
    },
    /*{
      slug: 'ui-checkin',
      category: 'ui',
      title: '打卡 APP',
      subtitle: '出勤 / 地圖打卡',
      base: '/img/ui-checkin',
      alt: '打卡 App',
      tags: ['UI', 'App'],
      description: `地圖與打卡體驗…`,
    },*/
    {
      slug: 'ui-hopeart',
      category: 'ui',
      title: 'HopeArt 形象官網',
      routeName: 'project-mytree',
      subtitle: '品牌形象 / 網站',
      base: '/img/ui-hopeart',
      alt: 'HopeArt 官網',
      tags: ['UI', 'Website'],
      description: `首頁英雄區、作品牆與導流…`,
    },
  
    // 視覺設計
    /*{
      slug: 'graphic-event-poster',
      category: 'graphic',
      title: '活動海報',
      subtitle: '主視覺 / KV 延伸',
      base: '/img/graphic-event',
      alt: '活動海報',
      tags: ['IG/FB', 'Graphic'],
      description: `視覺主軸與色彩規劃…`,
    },*/
    
    {
      slug: 'graphic-social',
      category: 'graphic',
      title: '貼文圖',
      subtitle: '社群貼文圖製作',
      base: '/img/igproject',
      alt: '社群貼文圖',
      tags: ['Graphic', 'Social', 'IG/FB'],
      description: `進行社群貼文圖的製作`,
      content: [
        { type: 'h3', text: '晴光皮膚專科診所' },
        { type: 'p',  text: '訂定貼文的整體風格，並根據企劃撰寫的文章設計一系列貼文圖' },
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        { type: 'img', base: '/img/igproject', ratio: '16/9', alt: 'ig' },
        { type: 'cta',
          text: '想看完整的內容請點擊',
          label: '前往晴光皮膚科',
          href: 'https://www.instagram.com/glory_dermatologic/',
          icon: 'mdi-open-in-new'
        },

        { type: 'hr' },
        { type: 'h3', text: '現代內科診所' },
        { type: 'p',  text: '訂定貼文的整體風格，並根據企劃撰寫的文章設計一系列貼文圖' },
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        { type: 'img', base: '/img/igproject02', ratio: '16/9', alt: 'ig' },
        { type: 'cta',
          text: '想看完整的內容請點擊',
          label: '前往現代內科診所',
          href: 'https://www.instagram.com/xdsdgi_clinic/',
          icon: 'mdi-open-in-new'
        },

        { type: 'hr' },
        { type: 'h3', text: '南崁現代皮膚診所' },
        { type: 'p',  text: '訂定貼文的整體風格，並根據企劃撰寫的文章設計一系列貼文圖' },
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        { type: 'img', base: '/img/igproject03', ratio: '16/9', alt: 'ig' },
        { type: 'cta',
          text: '想看完整的內容請點擊',
          label: '前往南坎現代皮膚診所',
          href: 'https://www.instagram.com/sdskin.hair.acne/',
          icon: 'mdi-open-in-new'
        },
      ],
    },
    {
      slug: 'graphic-derma-poster',
      category: 'graphic',
      title: '醫美海報',
      subtitle: '皮膚診所活動設計',
      base: '/img/poster',
      alt: '醫美海報',
      tags: ['Graphic', 'Poster'],
      description: `醫美海報設計`,
      content: [
        { type: 'p',  text: '訂定貼文的整體風格，並根據企劃撰寫的文章設計一系列貼文圖' },
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        {
          type: 'gallery', ratio: '16/9',
          items: [
            { base: '/img/poster', alt: 'ig 01' },
            { base: '/img/poster', alt: 'ig 02' },
            { base: '/img/poster', alt: 'ig 03' },
          ]
        }
      ],
    },
    /*{
      slug: 'graphic-businese-poster',
      category: 'graphic',
      title: '醫美海報',
      subtitle: '皮膚診所活動設計',
      base: '/img/poster',
      alt: '醫美海報',
      tags: ['Graphic', 'Poster'],
      description: `醫美海報設計`,
      content: [
        { type: 'p',  text: '訂定貼文的整體風格，並根據企劃撰寫的文章設計一系列貼文圖' },
        // 單張圖片（JPG only，會自動組 srcset：-400/-800/-1200）
        {
          type: 'gallery', ratio: '16/9',
          items: [
            { base: '/img/poster', alt: 'ig 01' },
            { base: '/img/poster', alt: 'ig 02' },
            { base: '/img/poster', alt: 'ig 03' },
          ]
        }
      ],
    },*/
    /*{
      slug: 'graphic-hopeart',
      category: 'graphic',
      title: 'Hope Art Studio',
      subtitle: '品牌',
      base: '/img/graphic-derma',
      alt: '醫美海報',
      tags: ['明信片', 'Poster'],
      description: `醫療情境的視覺與版式…`,
    },*/
  ]
  
  // 方便查找
  export const projectsMap = Object.fromEntries(projects.map(p => [p.slug, p]))
  export const getProjectBySlug = slug => projectsMap[slug]
  