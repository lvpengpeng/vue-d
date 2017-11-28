<template>
  <div>
    <div class="div">我是详情</div>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Caldwin"></mt-cell>
        <mt-cell title="Craden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell title="Ealdwin"></mt-cell>
        <mt-cell title="Draden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
      <mt-cell title="Ealdwin"></mt-cell>
      <mt-cell title="Eraden"></mt-cell>
    </mt-index-section>
      <mt-index-section index="F">
        <mt-cell title="Faldwin"></mt-cell>
        <mt-cell title="Fraden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import { IndexList, IndexSection,Cell} from 'mint-ui';
  export default {
    components: {
      "MtIndexSection": IndexSection,
      "MtIndexList":IndexList,
      "MtCell":Cell
    }
  }
</script>
<style scoped>
  .div{
    width: 100%;
    height: 50px;
    background: pink;
  }
</style>
