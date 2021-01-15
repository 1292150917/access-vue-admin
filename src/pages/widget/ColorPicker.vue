<template>
  <div class='page-content'>
    <div class="block">
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="block">
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        color1: '#409EFF',
        color2: null
      };
    },
    mounted() {},
    methods: {},
  }
</script>

<style lang='scss' scoped>
  .page-content {
    width: 100%;
    height: 100%;

    
  }
</style>