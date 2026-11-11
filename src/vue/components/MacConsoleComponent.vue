<template>
  <div class="console">
    <div id="shell-top-bar">
      {{ topBarText }}
    </div>
    <div id="shell-body">
      <noscript v-html="noscriptContent" />
      <span id="shell-output" />
    </div>
  </div>
</template>

<script>
import posts from 'content/blog/posts.json'

export default {
  data: () => {
    return {
      topBarText: '🏠 vistor@kusha.me: /',
      latestPostMetadata: posts[0],
    }
  },
  computed: {
    command() {
      return 'man about | cat'
    },
    prompt() {
      return 'kusha.me:/ vistor$ '
    },
    bioHtml() {
      return `(about1)<br />
        Hi,<br />
        I'm Kusha, a software engineer <a href="/projects/">building really cool stuff</a> in my spare time.<br />
        📃 Check out my <a href="/resume/">resume here</a>.<br />
        📬 Drop me a line on my <a href="/contact/">contact page</a>.<br />
        🍴 <a href="https://github.com/kushagharahi/kushagharahi.github.io">Fork this site here</a>!<br />
        👀 Peep the latest blog post -&gt; <a href="/blog/${this.latestPostMetadata.name}/">${this.latestPostMetadata.title}</a><br /><br />
        <span style="text-align: center; display: block">
          &gt;&gt;&gt;&gt;<a href="/contact">PS. I freelance too</a>&lt;&lt;&lt;&lt;
        </span>`
    },
    noscriptContent() {
      return `${this.prompt}${this.command}<br />${this.bioHtml}`
    },
  },
  mounted: function () {
    if (
      (typeof window !== 'undefined' && window.__PRERENDER_INJECTED) ||
      (typeof navigator !== 'undefined' && navigator.webdriver)
    ) {
      return
    }
    const outputEl = document.getElementById('shell-output')
    this.terminalOutCommand(outputEl, this.command).then(() => {
      this.terminalOutHtml(outputEl, '<br />' + this.bioHtml)
    })
  },
  methods: {
    terminalOutCommand(domElement, statement) {
      return new Promise((resolve) => {
        let terminal = domElement
        if (!terminal) return resolve()

        terminal.innerHTML = this.prompt

        for (let i = 0; i < statement.length; i++) {
          setTimeout(function () {
            if (statement.charAt(i) == '*') {
              terminal.appendChild(document.createElement('br'))
            }

            terminal.innerHTML += statement.charAt(i)

            if (i == statement.length - 1) {
              resolve()
            }
          }, 100 * i)
        }
      })
    },
    terminalOutHtml(domElement, html) {
      return new Promise((resolve) => {
        domElement.innerHTML += html
        resolve()
      })
    },
  },
}
</script>

<style lang="scss">
#shell-top-bar {
  text-align: center;
  color: #525252;
  padding: 5px 0;
  margin: 0;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
  font-size: 0.85em;
  border: 1px solid #cccccc;
  border-bottom: none;
  font: 'SF Display';

  -webkit-border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-topright: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  background: #f7f7f7; /* Old browsers */
  background: -moz-linear-gradient(top, #f7f7f7 0%, #b8b8b8 100%); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #f7f7f7),
    color-stop(100%, #b8b8b8)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #f7f7f7 0%,
    #b8b8b8 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #f7f7f7 0%,
    #b8b8b8 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, #f7f7f7 0%, #b8b8b8 100%); /* IE10+ */
  background: linear-gradient(to bottom, #f7f7f7 0%, #b8b8b8 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#B8B8B8',GradientType=0 ); /* IE6-9 */
}

#shell-body {
  margin: 0;
  padding: 5px;
  list-style: none;
  background: #141414;
  color: #45d40c;
  line-height: 1.6em;
  font: 'SF Display';
  -webkit-border-bottom-right-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  min-height: 300px;
  @media screen and (max-width: 900px) {
    min-height: 350px;
  }
}

#shell-body div:before {
  content: '$';
  position: absolute;
  left: 0;
  top: 0;
}

#shell-body div {
  word-wrap: break-word;
  position: relative;
  padding: 0 0 0 15px;
}
</style>
