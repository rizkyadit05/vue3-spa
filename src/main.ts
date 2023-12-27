import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/** style */
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
