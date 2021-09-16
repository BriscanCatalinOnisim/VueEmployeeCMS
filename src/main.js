import Vue from 'vue'
import App from './App.vue'
import InertiaTable from 'inertia-table'
Vue.use(InertiaTable);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
