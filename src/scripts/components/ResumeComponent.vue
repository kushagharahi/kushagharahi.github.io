<template>
<div>
  <p>I work full time currently at <a href="http://cagene.com" target="_blank" rel="noopener">CancerGene Connect</a> but am always interested in hearing what offers are available. Feel free to send inquiries <a :href="contact">here.</a></p>
    <iframe class="docIFrame" frameborder="0" :src="resumeUrl">Your browser does not support inline frames. Download the PDF down below.</iframe>
    <div class="clearfix"></div>
  <br />
  <a href="https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/export?format=pdf">Download as PDF</a>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      resumeUrl: 'https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true'
    }
  }
}
</script>
