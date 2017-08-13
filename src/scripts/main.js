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
    { path: '/blog', component: view('BlogComponent'), meta: { title: 'Blog', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Tech Blog' }},
    { path: '/blog/:name', component: view('BlogPostComponent'), meta: { title: 'Blog', description: 'blog post' }, params: { name: '' }},
    { path: '*', component: view('NotFoundComponent'), meta: { title: 'Not Found' }}
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: function (h) {
    return h(App)
  },
  replace: false
}).$mount('#app')

Vue.mixin({
  methods: {
    setMetaTags: (title, description, image) => setMetaTags(title, description, image)
  }
})

function setMetaTags (title, description, image) {
  document.title = title
  document.head.children['og\:title'].content = title
  document.head.children['og\:url'].content = window.location.href
  document.head.children['og\:description'].content = description
  document.head.children['description'].content = description
  document.head.children['twitter\:title'].content = title
  document.head.children['twitter\:description'].content = description
  document.head.children['og\:image'].content = image
  document.head.children['twitter\:image'].content = image
}

function view (name) {
  return resolve =>
    require(['./components/' + name + '.vue'], resolve)
}

router.afterEach(function (to, from) {
  const title = to.meta.title + '  - kusha.me'
  setMetaTags(title, to.meta.description, '')
})
