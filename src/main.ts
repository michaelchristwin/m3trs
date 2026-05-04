import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import { WagmiPlugin } from '@wagmi/vue'
import { wagmiAdapter } from '@/config/wagmi'
import { createHead } from '@unhead/vue/client'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

const head = createHead()
const queryClient = new QueryClient()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app
  .use(WagmiPlugin, { config: wagmiAdapter.wagmiConfig })
  .use(VueQueryPlugin, { queryClient })
  .mount('#app')
