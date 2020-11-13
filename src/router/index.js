import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/src/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    }
  ]
})
