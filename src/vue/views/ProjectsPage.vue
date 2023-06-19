<template>
  <div class="projectContainer">
    <div
      v-for="project in projectsNotHidden"
      :key="project.title"
      class="project shadow hover"
    >
      <img
        v-if="project.imgPreview != ''"
        class="projectImg"
        :src="pictureDir(project.imgPreview)"
        :alt="project.title"
      >
      <img
        v-if="project.imgPreview == ''"
        class="projectImg"
        :src="noPictureRes"
        :alt="project.title"
      >

      <h2><strong>{{ project.title }}</strong></h2>
      <span
        v-for="(tech, techIndex) in project.techUsed"
        :key="tech.name"
      >
        <span class="label">{{ tech.name }}</span>
        <span v-if="project.techUsed.length > 1 && techIndex != project.techUsed.length - 1">&nbsp;</span>
      </span>
      <p>
        <span
          v-for="(site, siteIndex) in project.urls"
          :key="site.url"
        > 
          <a
            target="_blank"
            rel="noopener"
            :href="site.url"
          >{{ site.desc }}</a> 
          <span v-if="project.urls.length > 1 && siteIndex != project.urls.length - 1"> | </span>
        </span>
      </p>
      <p>{{ project.blurb }}</p>
    </div>
  </div>
</template>

<script>
import projects from 'content/projects/projects.json'
let projectImgsMap = require.context('content/projects/images/', false, /\.(png|jpg|gif)$/)

export default {
  data: () => {
    return {
      projects,
      noPictureRes: projectImgsMap('./somecode.png'),
      pictureDir: (imgName) => {
        return projectImgsMap('./' + imgName)
      }
    }
  },
  computed: {
    projectsNotHidden() {
      return this.projects.filter(project => !project.hide)
    }
  }
}
</script>

<style lang="scss">
@import '~res/style/scss/_vars.scss';

.projectContainer{
  display: flex; 
  flex-flow: row wrap;
  justify-content: center;
  position: absolute;
  z-index: -1;
  left: 0;
}

.project{
  flex: 0 1 400px;
  padding: 1em;
  margin: 1em;
}

.projectImg {
	width: 100%;
}

.label {
  background-color: $secondary-color;
  display: inline-block;
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
