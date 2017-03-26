<template>
<div>
<div class="project" style="background-color: #FFFFFF" v-for="(project, index) in projects" v-if="!project.hide">
    <div style="background-color: #FFFFFF" class="projectPreview">
        <img class="projectImg" v-if="project.imgPreview != ''" :src="pictureDir(project.imgPreview)"></img>
        <img class="projectImg" v-if="project.imgPreview == ''" :src="noPictureRes"></img>
    </div>
    <div  style="background-color: #FFFFFF" class="projectContent">
        <h2><strong>{{project.title}}</strong></h2>
        <span v-for="site in project.urls"> <a target="_blank" rel="noopener" :to="site.url">{{site.desc}}</a><span v-if="project.urls.length > 1 && index != project.urls.length - 1"> | </span></span>
        <p>{{project.blurb}}</p>
        <p>Tech used: <strong v-for="(tech, index) in project.techUsed">{{tech.name}}</strong><span v-if="project.techUsed.length > 1 && index != project.techUsed.length - 1"> | </span></p>
    </div>
</div>
</div>
</template>

<script>
import projectJson from 'models/projects.json'
var projectImgs = require.context('res/img/project/', false, /\.png$/)
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
</style>
