import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import NavComponent from './components/NavComponent.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

require('res/style/sass/app.scss')
require('file-loader?name=[name].[ext]!static/index.html')
require('file-loader?name=[name].[ext]!static/favicon.ico')
require('file-loader?name=[name]!static/CNAME')
require('file-loader?name=[name].[ext]!static/robots.txt')

Vue.component('nav-component', NavComponent)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: view('HomeComponent'), meta: { title: 'Home' }},
    { path: '/resume', component: view('ResumeComponent'), meta: { title: 'Resume' }},
    { path: '/projects', component: view('ProjectsComponent'), meta: { title: 'Projects' }},
    { path: '/contact', component: view('ContactComponent'), meta: { title: 'Contact' }},
    { path: '/blog', component: view('BlogComponent'), meta: { title: 'Blog' }},
    { path: '/blog/post', component: view('BlogPostComponent'), meta: { title: 'Blog' }, query: { name: '' }},
    { path: '*', component: view('NotFoundComponent'), meta: { title: 'Not Found' }}
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + '  - kusha.me'
  next()
})

const app = new Vue({
  router
})

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('.app')
})

function view (name) {
  return function (resolve) {
    require(['./components/' + name + '.vue'], resolve)
  }
}

export default router
