// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next' // Vue2.0
import App from './App'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(Vuerify)
Vue.use(VuerifyDirective)

var store = new Vuex.Store({
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

Vue.http.options.root = 'http://localhost:7080'
