import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

require('res/style/sass/app.scss')
require('file-loader?name=[name].[ext]!static/index.html')
// require('file-loader?name=[name].[ext]!static/404.html')
require('file-loader?name=[name].[ext]!static/favicon.ico')
require('file-loader?name=[name]!static/CNAME')
require('file-loader?name=[name].[ext]!static/robots.txt')
require('file-loader?name=[name].[ext]!static/googledc065f3d00d77d9e.html')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: view('HomeComponent'), meta: { title: 'Kusha Gharahi', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Portfolio and Blog' }},
    { path: '/resume', component: view('ResumeComponent'), meta: { title: 'Resume', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Resume' }},
    { path: '/projects', component: view('ProjectsComponent'), meta: { title: 'Projects', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Projects' }},
    { path: '/contact', component: view('ContactComponent'), meta: { title: 'Contact', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Contact Me' }},
    { path: '/blog', component: view('BlogComponent'), meta: { title: 'Blog', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Tech Blog'}},
    { path: '/blog/:name', component: view('BlogPostComponent'), meta: { title: 'Blog' }, params: { name: '' }},
    { path: '*', component: view('NotFoundComponent'), meta: { title: 'Not Found' }}
  ]
})

router.beforeEach(function (to, from, next) {
  let title = to.meta.title + '  - kusha.me'
  document.title = title
  document.head.children["ogtitle"].content = title
  document.head.children["ogurl"].content = window.location.href
  document.head.children["ogdescription"].content = to.meta.description
  document.head.children["description"].content = to.meta.description
  document.head.children["twitter\:card"].content = to.meta.description
  //To-Do Images
  document.head.children["ogimage"].content = ""
  next()
})

const root = new Vue({
  el: '#app',
  router: router,
  render: function(h){
    return h(App)
  },
  replace: false
}).$mount('#app')

function view (name) {
  return function (resolve) {
    require(['./components/' + name + '.vue'], resolve)
  }
}
