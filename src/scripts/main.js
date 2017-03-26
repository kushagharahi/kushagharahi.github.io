import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFoundComponent from './components/NotFoundComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import ResumeComponent from './components/ResumeComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import NavComponent from './components/NavComponent.vue'

Vue.use(VueRouter)

require('res/style/sass/app.scss')

Vue.component('nav-component', NavComponent)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: view('HomeComponent'), meta: { title: 'Home' }},
    { path: '/resume', component: view('ResumeComponent'), meta: { title: 'Resume' }},
    { path: '/projects', component: view('ProjectsComponent'), meta: { title: 'Projects' }},
    { path: '/contact', component: view('ContactComponent'), meta: { title: 'Contact' }},
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
