import Vue from 'vue'
import Buefy from 'buefy'
import App from '@/pages/wallpaper/app.vue'
import '@/pages/wallpaper/ipc'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-fluent/dist/vue-fluent.min.css'
import '@/pages/wallpaper/styles/main.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App)
}).$mount('#app')
