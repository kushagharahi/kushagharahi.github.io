(self.webpackChunkkusha_me=self.webpackChunkkusha_me||[]).push([[212],{3772:(e,o,n)=>{"use strict";n.d(o,{Z:()=>_});var t=n(8081),r=n.n(t),a=n(3645),i=n.n(a),l=n(1667),s=n.n(l),p=new URL(n(7358),n.b),u=new URL(n(1613),n.b),h=new URL(n(8121),n.b),d=new URL(n(1261),n.b),f=new URL(n(6665),n.b),c=i()(r()),m=s()(p),g=s()(u),b=s()(u,{hash:"?#iefix"}),k=s()(h),w=s()(d),v=s()(f,{hash:"#OpenSans"});c.push([e.id,`@font-face{font-family:"SF Display";font-weight:400;src:url(${m})}@font-face{font-family:"Open Sans";font-style:normal;font-weight:400;src:url(${g});src:local("Open Sans"),local("OpenSans"),url(${b}) format("embedded-opentype"),url(${k}) format("woff2"),url(${w}) format("woff"),url(${v}) format("svg")}body{font-family:"Open Sans",Fallback,sans-serif;margin:0;font-family:"Open Sans",sans-serif;line-height:1.5;color:#aaa;background:#1b2431}h2{color:#985e6d}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem}a{color:#985e6d;text-decoration:none}a:hover{text-decoration:underline}.content{margin:0 auto;max-width:900px;padding-top:60px;padding-left:20px;padding-right:20px}@media screen and (max-width: 900px){.content{margin:0 auto;padding-top:45px;padding-left:1vw;padding-right:1vw}}.clearfix{clear:both}.pre{border-left:2px solid #985e6d;padding-left:3px;margin-left:5px}.loading{position:absolute;width:120px;height:120px;z-index:15;top:50%;left:50%;margin:-60px 0 0 -60px}.errorText{color:red}.vaildText{color:#aaa}pre,.shadow{box-shadow:0 3px 5px 0 rgba(0,0,0,.2),0 3px 3px 0 rgba(0,0,0,.14),0 4px 3px -1px rgba(0,0,0,.12);background-color:#1a2332}.hover:hover{background-color:#161e2c}.post{margin:.5em;padding:1em}.post img{max-width:100%}pre{background-color:#000;padding:1em;overflow-x:auto}pre code{overflow-wrap:normal;white-space:pre}code{font-size:1.2em;padding:.2em;line-height:1.6;background-color:#000}a{overflow-wrap:break-word}`,""]);const _=c},5014:(e,o,n)=>{var t='<h1 id="open-source-contributions">Open Source Contributions</h1>\n<h2 id="contributions-ive-made-to-packages-not-owned-or-maintained-by-me">Contributions I&#39;ve made to packages not owned or maintained by me</h2>\n<h3 id="i-also-have-a-bunch-of-first-party-open-source-packages-check-out-my-projects-page-for-a-list-of-those">I also have a bunch of first party open source packages! Check out my <a target="_blank" rel="noreferrer noopener nofollow" href="/projects">projects page</a> for a list of those!</h3>\n<p><img src="'+n(7091)(n(882))+'" alt="a git visual"/></p>\n<h3 id="ente-authenticator-auth-app-----add-lastpass-authenticator-import"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/ente-io/auth/">ente Authenticator (auth app)</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/ente-io/auth/commit/1f42338c2ac1010908bff97b457693ab9f1db501">Add Lastpass Authenticator import</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/ente-io/auth/pull/437">https://github.com/ente-io/auth/pull/437</a></li>\n<li>This feature allows users to easily transfer their Time-Based One-Time Password (TOTP) 2-factor authentication codes from LastPass Authenticator to the ente Authenticator app.<ul>\n<li>To use this feature, use the &quot;Transfer accounts&quot; option within Lastpass Authenticator Settings and press &quot;Export accounts to file&quot;. Then import the JSON downloaded in the ente Authenticator app.</li>\n</ul>\n</li>\n</ul>\n<h3 id="prerenderer-----add-warning-if-html-webpack-plugin-is-not-found"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/Tofandel/prerenderer/">Prerenderer</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/Tofandel/prerenderer/commit/410ae86a6ffb1022a3706877dbf2408ba9f87a50">add warning if html-webpack-plugin is not found</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/Tofandel/prerenderer/pull/75">https://github.com/Tofandel/prerenderer/pull/75</a></li>\n<li>This change addresses three things for the prerenderer webpack plugin:<ul>\n<li>makes it ultra clear that HtmlWebpackPlugin is required and why</li>\n<li>logging an error if during compilation if HtmlWebpackPlugin is not used -- if you don&#39;t use the HtmlWebpackPlugin, the afterEmit hook doesn&#39;t do anything and the plugin silently does nothing</li>\n<li>logging an error if the entryPath is not found in the assets</li>\n</ul>\n</li>\n</ul>\n<h3 id="vernemq-operator-----update-image-location--change-operator-deployment-apiversion-22"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/vernemq/vmq-operator">VerneMQ Operator</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/vernemq/vmq-operator/commit/37f75f8fba0fee1435f5699c0accc39743065b14">Update image location &amp; change operator deployment apiVersion #22</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/vernemq/vmq-operator/pull/22">https://github.com/vernemq/vmq-operator/pull/22</a></li>\n<li>This change was a result of my findings deploying the VMQ Operator to Kubernetes<ul>\n<li>Update base image to vernemq/vernemq</li>\n<li>make operator deployment v1 instead of v1beta since in k8s 1.16 the apis have changed</li>\n<li>all Deployments api/v1beta2 -&gt; apps/v1</li>\n<li>undo apiVersion change for node-exporter-daemonset</li>\n</ul>\n</li>\n</ul>\n<h3 id="hs100-----add-build-instructions-for-ubuntu--remove-make-from-build-instructions"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/jkbenaim/hs100">hs100</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/jkbenaim/hs100/commit/ee2c7de86ba01b0ba27649265647a3f9f761c898">Add build instructions for Ubuntu</a> &amp; <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/jkbenaim/hs100/commit/75e80d3b6ea31e92aba00b2fa3bb3c53f9c870e7">remove make from build instructions</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/jkbenaim/hs100/pull/5">https://github.com/jkbenaim/hs100/pull/5</a></li>\n<li>Just some documentation updates because I&#39;m not a C developer in my day-to-day so it wasn&#39;t apparent to me how to build the binary. So I added some instructions to save the next person 5-15 minutes.</li>\n</ul>\n<h3 id="bumper-----add-log_to_stdout-env-var"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/bmartin5692/bumper">bumper</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/bmartin5692/bumper/commit/436830cdd6ac039e6053bb402fc23186246ebc59">add LOG_TO_STDOUT env var</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/bmartin5692/bumper/pull/104">https://github.com/bmartin5692/bumper/pull/104</a> </li>\n<li>This allows users to forgo logging to logs/ and write directly to stdout. Old containers were getting very huge in size due to logging.</li>\n</ul>\n<h3 id="docker-transmission-openvpn-----add-log_to_stdout-environment-variable--documentation"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/haugene/docker-transmission-openvpn/">docker-transmission-openvpn</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/haugene/docker-transmission-openvpn/commit/e3d27e8172fb50e1532f01a24420a34899285ae7">Add LOG_TO_STDOUT environment variable + documentation</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/haugene/docker-transmission-openvpn/pull/1379">https://github.com/haugene/docker-transmission-openvpn/pull/1379</a></li>\n<li>The environment variable DOCKER_LOG, when set to true already logged Transmission logs to stdout. In my opinion this was a poor name, so I added a new variable LOG_TO_STDOUT and added documentation for it.</li>\n</ul>\n<h3 id="docker-transmission-openvpn-----remove-docker_log-in-favor-of-log_to_stdout"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/haugene/docker-transmission-openvpn/">docker-transmission-openvpn</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/haugene/docker-transmission-openvpn/commit/e0eaa0e643041a6639c6779f311010e8d21bd56a">Remove DOCKER_LOG in favor of LOG_TO_STDOUT</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/haugene/docker-transmission-openvpn/pull/1380">https://github.com/haugene/docker-transmission-openvpn/pull/1380</a></li>\n<li>Removes environment variable DOCKER_LOG since it was depreciated in above change.</li>\n</ul>\n<h3 id="odfe-monitor-cli-----backup-full-destination-info"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/mihirsoni/odfe-monitor-cli">odfe-monitor-cli</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/mihirsoni/odfe-monitor-cli/commit/65993f1526a883dbc4b5c97e3a8ab1d6c875ab23">Backup full destination info</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/mihirsoni/odfe-monitor-cli/pull/12">https://github.com/mihirsoni/odfe-monitor-cli/pull/12</a></li>\n<li>Added a feature to the OpenDistro for Elasticsearch (Kibana) CLI to backup full destination info for alerts/monitors</li>\n</ul>\n<h3 id="terraform-provider-datadog-----update-documentation-for-synthetic-retry-syntax"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/DataDog/terraform-provider-datadog/">terraform-provider-datadog</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/DataDog/terraform-provider-datadog/commit/b8fcdbc870de0f277ecf2245b5d8867cd6507b98">Update documentation for synthetic retry syntax</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/DataDog/terraform-provider-datadog/pull/645">https://github.com/DataDog/terraform-provider-datadog/pull/645</a></li>\n<li>Fixed a documentation error for the Datadog Terraform Provider that would cause errors in configuration</li>\n</ul>\n<h3 id="runelite-----wintertodt-plugin-round-start-notification"><a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/runelite/runelite/">runelite</a> --- <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/runelite/runelite/commit/80f0000f894e817ceb0cf2f7c427b75f75ccb6d8">Wintertodt plugin: Round start notification</a></h3>\n<ul>\n<li>Pull Request: <a target="_blank" rel="noreferrer noopener nofollow" href="https://github.com/runelite/runelite/pull/9201">https://github.com/runelite/runelite/pull/9201</a></li>\n<li>Added a round start notification for the minigame Wintertodt for a old school Runescape 3rd party client, Runelite</li>\n</ul>\n';e.exports=t},7091:e=>{"use strict";e.exports=function(e,o){return o||(o={}),e?(e=String(e.__esModule?e.default:e),o.hash&&(e+=o.hash),o.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},7212:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>_});var t=n(6252),r={class:"post"},a=["innerHTML"];const i={data:function(){return{compiledMarkdown:""}},created:function(){this.compiledMarkdown=n(5014),this.setMetaImg(this.getFirstImage(this.compiledMarkdown))},methods:{getFirstImage:function(e){var o=(new DOMParser).parseFromString(e,"text/html").getElementsByTagName("img")[0];return null!=o?o.attributes.src.nodeValue:null}}};var l=n(3379),s=n.n(l),p=n(7795),u=n.n(p),h=n(569),d=n.n(h),f=n(3565),c=n.n(f),m=n(9216),g=n.n(m),b=n(4589),k=n.n(b),w=n(3772),v={};v.styleTagTransform=k(),v.setAttributes=c(),v.insert=d().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=g();s()(w.Z,v);w.Z&&w.Z.locals&&w.Z.locals;const _=(0,n(3744).Z)(i,[["render",function(e,o,n,i,l,s){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",{innerHTML:e.compiledMarkdown},null,8,a)])}]])},882:(e,o,n)=>{"use strict";e.exports=n.p+"imgs/32e81d6b8527f3f22b3f.png"}}]);