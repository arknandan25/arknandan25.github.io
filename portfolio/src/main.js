import Vue from 'vue'
import App from './App.vue'
import './firebase'
// import VueFire from 'vuefire'

// Vue.use(VueFire);

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
