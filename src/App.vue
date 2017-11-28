<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <Footers></Footers>
  </div>
</template>

<script>
  import Footers from './components/Footer.vue'
export default {
  name: 'app',
  components:{
    Footers
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
