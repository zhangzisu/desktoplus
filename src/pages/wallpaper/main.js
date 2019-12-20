import Vue from 'vue'
import App from '@/pages/wallpaper/app.vue'
import '@/pages/wallpaper/ipc'
import '@/pages/wallpaper/styles/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
