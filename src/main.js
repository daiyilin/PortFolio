import Vue from 'vue'
import App from './App.vue'
import './styles/rwd.scss'
import  './styles/style.scss'
import router from '../router/index'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret)
library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




Vue.config.productionTip = false

// import axios from 'axios'
// Vue.prototype.$axios = axios    //全域性註冊，使用方法為:this.$axios



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


