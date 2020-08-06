// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate () {
    console.log(' /***** (1.1) beforeCreate *****/')
  },
  created () {
    console.log(' /***** (1.2) created : 데이터, 이벤트 접근 (API) *****/')
  },
  beforeMount () {
    console.log(' /***** (2.1) beforeMount : *****/')
  },
  mounted () {
    console.log(' /***** (2.2) mounted : 인스턴스 생성 / DOM 접근 가능 *****/')
  },
  beforeUpdate () {
    console.log(' /***** (3.1) beforeUpdate *****/')
  },
  updated () {
    console.log(' /***** (3.2) updated : DOM 재렌더링 *****/')
  },
  beforeDestroy () {
    console.log(' /***** (4.1) beforeDestroy *****/')
  },
  destroyed () {
    console.log(' /***** (4.2) destroyed : 인스턴스 제거 (DOM,데이터,이벤트) *****/')
  }
})
