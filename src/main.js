import Vue from 'vue'
import Index from "./index.vue"
// import History from "./history.vue"
// import Memory from "./memory"
Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
