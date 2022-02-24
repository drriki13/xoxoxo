import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import router from "@/router";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
