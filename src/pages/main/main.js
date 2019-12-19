import Vue from 'vue'
import App from '@/pages/main/app.vue'
import router from '@/pages/main/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
