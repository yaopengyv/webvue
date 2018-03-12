import Vue from 'vue'
import Router from 'vue-router'
import Bookindex from '@/components/Bookindex'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'Bookindex',
      component: Bookindex
    }
  ]
})
