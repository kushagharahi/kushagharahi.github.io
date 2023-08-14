<template>
  <div id="app" class="layout">
    <nav-component />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'

export default {
  name: 'App',
  components: { NavComponent },
}
</script>

<style lang="scss"></style>
