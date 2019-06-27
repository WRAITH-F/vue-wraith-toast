// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import toastRegistry from './components/toast/toast' //注册一下toast弹窗组件

Vue.config.productionTip = false

Vue.use(toastRegistry)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
