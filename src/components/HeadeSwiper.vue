<template>
  <div>
    <mt-swipe :auto="4000" class="abc">
      <mt-swipe-item>11111</mt-swipe-item>
      <mt-swipe-item>22222</mt-swipe-item>
      <mt-swipe-item>33333</mt-swipe-item>
    </mt-swipe>
    <!--<mt-tabbar v-model="selected">-->
      <!--<mt-tab-item id="tab1">-->
        <!--<img slot="icon" src="../assets/logo.png">-->
        <!--tab1-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="tab2">-->
        <!--<img slot="icon" src="../assets/logo.png">-->
        <!--tab2-->
      <!--</mt-tab-item>-->

      <!--&lt;!&ndash;<Tabbar id="tab3">&ndash;&gt;-->
        <!--&lt;!&ndash;<img slot="icon" src="../assets/logo.png">&ndash;&gt;-->
        <!--&lt;!&ndash;tab3&ndash;&gt;-->
      <!--&lt;!&ndash;</Tabbar>&ndash;&gt;-->
      <!--<mt-tab-item id="tab4">-->
        <!--<img slot="icon" src="../assets/logo.png">-->
        <!--tab4-->
      <!--</mt-tab-item>-->
    <!--</mt-tabbar>-->
  </div>
</template>

<script>
  import { Swipe, SwipeItem,Tabbar, TabItem} from 'mint-ui';
    export default {
      components: {
        "MtSwipe":Swipe,
        "MtSwipeItem":SwipeItem,
        "MtTabbar":Tabbar,
        "MtTabItem":TabItem
      }
    }
</script>

<style scoped>
  .abc{
    width: 100%;
    height: 160px;
    background: pink;
  }
</style>
