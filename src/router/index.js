import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage'),
    children: [{
      path: 'a', // 巢狀子元件前方可不加斜線
      component: () => import('../views/ComponentA.vue')
    },
    {
      path: 'b',
      component: () => import('../views/ComponentB.vue')
    },
    {
      path: 'namedView',
      component: () => import('../views/NamedView.vue'),
      children: [{
        path: 'a2c',
        components: {
          left: () => import('../views/ComponentA.vue'),
          right: () => import('../views/ComponentC.vue')
        }
      },
      {
        path: 'a2b',
        components: {
          left: () => import('../views/ComponentA.vue'),
          right: () => import('../views/ComponentB.vue')
        }
      }]
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
