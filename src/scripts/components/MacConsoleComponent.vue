<template>
<div id="app">
        <div id="shell-top-bar">🏠 kusha.me ----- - bash --</div>
        <div id="shell-body">
        
    </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      }
    },
   methods: {
       terminalout: function (domElement, statement) {
            return new Promise(function(resolve, reject) {
            let terminal = domElement;
            // if(terminal.innerHTML.length != 0)
            //     terminal.appendChild(document.createElement("br"));
            terminal.innerHTML += "kusha.me:/ vistor$ ";
                for (let i = 0; i < statement.length; i++) {
                    setTimeout(function() {
                        if(statement.charAt(i) == "*")
                            terminal.appendChild(document.createElement("br"));
                        terminal.innerHTML += statement.charAt(i);
                    }, 50 * i);
                }
                resolve();
           })

       }
    },
    mounted:  function () {
         this.terminalout(document.getElementById("shell-body"),"man about | cat *(about1)** Hi,*  I'm Kusha, a developer building really cool stuff. You can check out my resume or contact me</a> here.");
         
    }
  }
</script>

<style lang="sass">

#shell-top-bar {
  text-align: center;
  color: #525252;
  padding: 5px 0;
  margin: 0;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
  font-size: 0.85em;
  border: 1px solid #CCCCCC;
  border-bottom: none;

  -webkit-border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-topright: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  background: #f7f7f7; /* Old browsers */
  background: -moz-linear-gradient(top,  #f7f7f7 0%, #B8B8B8 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f7f7f7), color-stop(100%,#B8B8B8)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #f7f7f7 0%,#B8B8B8 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #f7f7f7 0%,#B8B8B8 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #f7f7f7 0%,#B8B8B8 100%); /* IE10+ */
  background: linear-gradient(to bottom,  #f7f7f7 0%,#B8B8B8 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#B8B8B8',GradientType=0 ); /* IE6-9 */
}

#shell-body {
  margin: 0;
  padding: 5px;
  list-style: none;
  background: #141414;
  color: #45D40C;
  font: 0.8em 'Andale Mono', Consolas, 'Courier New';
  line-height: 1.6em;

  -webkit-border-bottom-right-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
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
