import { createRouter, createWebHistory } from 'vue-router'
import type { RouteParams, RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'

export type AppRouteNames =
  | 'global-feed'

export const routes: RouteRecordRaw[] = [
  {
    name: 'global-feed',
    path: '/',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function routerPush (name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  return params !== undefined
    ? router.push({
      name,
      params,
    })
    : router.push({ name })
}
