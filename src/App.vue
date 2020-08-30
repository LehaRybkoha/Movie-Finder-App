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
    background: rgba(1,1,1, 0.1);
 }
  li {
    list-style: none;
  }
</style>
