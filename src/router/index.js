import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home.vue'
import Details from '../pages/Details.vue'
import Me from '../pages/Me'
import NOfund from  '../pages/Nofund.vue'


Vue.use(Router)
const Foo = { template: '<div>foo {{ $route.params.id }}</div>' }
const Bar = { template: '<div>bar {{ $route.params.id }}</div>' }
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/home/foo/11111',
      component: Home,
      children: [  //这里就是二级路由的配置
        {
          path: 'foo/:id',
          name: 'Foo',
          component: Foo
        },
        {
          path: 'bar/:id',
          name: 'Bar',
          component: Bar
        }
      ]
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    }
    , {
      path: '/me',
      name: 'Me',
      component: Me
    }
    , {
      path: '*',
      component: NOfund
    }
  ]
})
