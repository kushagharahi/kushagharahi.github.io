<template>
  <div>
    <mac-console-component class="shadow" />
    <br />
    <div id="center">
      <social-icon
        name="github"
        class="socialIcon"
        link="http://github.com/kushagharahi"
        target="_blank"
      />

      <social-icon
        name="hackernews"
        class="socialIcon"
        link="https://news.ycombinator.com/user?id=kusha"
        target="_blank "
      />

      <social-icon
        name="linkedin"
        class="socialIcon"
        link="http://linkedin.com/in/kushagharahi"
        target="_blank "
      />
    </div>
    <link rel="icon" href="/favicon.ico" />
    <component :is="'script'" type="application/ld+json">
      { "@context": "https://schema.org", "@type": "WebSite", "name":
      "kusha.me", "alternateName": "Kusha Gharahi", "url": "https://kusha.me" }
    </component>
  </div>
</template>

<script>
import MacConsoleComponent from '../components/MacConsoleComponent.vue'
import SocialIcon from '../components/SocialIconComponent.vue'

export default {
  components: { MacConsoleComponent, SocialIcon },
}
</script>

<style lang="scss">
#center {
  justify-content: center;
  display: flex;
  width: 100%;
}
</style>
