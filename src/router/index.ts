import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateTokenView from '@/views/CreateTokenView.vue'
import MyHoldingsView from '@/views/MyHoldingsView.vue'
import MyBondsView from '@/views/MyBondsView.vue'

import TokenDetailsView from '@/views/TokenDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'default' },
    },
    {
      path: '/create-token',
      name: 'create token',
      component: CreateTokenView,
    },
    {
      path: '/holdings',
      name: 'my holdings',
      component: MyHoldingsView,
    },
    {
      path: '/holdings/:walletAddress/:tokenId',
      name: 'token details',
      component: TokenDetailsView,
    },
    { path: '/my-bonds', name: 'my bonds', component: MyBondsView },
  ],
})

export default router
