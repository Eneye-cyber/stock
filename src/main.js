import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
Vue.use(VueResource)
Vue.http.options.root = 'https://stock-app-6959f-default-rtdb.firebaseio.com/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
