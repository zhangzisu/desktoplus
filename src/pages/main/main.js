import Vue from 'vue'
import Buefy from 'buefy'
import App from '@/pages/main/app.vue'
import router from '@/pages/main/router'
import '@/pages/main/rpc'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-fluent/dist/vue-fluent.min.css'
import '@/pages/main/styles/main.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
