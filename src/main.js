import Vue from 'vue'
import router from './router/router'
import store from './store'
import App from './App.vue'
import 'normalize.css'
import './assets/styles/styles.scss'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
