<template>
<div id="app">
    <mac-console-component class="shadow"></mac-console-component>
    <div id="center">
    <social-icon name="github"
                     class="socialIcon"
                     link="http://github.com/kushagharahi"
                     target="_blank"></social-icon>

        <social-icon name="twitter"
                     class="socialIcon"
                     link="http://twitter.com/KKUUSSHHAA"
                     target="_blank"></social-icon>

        <social-icon name="linkedin"
                     class="socialIcon"
                     link="http://linkedin.com/in/kushagharahi"
                     target="_blank "></social-icon>
    </div>
</div>
</template>

<script>
import MacConsoleComponent from 'scripts/components/MacConsoleComponent.vue'
import SocialIcon from 'scripts/components/SocialIconComponent.vue'


export default {
  components: { MacConsoleComponent, SocialIcon }
}
</script>

<style lang="sass">
#center {
    margin: 0 auto;
    width: 25px;
}
</style>
