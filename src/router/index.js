import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 一般頁
  { path: '/',         name: 'home',     component: () => import('../pages/Home.vue') },
  { path: '/projects', name: 'projects', component: () => import('../pages/Projects.vue') },
  { path: '/about',    name: 'about',    component: () => import('../pages/About.vue') },
  // { path: '/contact',  name: 'contact',  component: () => import('../pages/Contact.vue') },

  // ✅ 自訂專案頁（一定要放在動態路由之前）
  { path: '/projects/hopeart',  name: 'project-hopeart', component: () => import('../pages/ProjectHopeArt.vue') },
  { path: '/projects/mytree',   name: 'project-mytree',  component: () => import('../pages/projectMyTreeApp.vue') },

  // ✅ 共用詳情頁（動態）— 只保留一個參數名稱（建議用 slug）
  { path: '/projects/:slug',    name: 'project-detail',  component: () => import('../pages/ProjectDetail.vue') },

  // （可選）404
  // { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFound.vue') },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    if (saved) return saved
    return { top: 0 }
  }
})
