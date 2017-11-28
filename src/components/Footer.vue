<template>
  <footer>
    <router-link to="/home" class="div">
          home
    </router-link>
    <router-link to="/details" class="div">
        details
    </router-link>
      <router-link to="/me" class="div">
        me
      </router-link>
  </footer>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  footer{
    width: 100%;
    height: 50px;
    background: orange;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 999;

  }
  .div{
    font-size: 18px;
    width: 33%;
    height: 100%;
    align-items:center;
    justify-content: center;
    line-height:50px;
    text-align: center;
    color: #ffffff;
  }
  .router-link-active{
    color: #333333;
  }
</style>

