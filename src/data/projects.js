// src/data/projects.js
// 所有圖片請放 public/img 下，路徑用 /img/xxx.jpg

export const projects = [
    {
      slug: 'research',
      title: '研究',
      subtitle: 'MR / HoloLens / 點雲',
      base: '/img/research',                 // 對應 research-400/800/1200.jpg
      alt: '研究專案封面',
      tags: ['MR', 'HoloLens', 'Point Cloud'],
      description: `專案簡介放在這裡。
  技術棧與角色、產出、成果指標都可以寫。`,
      galleryBases: ['/img/research-1', '/img/research-2'] // 對應 -400/-800/-1200.jpg
    },
    {
      slug: 'ui',
      title: 'UI 設計',
      subtitle: 'UI / Web',
      base: '/img/ui',
      alt: 'UI 封面',
      tags: ['UI', 'Web'],
      description: `設計系統、元件庫、關鍵頁面與設計 rationale。`,
      galleryBases: ['/img/ui-1', '/img/ui-2', '/img/ui-3']
    },
    {
      slug: 'graphic',
      title: '視覺設計',
      subtitle: 'Graphic / Poster',
      base: '/img/graphic',
      alt: '視覺封面',
      tags: ['Graphic', 'Poster'],
      description: `主視覺、KV 延伸、實體物料與社群素材。`,
      galleryBases: ['/img/graphic-1']
    }
  ]
  
  // 方便詳細頁查找
  export const projectsMap = Object.fromEntries(projects.map(p => [p.slug, p]))
  export const getProjectBySlug = (slug) => projectsMap[slug]
  