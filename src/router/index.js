import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/button/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    }
  ]
})
