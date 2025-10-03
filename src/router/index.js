import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',                name: 'home',            component: () => import('../pages/Home.vue') },
  { path: '/projects',        name: 'projects',        component: () => import('../pages/Projects.vue') },

  // ← 先放固定頁（專屬頁面）
  { path: '/projects/hopeart', name: 'project-hopeart', component: () => import('../pages/ProjectHopeArt.vue') },
  { path: '/projects/mytree',  name: 'project-mytree',  component: () => import('../pages/projectMyTreeApp.vue') },

  // ← 最後才放動態詳情（一般專案）
  { path: '/projects/:slug',   name: 'project-detail',  component: () => import('../pages/ProjectDetail.vue') },

  { path: '/about',           name: 'about',           component: () => import('../pages/About.vue') },

  // 可選：兜底
  { path: '/:pathMatch(.*)*', redirect: '/' },
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
