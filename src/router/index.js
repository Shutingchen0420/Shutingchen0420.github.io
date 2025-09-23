import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',                name: 'home',           component: () => import('../pages/Home.vue') },
  { path: '/projects',        name: 'projects',       component: () => import('../pages/Projects.vue') },
  {
    path: '/projects/hopeart',
    name: 'project-hopeart',
    component: () => import('../pages/ProjectHopeArt.vue')
  },
  { path: '/projects/:id',    name: 'project-detail', component: () => import('../pages/ProjectDetail.vue') },
  { path: '/about',           name: 'about',          component: () => import('../pages/About.vue') },
  //{ path: '/contact',         name: 'contact',        component: () => import('../pages/Contact.vue') },
  
  { path: '/projects/:slug', name: 'project-detail', component: () => import('../pages/ProjectDetail.vue') },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' } // 視你的 AppBar 高度調整 top
    }
    if (saved) return saved
    return { top: 0 }
  }
})