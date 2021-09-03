import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 图片懒加载
import VueLazyload from 'vue-lazyload'

import Router from 'vue-router'

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 图片懒加载的插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/loading.png')
})

Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
