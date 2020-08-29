<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'

  export default {
    name: 'app',
    components: {
      vMainWrapper
    }
  }
</script>

<style>
  body {
   font-family: Arial;
 }
  li {
    list-style: none;
  }
</style>
