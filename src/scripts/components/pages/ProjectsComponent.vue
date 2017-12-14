<template>
<div class="projectContainer">
  <div class="project shadow hover" v-for="project in projects" v-if="!project.hide">
      <div class="projectPreview">
          <img class="projectImg" v-if="project.imgPreview != ''" :src="pictureDir(project.imgPreview)"></img>
          <img class="projectImg" v-if="project.imgPreview == ''" :src="noPictureRes"></img>
      </div>
      <div class="projectContent">
          <h2><strong>{{project.title}}</strong></h2>
          <span v-for="(tech, techIndex) in project.techUsed"><span class="label">{{tech.name}}</span><span v-if="project.techUsed.length > 1 && techIndex != project.techUsed.length - 1"></span>&nbsp;</span>
          <p><span v-for="(site, siteIndex) in project.urls"> <a target="_blank" rel="noopener" :href="site.url">{{site.desc}}</a><span v-if="project.urls.length > 1 && siteIndex != project.urls.length - 1"> | </span></span></p>
          <p>{{project.blurb}}</p>
          
      </div>
    </div>
</div>
</template>

<script>
import projectJson from 'models/projects.json'
var projectImgs = require.context('res/img/project/', false, /\.(png|jpg)$/)
export default {
  data: () => {
    return {
      projects: projectJson,
      noPictureRes: projectImgs('./somecode.png'),
      pictureDir: (imgName) => {
        return projectImgs('./' + imgName)
      }
    }
  }
}
</script>

<style lang="sass">
@import '~res/style/sass/_vars.scss';

.projectContainer{
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  z-index: -1;
  left: 0;
}

.project{
  flex: 1 0 400px;
  margin: 2em;
  padding: 2em;
}

.projectPreview {
  min-height: 230px;
  max-height: 230px;
  overflow: hidden;
}

.projectImg {
	width: 100%;
}

.projectContent {
  padding: 5px;
}

.label {
    background-color: #985e6d;
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
</style>
