import Vue from 'vue'
import Router from 'vue-router'
import Bookindex from '@/components/Bookindex'
import login from '@/components/login'
import regist from '@/components/regist'
import search from '@/components/search'
import readpath from '@/components/readpath'
import goods from '@/components/goods'
import room from '@/components/room'
import indexBook from '@/components/indexBook'
import Bookorder from '@/components/bookorder'
import Money from '@/components/money'
import Bookrack from '@/components/bookrack'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'Bookindex',
      component: Bookindex,
      children:[
          {
              path: 'readpath',
              name: 'readpath',
              component: readpath
          },
          {
            path: '',
            name: 'indexBook',
            component: indexBook
          },
          {
            path: 'goods',
            name: 'goods',
            component: goods
          },
          {
            path: 'room',
            name: 'room',
            component: room
          },
          // 排行
         {
          path: '/bookorder',
          name: 'Bookorder',
          component: Bookorder
        },
        // 充值
        {
          path: '/money',
          name: 'Money',
          component: Money
        },
        // 书架
        {
          path: '/bookrack',
          name: 'Bookrack',
          component: Bookrack
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    
  ]
})
