import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ApiService from '@/core/services/ApiService'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
ApiService.init(app)
app.use(router)

app.mount('#app')
