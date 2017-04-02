webpackJsonp([0],Array(39).concat([
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BlogPostComponent.vue": 59,
	"./ContactComponent.vue": 60,
	"./HomeComponent.vue": 61,
	"./NavComponent.vue": 6,
	"./NotFoundComponent.vue": 62,
	"./ProjectsComponent.vue": 63,
	"./ResumeComponent.vue": 64,
	"./SocialIconComponent.vue": 10
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
webpackContext.id = 39;


/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models_blog_posts_hello_world_md__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models_blog_posts_hello_world_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_models_blog_posts_hello_world_md__);
var _this = this;

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      rawMarkdown: __WEBPACK_IMPORTED_MODULE_1_models_blog_posts_hello_world_md___default.a
    };
  },
  computed: {
    compiledMarkdown: function compiledMarkdown() {
      return __WEBPACK_IMPORTED_MODULE_0_marked___default()(_this.rawMarkdown, { sanitize: true });
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var _this = this;

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

module.exports = {
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
        if (_this.formData.validation.toLowerCase() !== 'blue') {
          _this.error = true;
          _this.message = 'Invalid answer to spam dectection message.';
        } else {
          _this.message = '';
          _this.error = false;
          var url = 'https://formspree.io/kushagharahi@gmail.com';
          var params = {
            Email: _this.formData._replyto,
            Message: _this.formData.body,
            Name: _this.formData.fName + ' ' + _this.formData.lName
          };
          _this.$http.post(url, params, { 'Access-Control-Allow-Origin': true }).then(function (success) {
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
/* 43 */
/***/ (function(module, exports) {

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

/***/ }),
/* 44 */
/***/ (function(module, exports) {

//
//
//
//
//
//

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_models_projects_json__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_models_projects_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_models_projects_json__);
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


var projectImgs = __webpack_require__(78);
/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      projects: __WEBPACK_IMPORTED_MODULE_0_models_projects_json___default.a,
      noPictureRes: projectImgs('./somecode.png'),
      pictureDir: function pictureDir(imgName) {
        return projectImgs('./' + imgName);
      }
    };
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.project {\n  display: inline-block;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  width: 100%;\n  margin-bottom: 20px;\n  padding-top: 10px;\n}\n.projectPreview, .projectContent {\n  display: inline-block;\n  vertical-align: middle;\n}\n.projectPreview {\n  padding: 10px;\n}\n.projectImg {\n  width: 210px;\n  height: 105px;\n}\n.projectContent {\n  padding: 10px;\n  max-width: 595px;\n}\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.docIFrame {\n  width: 100%;\n  height: 1066px;\n  margin: auto;\n  border: solid 1px lightgray;\n}\n@media screen and (max-width: 850px) {\n.docIFrame {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.form-group {\n  padding: 5px;\n}\n.form-message {\n  width: 100%;\n  height: 200px;\n}\n.form-input {\n  width: 200px;\n  height: 20px;\n}\n.form-email {\n  width: 300px;\n  height: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "imgs/kushame.png?de7383ae223ad48f3e9e0ef95d77447c";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "imgs/luckyse7ens.png?72ed374ef05577c332d59fec2ff45d49";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "imgs/somecode.png?3ac7ed970e773b1bdb5fdc9f1df85cc1";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "imgs/youtubenotgif.png?4a588c13f6efd4221f70c1788fe10d89";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "## Hello World\r\n\r\nThis is my first blog post. \r\n\r\n\r\n\r\n--Kusha\r\n"

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(72)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/BlogPostComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BlogPostComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce38514", Component.options)
  } else {
    hotAPI.reload("data-v-0ce38514", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/ContactComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ContactComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e206474", Component.options)
  } else {
    hotAPI.reload("data-v-7e206474", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(75)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/HomeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bb68737", Component.options)
  } else {
    hotAPI.reload("data-v-6bb68737", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/NotFoundComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NotFoundComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3751b527", Component.options)
  } else {
    hotAPI.reload("data-v-3751b527", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(71)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/ProjectsComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectsComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-084fe208", Component.options)
  } else {
    hotAPI.reload("data-v-084fe208", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(74)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/mnt/c/Users/Kusha/Documents/GitHub/kushagharahi.github.io/src/scripts/components/ResumeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResumeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f56d669", Component.options)
  } else {
    hotAPI.reload("data-v-4f56d669", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.projects), function(project) {
    return (!project.hide) ? _c('div', {
      staticClass: "project",
      staticStyle: {
        "background-color": "#FFFFFF"
      }
    }, [_c('div', {
      staticClass: "projectPreview",
      staticStyle: {
        "background-color": "#FFFFFF"
      }
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
      staticClass: "projectContent",
      staticStyle: {
        "background-color": "#FFFFFF"
      }
    }, [_c('h2', [_c('strong', [_vm._v(_vm._s(project.title))])]), _vm._v(" "), _vm._l((project.urls), function(site, siteIndex) {
      return _c('span', [_c('a', {
        attrs: {
          "target": "_blank",
          "rel": "noopener",
          "href": site.url
        }
      }, [_vm._v(_vm._s(site.desc))]), (project.urls.length > 1 && siteIndex != project.urls.length - 1) ? _c('span', [_vm._v(" | ")]) : _vm._e()])
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(project.blurb))]), _vm._v(" "), _c('p', [_vm._v("Tech used: "), _vm._l((project.techUsed), function(tech, techIndex) {
      return _c('span', [_vm._v(_vm._s(tech.name)), (project.techUsed.length > 1 && techIndex != project.techUsed.length - 1) ? _c('span', [_vm._v(" | ")]) : _vm._e()])
    })], 2)], 2)]) : _vm._e()
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-084fe208", module.exports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.compiledMarkdown)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ce38514", module.exports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n        404 not found\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3751b527", module.exports)
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("I work full time currently at "), _c('a', {
    attrs: {
      "href": "http://cagene.com",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("CancerGene Connect")]), _vm._v(" but am always interested in hearing what offers are available. Feel free to send inquiries "), _c('router-link', {
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
  }, [_vm._v("Download as PDF")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f56d669", module.exports)
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', [_vm._v("Kusha Gharahi")]), _vm._v(" "), _c('p', {
    staticClass: "pre"
  }, [_vm._v("\r\n        Full Time - Full Stack Developer "), _c('br'), _vm._v(" Full Time Student Pursuing Computer Science Degree at UT Dallas "), _c('br'), _vm._v(" Dallas,\r\n        TX\r\n    ")]), _vm._v(" "), _c('p', [_vm._v("Hi, I'm Kusha, a developer building "), _c('a', {
    attrs: {
      "href": "/projects"
    }
  }, [_vm._v("really cool stuff.")]), _vm._v(" You can check out my "), _c('a', {
    attrs: {
      "href": "/resume"
    }
  }, [_vm._v("resume")]), _vm._v("        or "), _c('a', {
    attrs: {
      "href": "/contact/"
    }
  }, [_vm._v("contact me")]), _vm._v(" as well.")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', [_vm._v("Skill Set")]), _vm._v(" "), _c('span', [_vm._v("Languages:    C# | Java | JavaScript | CSS/HTML | Sass | TypeScript")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Frameworks:   AngularJS | ASP.NET MVC | WebAPI | NodeJS")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Tools:        Git | Team Foundation Server (TFS) | npm | Gulp")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', [_vm._v("About this website")]), _vm._v("\r\n    Built with:\r\n    "), _c('ul', [_c('li', [_vm._v("AngularJS 1 with DefinitelyTyped for TS type definitions for NG1")]), _vm._v(" "), _c('li', [_vm._v("TypeScript (Compiled down to JS pre-deploy)")]), _vm._v(" "), _c('li', [_vm._v("100% Self Written CSS; Compiled down from Sass (No Frameworks used)")])]), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "rel": "noopener",
      "href": "https://github.com/kushagharahi/kushagharahi.github.io"
    }
  }, [_vm._v("GitHub repo")]), _vm._v(" |\r\n    "), _c('a', {
    attrs: {
      "target": "_blank",
      "rel": "noopener",
      "href": "https://trello.com/b/kTT3uS5b/kusha-me"
    }
  }, [_vm._v("Trello board/backlog")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6bb68737", module.exports)
  }
}

/***/ }),
/* 70 */
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
     require("vue-hot-reload-api").rerender("data-v-7e206474", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6e9527c4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-084fe208\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectsComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-084fe208\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d9e35750", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-0ce38514\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogPostComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-0ce38514\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogPostComponent.vue");
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

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("11c83708", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-3751b527\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFoundComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-3751b527\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFoundComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5ffe0c0a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4f56d669\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResumeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-4f56d669\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ResumeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("74ff1812", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6bb68737\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6bb68737\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0e761bbe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-7e206474\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-7e206474\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = [
	{
		"title": "YoutubeNotGif - Chrome Extention",
		"blurb": "Chrome extention that marks all youtube links as [YOUTUBE] in bold and hot pink on Reddit.",
		"imgPreview": "youtubenotgif.png",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/YoutubeNotGif",
				"desc": "GitHub"
			},
			{
				"url": "https://chrome.google.com/webstore/detail/youtube-not-gif/aadpjpjgnjejmneflbdcckablmkjgken",
				"desc": "Chrome Web Store"
			}
		],
		"techUsed": [
			{
				"name": "JavaScript"
			}
		]
	},
	{
		"title": "kusha.me - My Portfolio Website",
		"blurb": "The website you are currently on.",
		"imgPreview": "kushame.png",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/kushagharahi.github.io",
				"desc": "GitHub"
			},
			{
				"url": "http://kusha.me/",
				"desc": "kusha.me (recursive loop! don't press!)"
			}
		],
		"techUsed": [
			{
				"name": "AngularJS 1"
			},
			{
				"name": "TypeScript"
			},
			{
				"name": "JavaScript"
			},
			{
				"name": "HTML/CSS3"
			},
			{
				"name": "Sass"
			},
			{
				"name": "Bower/NPM"
			},
			{
				"name": "Gulp"
			}
		]
	},
	{
		"title": "A Project Management App",
		"blurb": "A project management application which allows you to create boards for projects, tasks within those boards, and move tasks to different stages of development. Made for my Human Computer Interactions as final project.",
		"imgPreview": "",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/ProjectManagement",
				"desc": "GitHub"
			},
			{
				"url": "http://taskerhci.azurewebsites.net",
				"desc": "Azure Live Demo Link"
			}
		],
		"techUsed": [
			{
				"name": "ASP.Net MVC 5"
			},
			{
				"name": "SQL Server 2013"
			},
			{
				"name": "Razor/HTML/CSS"
			},
			{
				"name": "JavaScript"
			}
		]
	},
	{
		"title": "Kinect-v2 Test Application",
		"blurb": "This program was built to familiarize myself with the Kinect v2 C# SDK. The program dectects your palms and adds a ball with collisons ablities. Realistic 2D ball physics ported from 'Super Fill Up' game.",
		"imgPreview": "",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/Kinect-v2-Testing",
				"desc": "GitHub"
			}
		],
		"techUsed": [
			{
				"name": "C#"
			},
			{
				"name": "Kinect v2 SDK"
			},
			{
				"name": "WPF/XAML"
			}
		]
	},
	{
		"title": "Vectors Library in Java",
		"blurb": "Just a simple vector math library for reference and easy porting.",
		"imgPreview": "",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/Vectors",
				"desc": "GitHub"
			}
		],
		"techUsed": [
			{
				"name": "Java"
			}
		]
	},
	{
		"title": "Super Fill Up - 2D Ball physics simulation",
		"blurb": "Classic Super Fill Up game written in Java for project in high school senior computer science. Notable features: realistic ball physics and collisions.",
		"imgPreview": "",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/Super-Fill-up",
				"desc": "GitHub"
			}
		],
		"techUsed": [
			{
				"name": "Java"
			}
		]
	},
	{
		"title": "Speed Card Game",
		"hide": true,
		"blurb": "Speed is a game for two or more players of the shedding family of card games, in which each player tries to get rid of all of his or her cards. Local Multiplayer only, developed in java. Junior year of high school Computer Science project.",
		"imgPreview": "",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/Speed",
				"desc": "GitHub"
			}
		],
		"techUsed": [
			{
				"name": "Java"
			}
		]
	},
	{
		"title": "LuckySe7ens - Dice Game",
		"blurb": "Under Over 7 dice game created for probability project in high school sophomore math class. Features simple animations using Java. The object of the game is to predict whether the dice will roll to a total of under 7 or over 7 or at 7.",
		"imgPreview": "",
		"urls": [
			{
				"url": "https://github.com/kushagharahi/LuckySe7ens",
				"desc": "GitHub"
			}
		],
		"techUsed": [
			{
				"name": "Java"
			}
		]
	}
];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./kushame.png": 53,
	"./luckyse7ens.png": 54,
	"./somecode.png": 55,
	"./youtubenotgif.png": 56
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
webpackContext.id = 78;


/***/ })
]));