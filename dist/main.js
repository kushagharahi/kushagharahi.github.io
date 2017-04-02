webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = "font/open-sans-v13-latin-regular.eot?c35ad7c76819575781c833319c13711b";

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/NavComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NavComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e9403d1", Component.options)
  } else {
    hotAPI.reload("data-v-4e9403d1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(31)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/SocialIconComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SocialIconComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa9c35a0", Component.options)
  } else {
    hotAPI.reload("data-v-fa9c35a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SocialIconComponent_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SocialIconComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SocialIconComponent_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      mobilePageTitle: '',
      mobileMenu: false
    };
  },
  components: {
    SocialIcon: __WEBPACK_IMPORTED_MODULE_0__SocialIconComponent_vue___default.a
  },
  watch: {
    '$route': function $route(to, from) {
      this.mobilePageTitle = to.meta.title + ' - kusha.me';
      if (this.mobileMenu) {
        this.mobileMenu = !this.mobileMenu;
      }
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

var imgLinkPrefix = __webpack_require__(38);
/* harmony default export */ __webpack_exports__["default"] = {
  props: ['name', 'link'],
  data: function data() {
    return {
      imgLink: ''
    };
  },
  created: function created() {
    this.imgLink = imgLinkPrefix('./' + this.name + '.png');
  },
  methods: {
    setHover: function setHover(hover) {
      if (hover === true) {
        this.imgLink = imgLinkPrefix('./' + this.name + '-hover.png');
      } else {
        this.imgLink = imgLinkPrefix('./' + this.name + '.png');
      }
    }
  }
};

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* open-sans-regular - latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + __webpack_require__(4) + ");\n  /* IE9 Compat Modes */\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(" + __webpack_require__(4) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(19) + ") format(\"woff2\"), url(" + __webpack_require__(18) + ") format(\"woff\"), url(" + __webpack_require__(20) + "#OpenSans) format(\"svg\");\n  /* Legacy iOS */ }\n\nbody {\n  font-family: 'Open Sans', Fallback, sans-serif;\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.5;\n  color: #555; }\n\nh1, h2, strong {\n  color: #333; }\n\na {\n  color: #985E6D; }\n\n.content {\n  margin: 0 auto;\n  max-width: 850px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n@media screen and (max-width: 850px) {\n  .content {\n    margin: 20px; } }\n\n.clearfix {\n  clear: both; }\n\n.pre {\n  border-left: 2px solid #985E6D;\n  padding-left: 3px;\n  margin-left: 5px; }\n\n.loading {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  z-index: 15;\n  top: 50%;\n  left: 50%;\n  margin: -60px 0 0 -60px; }\n\n.errorText {\n  color: red; }\n\n.vaildText {\n  color: #555; }\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.nav, .navMobileBG {\n  background-color: #494E6B;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.nav {\n  list-style: none;\n}\n.navMobileBG {\n  height: 40px;\n  margin-bottom: 0px;\n  text-align: center;\n  display: none;\n}\n.navTitle, .navLink {\n  float: left;\n  display: block;\n  color: white;\n  text-decoration: none;\n}\n.navTitle {\n  padding: 5px;\n  font-size: 20px;\n}\n.navMobileTitle {\n  margin: 5px;\n  font-size: 20px;\n  text-decoration: none;\n  display: none;\n  color: white;\n}\n.navLink {\n  padding: 10px;\n}\n.navLink:hover {\n  background-color: #111;\n}\n.navLink.active {\n  background-color: #985E6D;\n}\n.socialIcon {\n  float: right;\n  padding: 5px;\n}\n.socialIcon > img {\n  height: 24px;\n  width: 24px;\n}\n.navMenu[type=\"checkbox\"], .navMenu[type=checkbox] + label {\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.navMenu[type=checkbox] + label {\n  z-index: 0;\n}\n.navMenu[type=\"checkbox\"] {\n  z-index: 1;\n  opacity: 0;\n}\n.navMenu[type=checkbox] + label {\n  background: url(" + __webpack_require__(22) + ");\n  background-size: 100%;\n  display: none;\n}\n.navMenu[type=checkbox]:checked + label {\n  background: url(" + __webpack_require__(21) + ");\n  background-size: 100%;\n}\n.navMenu[type=checkbox]:checked + label + .nav {\n  display: block;\n}\n@media screen and (max-width: 850px) {\n.navMobileBG, .navMobileTitle, .navMenu[type=checkbox] + label {\n    display: inline-block;\n}\n.nav, .navTitle {\n    display: none;\n}\n.nav {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15);\n    top: 40px;\n}\n.navLink, .socialIcon {\n    float: none;\n}\n.socialIcon {\n    padding: 0px;\n}\n.socialIcon {\n    display: block;\n    padding: 5px;\n}\n.socialIcon > img {\n    padding-left: 5px;\n}\n}\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "font/open-sans-v13-latin-regular.woff?ce659615885f33d928eb7fe276574106";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "font/open-sans-v13-latin-regular.woff2?e64cab167bbdc04807429d10873901a0";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "imgs/open-sans-v13-latin-regular.svg?7e735d7ae17da9ead1360165b1dc3cfb";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "imgs/close.svg?6ab99ee581a8a3cf5c60819866fdeb1f";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "imgs/menu.svg?7c8eadc15bfe4d5deb76ca50115d2a47";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "imgs/github-hover.png?f87561b8bb354ef83b09a66e54f70e08";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "imgs/github.png?d56df49a807a9fd06eb1667a84d3810e";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "imgs/linkedin-hover.png?293366fcbc66f28e79ccd66f141af88a";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "imgs/linkedin.png?a9c9fb29bf21345b2734605283f862b9";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "imgs/twitter-hover.png?af07b4211d58dd1c945cad30fec1eb54";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "imgs/twitter.png?2faa9d502b83dad010e5f77e2a6868af";

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "navMobileBG"
  }, [_c('router-link', {
    staticClass: "navMobileTitle",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(_vm._s(_vm.mobilePageTitle))])], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobileMenu),
      expression: "mobileMenu"
    }],
    staticClass: "navMenu",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.mobileMenu) ? _vm._i(_vm.mobileMenu, null) > -1 : (_vm.mobileMenu)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.mobileMenu,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.mobileMenu = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.mobileMenu = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.mobileMenu = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "navMenu"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "nav"
  }, [_c('li', [_c('router-link', {
    staticClass: "navTitle",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("kusha.me")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/resume"
    }
  }, [_vm._v("Resume")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/projects"
    }
  }, [_vm._v("Projects")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/contact"
    }
  }, [_vm._v("Contact")])], 1), _vm._v(" "), _c('li', [_c('social-icon', {
    staticClass: "socialIcon",
    attrs: {
      "name": "github",
      "link": "http://github.com/kushagharahi",
      "target": "_blank"
    }
  })], 1), _vm._v(" "), _c('li', [_c('social-icon', {
    staticClass: "socialIcon",
    attrs: {
      "name": "twitter",
      "link": "http://twitter.com/KKUUSSHHAA",
      "target": "_blank"
    }
  })], 1), _vm._v(" "), _c('li', [_c('social-icon', {
    staticClass: "socialIcon",
    attrs: {
      "name": "linkedin",
      "link": "http://linkedin.com/in/kushagharahi",
      "target": "_blank "
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e9403d1", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": _vm.link,
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('img', {
    staticClass: "socialIcon",
    attrs: {
      "src": _vm.imgLink
    },
    on: {
      "mouseover": function($event) {
        _vm.setHover(true)
      },
      "mouseleave": function($event) {
        _vm.setHover(false)
      }
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fa9c35a0", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e24a85a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4e9403d1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4e9403d1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5d1d985e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-fa9c35a0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SocialIconComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-fa9c35a0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SocialIconComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./github-hover.png": 23,
	"./github.png": 24,
	"./linkedin-hover.png": 25,
	"./linkedin.png": 26,
	"./twitter-hover.png": 27,
	"./twitter.png": 28
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;


/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_NavComponent_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_NavComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_NavComponent_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

__webpack_require__(7)

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('nav-component', __WEBPACK_IMPORTED_MODULE_2__components_NavComponent_vue___default.a)

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [
    { path: '/', component: view('HomeComponent'), meta: { title: 'Home' }},
    { path: '/resume', component: view('ResumeComponent'), meta: { title: 'Resume' }},
    { path: '/projects', component: view('ProjectsComponent'), meta: { title: 'Projects' }},
    { path: '/contact', component: view('ContactComponent'), meta: { title: 'Contact' }},
    { path: '*', component: view('NotFoundComponent'), meta: { title: 'Not Found' }},
    { path: '/blog', component: view('BlogPostComponent'), meta: { title: 'Blog Post' }}
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + '  - kusha.me'
  next()
})

const app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  router
})

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('.app')
})

function view (name) {
  return function (resolve) {
    __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(39)("./" + name + '.vue')]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }
}

/* harmony default export */ __webpack_exports__["default"] = router;


/***/ })
],[40]);