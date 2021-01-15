<template>
  <div class='page-content'>
    <el-row>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </el-row>
    
    <el-row>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          username: '',
          mibile: '',
          email: '',
          sex: 1,
          dep: '',
          status: true
        },
        checkList: []
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