webpackJsonp([0],Array(53).concat([
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BlogComponent.vue": 55,
	"./BlogPostComponent.vue": 60,
	"./ContactComponent.vue": 71,
	"./HomeComponent.vue": 76,
	"./NavComponent.vue": 6,
	"./NotFoundComponent.vue": 81,
	"./ProjectsComponent.vue": 86,
	"./ResumeComponent.vue": 99,
	"./SocialIconComponent.vue": 7
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = [{"title":"Access .NET app running in Windows VM from host computer using VMWare Fusion 8","subtitle":"Access localhost in VM from your Mac","name":"access_localhost_from_vm_in_host_computer","date_posted":"July 20th 2017"},{"title":"First Blog Post","subtitle":"My 'Hello World' post","name":"first_blog_post","date_posted":"April 2nd 2016"}]

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/BlogComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BlogComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4186cb97", Component.options)
  } else {
    hotAPI.reload("data-v-4186cb97", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0e373ada", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4186cb97\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4186cb97\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.post {\n  margin-bottom: 2em;\n}\n.postDate {\n  display: block;\n  margin-top: -.5rem;\n  margin-bottom: 1rem;\n  color: #9a9a9a;\n}\n", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = __webpack_require__(54);

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      posts: _posts2.default
    };
  }
}; //
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

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Blog")]), _vm._v(" "), _vm._l((_vm.posts), function(post) {
    return _c('div', [_c('div', {
      staticClass: "post"
    }, [_c('h2', [_c('router-link', {
      staticClass: "postTitle",
      attrs: {
        "to": '/blog/' + post.name
      }
    }, [_vm._v(_vm._s(post.title))])], 1), _vm._v(" "), _c('span', {
      staticClass: "postDate"
    }, [_vm._v(_vm._s(post.date_posted) + " ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(post.subtitle))]), _vm._v(" "), _c('p', [_c('router-link', {
      attrs: {
        "to": '/blog/' + post.name
      }
    }, [_vm._v("Full post >>")])], 1)])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4186cb97", module.exports)
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/BlogPostComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BlogPostComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c3d55d7", Component.options)
  } else {
    hotAPI.reload("data-v-1c3d55d7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("77f14e9e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1c3d55d7\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogPostComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1c3d55d7\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogPostComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.postDate {\n  display: block;\n  margin-top: -.5rem;\n  margin-bottom: 1rem;\n  color: #9a9a9a;\n}\nimg {\n  max-width: 100%;\n  display: block;\n  height: auto;\n}\n", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = __webpack_require__(54);

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mdPrefix = __webpack_require__(64); //
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      compiledMarkdown: '',
      postMetaData: {}
    };
  },
  methods: {
    getFirstImage: function getFirstImage(htmlString) {
      var markdown = htmlString;
      var parser = new DOMParser();
      var doc = parser.parseFromString(markdown, "text/xml");
      return doc.getElementsByTagName('img')[0];
    }
  },
  created: function created() {
    var _this = this;

    var markdown = mdPrefix('./' + this.$route.params.name + '.md');
    this.compiledMarkdown = markdown;
    this.postMetaData = _posts2.default.filter(function (p) {
      return p.name == _this.$route.params.name;
    })[0];
    var firstImg = this.getFirstImage(markdown);
    if (firstImg != null) {
      firstImg = firstImg.attributes.src.nodeValue;
      this.setMetaTags(this.postMetaData.title, this.postMetaData.subtitle, firstImg);
    } else this.setMetaTags(this.postMetaData.title, this.postMetaData.subtitle, '');
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access_localhost_from_vm_in_host_computer.md": 65,
	"./cleanearthlife_and_my_earth_hack_experience.md": 67,
	"./first_blog_post.md": 68,
	"./taking_control_of_my_privacy_and_data.md": 69
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<p><img src=\"" + __webpack_require__(66) + "\" alt=\"Visual Studio\"></p>\n<p>I spent a ton of time figuring this out today. We&#39;re in the process of moving from Windows to Macos and this makes .Net dev work a ton easier on Mac. Hope this helps! </p>\n<h3 id=\"assumptions-made-for-this-tutorial-\">Assumptions made for this tutorial:</h3>\n<ul>\n<li>VMWare Fusion 8</li>\n<li>Windows 10 VM</li>\n<li>IIS Express/Visual Studio project </li>\n</ul>\n<h3 id=\"steps\">Steps</h3>\n<ul>\n<li>Make sure in your VM&#39;s Settings under <code>Network Adapter</code> is configured to share the ip of the VM with the host computer</li>\n<li>Add an <code>inbound rule</code> to the Windows firewall allowing connections from the port your project starts on</li>\n<li>Run <code>ipconfig</code> in CMD and get the ipv4 address of the Windows box</li>\n<li>Go to <code>$projectDirectory &gt; (this is a hidden folder) .vs &gt; config &gt; applicationhost.config</code> and edit anywhere it says localhost to the ip you copied</li>\n<li>Instead of using localhost:$port you can use ip:$port!</li>\n</ul>\n<p>Done! </p>\n";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "imgs/vs.png?f3e0a6d458476e5cd1aa7204c9f1f2b5";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"cleanearth-life-and-my-earthack-2017-experience\">CleanEarth.Life and my Earthack 2017 experience</h2>\n";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<p>Hello World. This is my first blog post. This is currently an MVP for a blog I&#39;m building from the ground up.</p>\n<p>--Kusha</p>\n";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<p>A product or service is never truely free. Take any free service such as Facebook or Google and you will quickly see you are the product. You essentially pay for the services they offer via your data. </p>\n";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "post"
  }, [_c('h2', [_vm._v(_vm._s(_vm.postMetaData.title))]), _vm._v(" "), _c('span', {
    staticClass: "postDate"
  }, [_vm._v(_vm._s(_vm.postMetaData.date_posted) + " ")]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.compiledMarkdown)
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "rel": "noopener",
      "href": 'https://github.com/kushagharahi/kushagharahi.github.io/blob/dev/src/models/blog/posts/' + _vm.$route.params.name + '.md'
    }
  }, [_vm._v("Suggest a change to this post here! (requires a GitHub account)")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c3d55d7", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(72)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/ContactComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ContactComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c90215e", Component.options)
  } else {
    hotAPI.reload("data-v-3c90215e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("372175ea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3c90215e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3c90215e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.form-group {\n  padding: 5px;\n}\n.form-message {\n  width: 100%;\n  height: 200px;\n}\n.form-input {\n  width: 200px;\n  height: 20px;\n}\n.form-email {\n  width: 300px;\n  height: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  data: function data() {
    return {
      message: '',
      formData: {
        fName: '',
        lName: '',
        _replyto: '',
        body: '',
        validation: ''
      },
      formDisabled: false,
      error: false,
      submit: function submit() {
        var _this = this;

        if (this.formData.validation.toLowerCase() !== 'blue') {
          this.error = true;
          this.message = 'Invalid answer to spam dectection message.';
        } else {
          this.message = '';
          this.error = false;
          var url = 'https://formspree.io/kushagharahi@gmail.com';
          var params = {
            Email: this.formData._replyto,
            Message: this.formData.body,
            Name: this.formData.fName + ' ' + this.formData.lName
          };
          this.$http.post(url, params, { 'Access-Control-Allow-Origin': true }).then(function (success) {
            _this.message = 'Form submitted. I look forward to connecting with you!';
            _this.formDisabled = true;
          }, function (err) {
            _this.error = true;
            _this.message = 'There was an error processing the form, please try again or contact the webmaster @ kushagharahi(dot)gmail.com. Error: ';
            _this.message += err;
          });
        }
      }
    };
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("Feel free to drop me a line using the form below! I generally will reply within 2 business days. I look forward to connecting with you.")]), _vm._v(" "), _c('form', {
    attrs: {
      "name": "contactForm"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.fName),
      expression: "formData.fName"
    }],
    staticClass: "form-input",
    attrs: {
      "name": "fName",
      "disabled": _vm.formDisabled,
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.fName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.fName = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.lName),
      expression: "formData.lName"
    }],
    staticClass: "form-input",
    attrs: {
      "name": "lName",
      "disabled": _vm.formDisabled,
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.lName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.lName = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData._replyto),
      expression: "formData._replyto"
    }],
    staticClass: "form-email",
    attrs: {
      "type": "email",
      "disabled": _vm.formDisabled,
      "required": "",
      "name": "_replyto"
    },
    domProps: {
      "value": (_vm.formData._replyto)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData._replyto = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.body),
      expression: "formData.body"
    }],
    staticClass: "form-message",
    attrs: {
      "name": "body",
      "disabled": _vm.formDisabled,
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.body = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.validation),
      expression: "formData.validation"
    }],
    staticClass: "form-input",
    attrs: {
      "name": "validation",
      "disabled": _vm.formDisabled,
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.validation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.validation = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    attrs: {
      "type": "submit",
      "value": "Send",
      "disabled": _vm.formDisabled
    }
  })])]), _vm._v(" "), _c('p', {
    class: {
      errorText: _vm.error
    }
  }, [_vm._v(_vm._s(_vm.message))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "fName"
    }
  }, [_vm._v("First Name:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "lName"
    }
  }, [_vm._v("Last Name:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "_replyto"
    }
  }, [_vm._v("Email:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Message:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "validation"
    }
  }, [_vm._v("What color is the sky on a clear day?")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c90215e", module.exports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/HomeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52c5317a", Component.options)
  } else {
    hotAPI.reload("data-v-52c5317a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("7c10698f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-52c5317a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-52c5317a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.app {\n  background-color: black;\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    data: function data() {
        return {};
    },
    methods: {
        out: function out(statement) {
            var terminal = document.getElementbyId("terminal").innerHTML;
            if (terminal.length != 0) terminal += "\n";
            terminal += "kusha.me:/ vistor$ ";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                var _loop = function _loop() {
                    var char = _step.value;

                    setTimeout(function () {
                        document.getElementbyId("console").innerHTML += char;
                    }, 15);
                };

                for (var _iterator = statement[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    },
    created: function created() {
        out("man about.me");
        out(">  Hi,");
        out(">  I'm Kusha, a developer building <a href='/projects'>really cool stuff.</a> You can check out my <a href='/resume'>resume</a>        or <a href='/contact/'>contact me</a> here.");
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('span', {
    attrs: {
      "id": "terminal"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52c5317a", module.exports)
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/NotFoundComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NotFoundComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46ab85ea", Component.options)
  } else {
    hotAPI.reload("data-v-46ab85ea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("11d155b8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-46ab85ea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFoundComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-46ab85ea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFoundComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', [_vm._v("404 not found")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Go to home?")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46ab85ea", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/ProjectsComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectsComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b31dfbf", Component.options)
  } else {
    hotAPI.reload("data-v-0b31dfbf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5d696b6e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b31dfbf\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectsComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b31dfbf\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.content {\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  padding-top: 41px;\n}\n.projectContainer {\n  display: flex;\n  flex-wrap: wrap;\n}\n.project {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  flex: 1 0 400px;\n  background-color: #192231;\n}\n.project:hover {\n    background-color: #161e2c;\n}\n.projectPreview {\n  min-height: 230px;\n  max-height: 230px;\n  overflow: hidden;\n}\n.projectImg {\n  width: 100%;\n}\n.projectContent {\n  padding: 5px;\n  color: #aaaaaa;\n}\n.projectContent h2 > strong {\n    color: #aaaaaa;\n}\n.label {\n  background-color: #985e6d;\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n", ""]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(90);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectImgs = __webpack_require__(91); //
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

exports.default = {
  data: function data() {
    return {
      projects: _projects2.default,
      noPictureRes: projectImgs('./somecode.png'),
      pictureDir: function pictureDir(imgName) {
        return projectImgs('./' + imgName);
      }
    };
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = [{"title":"kusha.me - My Portfolio Website","blurb":"The website you are currently on.","imgPreview":"kushame.png","urls":[{"url":"https://github.com/kushagharahi/kushagharahi.github.io","desc":"GitHub"},{"url":"http://kusha.me/","desc":"kusha.me (recursive loop! don't press!)"}],"techUsed":[{"name":"VueJS 2.0"},{"name":"Vue Resource"},{"name":"JavaScript"},{"name":"Sass"},{"name":"Webpack"}]},{"title":"MoodMusic - Built with IBM Watson","blurb":"A mood analyzing chatbot that uses IBM Watson's Natural Language Classifier to figure out a user's mood and searches our database of music classified by mood using IBM Watson's tone analyzer to generate a playlist of music of mood.","imgPreview":"","urls":[{"url":"https://github.com/kushagharahi/MoodMusic","desc":"GitHub"}],"techUsed":[{"name":"NodeJS"},{"name":"PostgreSQL"},{"name":"IBM Watson APIs"},{"name":"Twitter's Bootstrap"}]},{"title":"DMSAddToCal - Chrome Extention","blurb":"A little extension to add a add to calendar button on the individual http://dallasmakerspace.org/ event pages.","imgPreview":"dmsaddtocal.png","urls":[{"url":"https://github.com/kushagharahi/DMSAddToCal","desc":"GitHub"},{"url":"https://chrome.google.com/webstore/detail/add-dallas-makerspace-eve/ggamfjdgahgfkfdfjcoajoflbefhlbga","desc":"Chrome Web Store"}],"techUsed":[{"name":"JavaScript"}]},{"title":"YoutubeNotGif - Chrome Extention","blurb":"Chrome extention that marks all youtube links as [YOUTUBE] in bold and hot pink on Reddit.","imgPreview":"youtubenotgif.png","urls":[{"url":"https://github.com/kushagharahi/YoutubeNotGif","desc":"GitHub"},{"url":"https://chrome.google.com/webstore/detail/youtube-not-gif/aadpjpjgnjejmneflbdcckablmkjgken","desc":"Chrome Web Store"}],"techUsed":[{"name":"JavaScript"}]},{"title":"[OLD][v1]kusha.me - My Portfolio Website","blurb":"v1 of kusha.me","imgPreview":"kushame.png","urls":[{"url":"https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS","desc":"GitHub"}],"techUsed":[{"name":"AngularJS 1"},{"name":"TypeScript"},{"name":"JavaScript"},{"name":"HTML/CSS3"},{"name":"Sass"},{"name":"Bower/NPM"},{"name":"Gulp"}]},{"title":"A Project Management App","blurb":"A project management application which allows you to create boards for projects, tasks within those boards, and move tasks to different stages of development. Made for my Human Computer Interactions as final project.","imgPreview":"","urls":[{"url":"https://github.com/kushagharahi/ProjectManagement","desc":"GitHub"},{"url":"http://taskerhci.azurewebsites.net","desc":"Azure Live Demo Link"}],"techUsed":[{"name":"ASP.Net MVC 5"},{"name":"SQL Server 2013"},{"name":"Razor/HTML/CSS"},{"name":"JavaScript"}]},{"title":"Kinect-v2 Test Application","blurb":"This program was built to familiarize myself with the Kinect v2 C# SDK. The program dectects your palms and adds a ball with collisons ablities. Realistic 2D ball physics ported from 'Super Fill Up' game.","imgPreview":"kinectv2.jpg","urls":[{"url":"https://github.com/kushagharahi/Kinect-v2-Testing","desc":"GitHub"}],"techUsed":[{"name":"C#"},{"name":"Kinect v2 SDK"},{"name":"WPF/XAML"}]},{"title":"Vectors Library in Java","blurb":"Just a simple vector math library for reference and easy porting.","imgPreview":"","urls":[{"url":"https://github.com/kushagharahi/Vectors","desc":"GitHub"}],"techUsed":[{"name":"Java"}]},{"title":"Super Fill Up - 2D Ball physics simulation","blurb":"Classic Super Fill Up game written in Java for project in high school senior computer science. Notable features: realistic ball physics and collisions.","imgPreview":"","urls":[{"url":"https://github.com/kushagharahi/Super-Fill-up","desc":"GitHub"}],"techUsed":[{"name":"Java"}]},{"title":"Speed Card Game","hide":true,"blurb":"Speed is a game for two or more players of the shedding family of card games, in which each player tries to get rid of all of his or her cards. Local Multiplayer only, developed in java. Junior year of high school Computer Science project.","imgPreview":"","urls":[{"url":"https://github.com/kushagharahi/Speed","desc":"GitHub"}],"techUsed":[{"name":"Java"}]},{"title":"LuckySe7ens - Dice Game","blurb":"Under Over 7 dice game created for probability project in high school sophomore math class. Features simple animations using Java. The object of the game is to predict whether the dice will roll to a total of under 7 or over 7 or at 7.","imgPreview":"luckyse7ens.png","urls":[{"url":"https://github.com/kushagharahi/LuckySe7ens","desc":"GitHub"}],"techUsed":[{"name":"Java"}]}]

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dmsaddtocal.png": 92,
	"./kinectv2.jpg": 93,
	"./kushame.png": 94,
	"./luckyse7ens.png": 95,
	"./somecode.png": 96,
	"./youtubenotgif.png": 97
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 91;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "imgs/dmsaddtocal.png?30cee5d9f7c492b5d2ab344067685478";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "imgs/kinectv2.jpg?68c8d428989c8250e83b01fd4e19e537";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "imgs/kushame.png?de7383ae223ad48f3e9e0ef95d77447c";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "imgs/luckyse7ens.png?72ed374ef05577c332d59fec2ff45d49";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "imgs/somecode.png?3ac7ed970e773b1bdb5fdc9f1df85cc1";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "imgs/youtubenotgif.png?4a588c13f6efd4221f70c1788fe10d89";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "projectContainer"
  }, _vm._l((_vm.projects), function(project) {
    return (!project.hide) ? _c('div', {
      staticClass: "project"
    }, [_c('div', {
      staticClass: "projectPreview"
    }, [(project.imgPreview != '') ? _c('img', {
      staticClass: "projectImg",
      attrs: {
        "src": _vm.pictureDir(project.imgPreview)
      }
    }) : _vm._e(), _vm._v(" "), (project.imgPreview == '') ? _c('img', {
      staticClass: "projectImg",
      attrs: {
        "src": _vm.noPictureRes
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "projectContent"
    }, [_c('h2', [_c('strong', [_vm._v(_vm._s(project.title))])]), _vm._v(" "), _vm._l((project.techUsed), function(tech, techIndex) {
      return _c('span', [_c('span', {
        staticClass: "label"
      }, [_vm._v(_vm._s(tech.name))]), (project.techUsed.length > 1 && techIndex != project.techUsed.length - 1) ? _c('span') : _vm._e(), _vm._v(" ")])
    }), _vm._v(" "), _c('p', _vm._l((project.urls), function(site, siteIndex) {
      return _c('span', [_c('a', {
        attrs: {
          "target": "_blank",
          "rel": "noopener",
          "href": site.url
        }
      }, [_vm._v(_vm._s(site.desc))]), (project.urls.length > 1 && siteIndex != project.urls.length - 1) ? _c('span', [_vm._v(" | ")]) : _vm._e()])
    })), _vm._v(" "), _c('p', [_vm._v(_vm._s(project.blurb))])], 2)]) : _vm._e()
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b31dfbf", module.exports)
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kgharahi/Documents/Projects2/kushagharahi/src/scripts/components/ResumeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResumeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5380828", Component.options)
  } else {
    hotAPI.reload("data-v-a5380828", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("43e2de66", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a5380828\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResumeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a5380828\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResumeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.docIFrame {\n  width: 100%;\n  height: 1066px;\n  margin: auto;\n  border: solid 1px lightgray;\n}\n@media screen and (max-width: 850px) {\n.docIFrame {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = {
  data: function data() {
    return {
      resumeUrl: 'https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true'
    };
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "content"
    }
  }, [_c('p', [_vm._v("I work full time currently at "), _c('a', {
    attrs: {
      "href": "http://invitae.com",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Invitae")]), _vm._v(" but am always interested in hearing what offers are available. Feel free to send inquiries "), _c('router-link', {
    attrs: {
      "to": "contact"
    }
  }, [_vm._v("here.")])], 1), _vm._v(" "), _c('iframe', {
    staticClass: "docIFrame",
    attrs: {
      "frameborder": "0",
      "src": _vm.resumeUrl
    }
  }, [_vm._v("Your browser does not support inline frames. Download the PDF down below.")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/export?format=pdf"
    }
  }, [_vm._v("Download as PDF")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5380828", module.exports)
  }
}

/***/ })
]));