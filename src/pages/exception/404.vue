<template>
  <div class="page-content">
    <div class="tips">
      <img src="@img/404.png" />
      <div class="right-wrap">
        <p>抱歉，你访问的页面不存在</p>
        <el-button type="primary" @click="goHomePage">返回首页</el-button>
      </div>
    </div>
    
    <div class="bottom">
      <a href="https://www.lingchen.kim" target="_blank">博客</a>
      <a href="https://www.lingchen.kim/detail?id=416" target="_blank">介绍</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {
      showNotice() {
        this.$notice({
          type: 'success',
          content: '成功信息提示',
          duration: 3000
        })
      },
      goHomePage() {
        this.$router.push('/')
      }
    }
  };
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  height: 100%;

  .tips {
    width: 630px;
    margin: auto;
    margin-top: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 300px;
      height: 180px;
    }

    .right-wrap {

      p {
        color: #808695;
        font-size: 20px;
        line-height: 28px;
      }

      .el-button {
        margin-top: 20px;
      }
    }
  }

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: auto;
    text-align: center;

    a {
      color: #808695;
      font-size: 15px;
      text-decoration: none;
      margin-right: 30px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
