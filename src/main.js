import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router/index.js'

const vuetify = createVuetify()
createApp(App).use(router).use(vuetify).mount('#app')
