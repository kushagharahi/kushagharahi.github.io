<template>
<div id="app" class="layout">
<nav-component></nav-component>
		<div class="content">
			<router-view></router-view>
		</div>
        </div>
        </template>

<script>
import NavComponent from './components/NavComponent.vue'

export default {
  name: 'app',
  components: { NavComponent }
}
</script>

<style lang="scss">
</style>
