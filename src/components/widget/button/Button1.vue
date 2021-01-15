<template>
  <div class="lc-button" >
    <div class="lc-btn1" v-for="item in 3" :key="item">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="btn">
         Button
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Button1",
    data() {
      return {
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
  .lc-button {
    display: flex;
    flex-wrap: wrap;

    .lc-btn1 {
      width: 150px;
      height: 45px;
      line-height: 45px;
      
      color: #fff;
      font-size: 14px;
      position: relative;
      z-index: 100;
      text-align: center;
      cursor: pointer;
      transition: all .3s;
      -webkit-user-select: none;
      -moz-user-select: none;
      margin: 0 20px 20px 0;

      .btn {
        width: 100%;
        height: 100%;
        background: #000;
      }

      .line {
        width: 100%;
        height: 100%;
        border: 1px solid #333;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        box-sizing: border-box;
        transition: all .3s;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }

      &:hover {
        transform: scale(.95);
      }

      &:active {
        transform: scale(0.9);
      }

      &:hover .line1 {
        top: 4px;
        left: 4px;
      }

      &:hover .line2 {
        top: 8px;
        left: 8px;
      }
    }
  }
</style>
