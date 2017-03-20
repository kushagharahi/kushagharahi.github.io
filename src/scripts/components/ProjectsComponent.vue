<template>
<!--<div class="project" style="background-color: #FFFFFF" v-repeat="project in projects" v-hide="project.hide">
    <div  style="background-color: #FFFFFF" class="projectPreview">
        <img class="projectImg" v-if="project.imgPreview != ''" v-src="./res/img/project/{{project.imgPreview}}"></img>
        <img class="projectImg" v-if="project.imgPreview == ''" src="./res/img/project/somecode.png"></img>
    </div>
    <div  style="background-color: #FFFFFF" class="projectContent">
        <h2><strong>{{project.title}}</strong></h2>
        <span v-repeat="site in project.urls"> <a target="_blank" rel="noopener" :to="{{site.url}}">{{site.desc}}</a><span v-if="project.urls.length > 1 && $index != project.urls.length - 1"> | </span></span>
        <p>{{project.blurb}}</p>
        <p>Tech used: <strong v-repeat-start="tech in project.techUsed">{{tech.name}}</strong><span v-repeat-end v-if="project.techUsed.length > 1 && $index != project.techUsed.length - 1"> | </span></p>
    </div>
</div> -->
</template>
