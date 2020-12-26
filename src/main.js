import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'quasar/dist/quasar.min.css'
import Quasar from 'quasar'
Vue.use(Quasar);
new Vue({
  render: h => h(App),
}).$mount('#app')
