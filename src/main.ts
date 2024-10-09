import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueTelegramPlugin } from 'vue-tg'
import { WagmiPlugin } from '@wagmi/vue'
import { config } from './wagmi'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
const queryClient = new QueryClient()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTelegramPlugin)
app.use(WagmiPlugin, { config })
app.use(VueQueryPlugin, { queryClient })

app.mount('#app')
