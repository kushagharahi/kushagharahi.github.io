import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

require('res/style/scss/app.scss')
require('file-loader?name=[name].[ext]!static/index.html')
require('file-loader?name=[name].[ext]!static/404.html')
require('file-loader?name=[name].[ext]!static/favicon.ico')
require('file-loader?name=[name]!static/CNAME')
require('file-loader?name=[name].[ext]!static/robots.txt')
require('file-loader?name=[name].[ext]!static/googledc065f3d00d77d9e.html')
require('res/img/logo/logo.png')
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: view('Home'), meta: { title: 'Kusha Gharahi', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Portfolio and Blog' }},
    { path: '/resume', component: view('Resume'), meta: { title: 'Resume', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Resume' }},
    { path: '/projects', component: view('Projects'), meta: { title: 'Projects', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Projects' }},
    { path: '/contact', component: view('Contact'), meta: { title: 'Contact', description: 'Kusha Gharahi - Software Engineer, Architect, Leader - Contact Me' }},
    { path: '/blog', component: view('Blog'), meta: { title: 'Blog', description: 'Blog | Kusha Gharahi' }},
    { path: '/blog/:name', component: view('BlogPost'), meta: { title: 'Blog', description: 'blog post' }, params: { name: '' }},
    { path: '*', component: view('NotFound'), meta: { title: 'Not Found' }}
  ]
})

var root = new Vue({
  el: '#app',
  router: router,
  render: function (h) {
    return h(App)
  },
  replace: false
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})

Vue.mixin({
  methods: {
    setMetaTags: (title, description, image) => setMetaTags(title, description, image)
  }
})

function setMetaTags (title, description, image) {
  document.title = title
  document.head.children['og\:title'].content = title
  document.head.children['og\:url'].content = 'https://kusha.me' + window.location.pathname
  document.head.children['og\:description'].content = description
  document.head.children['description'].content = description
  document.head.children['twitter\:title'].content = title
  document.head.children['twitter\:description'].content = description
  if (image != null && image !== '') {
    document.head.children['og\:image'].content = 'https://kusha.me/' + image
    document.head.children['twitter\:image'].content = 'https://kusha.me/' + image
  } else {
    document.head.children['og\:image'].content = 'https://kusha.me/imgs/logo.png'
    document.head.children['twitter\:image'].content = 'https://kusha.me/imgs/logo.png'
  }
}

function view (name) {
  return resolve =>
    require(['./views/' + name + '.vue'], resolve)
}

router.afterEach(function (to, from) {
  if (to.meta.description !== 'blog post') {
    const title = to.meta.title + '  - kusha.me'
    setMetaTags(title, to.meta.description, '')
  }
})
