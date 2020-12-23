import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/index.vue'
import index from '@/components/mycontent.vue'
import DetailPage from '@/components/DetailPage.vue'
import category from '@/components/cata/category.vue'
import page from '../components/cata/page'
import Renqi from '@/components/Renqi'
import Dem from '@/components/demo'
import BookList from '@/components/BookList'
import BookUpdata from '@/components/BookUpdata'
import Hot from '@/components/Hot'
import Update from '@/components/Update'
import Register from '@/components/Register'
import Login from '@/components/Login'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
          path: '/index',
          name: 'index',
          component: index
        }, {
          path: '/update',
          name: 'update',
          component: Update
        }, {
          path: '/DetailPage',
          name: 'DetailPage',
          component: DetailPage
        },
         {
          path: '/category',
          name: 'category',
          component: category,
          children: [{
              path: '/',
              name: 'new',
              component: page
            },
            {
              path: 'hot',
              name: 'hot',
              component: page
            },
            {
              path: 'money',
              name: 'money',
              component: page
            },
            {
              path: 'score',
              name: 'score',
              component: page
            },
            {
              path: 'month',
              name: 'month',
              component: page
            }
          ]
        },
        {
          path: '/renqi',
          name: 'renqi',
          component: Renqi
        },
        {
          path: '/bookList',
          name: 'bookList',
          component: BookList,
          children: [{
              path: '/BookUpdata',
              name: 'BookUpdata',
              component: BookUpdata
            },
            {
              path: '/Hot',
              name: 'Hot',
              component: Hot

            }
          ],
          redirect: '/BookUpdata'
        }

      ],
      redirect: '/index'
    },
    {
      path: '/demo',
      name: 'demo',
      component: Dem
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})


