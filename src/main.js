import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './routes'
import store from './store'
import { createPinia } from 'pinia'

loadFonts()

const pinia = createPinia()

createApp(App)
  .use(vuetify).use(router).use(store).use(pinia)
  .mount('#app')
