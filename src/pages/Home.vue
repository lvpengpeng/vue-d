<template>
  <div>
    <allSort></allSort>
    <HeadeSwiper></HeadeSwiper>
    <h1>我是主页</h1>
    <div class="page">
      <router-link to="/home/foo" class="div">
        居委會
      </router-link>
      <router-link to="/home/bar" class="div">
        幫助
      </router-link>
      <router-link to="/home" class="div">
        鄰居
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import allSort from '../components/allSort.vue'
  import HeadeSwiper from '../components/HeadeSwiper.vue'
    export default {
      components: { allSort ,HeadeSwiper}
    }
</script>

<style scoped>
  .page{
    width: 100%;
    height: 50px;
    background: #cccccc;
    display: flex;
  }
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
