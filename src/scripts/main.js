import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFoundComponent from './components/NotFoundComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ResumeComponent from './components/ResumeComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import NavComponent from './components/NavComponent.vue';

require('res/style/sass/app.scss')

Vue.use(VueRouter);

Vue.component('nav-component', NavComponent);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/resume', component: ResumeComponent },
    { path: '/projects', component: ProjectsComponent },
    { path: '/contact', component: ContactComponent },
    { path: '*', component: NotFoundComponent }
  ]
})

const app= new Vue({
  router
}).$mount('.app')