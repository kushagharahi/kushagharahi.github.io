import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import NotFoundComponent from './components/NotFoundComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import ResumeComponent from './components/ResumeComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import NavComponent from './components/NavComponent.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

require('res/style/sass/app.scss')

Vue.component('nav-component', NavComponent)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeComponent, meta: { title: 'Home' }},
    { path: '/resume', component: ResumeComponent, meta: { title: 'Resume' }},
    { path: '/projects', component: ProjectsComponent, meta: { title: 'Projects' }},
    { path: '/contact', component: ContactComponent, meta: { title: 'Contact' }},
    { path: '*', component: NotFoundComponent, meta: { title: 'Not Found' }}
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
