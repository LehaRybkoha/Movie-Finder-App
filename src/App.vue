<template>
  <div id="app">
    <v-preloader />
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'
  import vPreloader from './components/v-preloader'

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      vMainWrapper,
      vPreloader
    }
  }
</script>

<style>
  body {
    font-family: Arial;
    background: rgba(1,1,1, 0.1);
 }
  li {
    list-style: none;
  }
</style>
