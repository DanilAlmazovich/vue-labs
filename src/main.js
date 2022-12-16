import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from '@/components/Header.vue'

import './assets/main.css'

const app = createApp(App)

app.component('v-header', Header)

app.use(router)

app.mount('#app')
