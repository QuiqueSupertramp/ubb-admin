import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

createApp(App).use(Vue3Toastify)

app.mount('#app')
