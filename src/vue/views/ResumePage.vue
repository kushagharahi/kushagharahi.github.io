<template>
  <div id="content">
    <p>
      I currently work full time at <a
        href="http://www.toyotaconnected.com/"
        target="_blank"
        rel="noopener"
      >Toyota Connected</a> but am always interested in hearing what offers are available. Feel free to send inquiries <router-link to="contact">
        here.
      </router-link>
    </p>
    <div class="shadow">
      <iframe
        class="docIFrame"
        frameborder="0"
        :src="resumeUrl"
      >Your browser does not support inline frames. Download the PDF down below.</iframe>
    </div>
    <div class="clearfix" />
    <br>
    <a href="https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/export?format=pdf">Download as PDF</a>
  </div>
</template>

<script>
module.exports = {
  data: () => {
    return {
      resumeUrl: 'https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true'
    }
  }
}
</script>

<style lang="scss">
@import '~res/style/scss/_vars.scss';

.docIFrame {
  width: 100%;
  height: 1066px;
  margin: auto;
	border: solid 1px lightgray;
}

@media screen and (max-width: $mobileMaxWidth) {
  .docIFrame {
    display: none;
  }
}
</style>
