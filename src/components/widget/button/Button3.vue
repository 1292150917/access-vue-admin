<template>
  <div class="lc-button">
    <div class="button3" v-for="item in 1" :key="item">
      <div class="move-box"></div>
      <span>Button</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Button3",
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
  $btn-height: 150px;

  .lc-button {
    display: flex;
    flex-wrap: wrap;

    .button3 {
      width: $btn-height;
      height: 45px;
      line-height: 45px;
      text-align: center;
      border: 1px solid #000;
      box-sizing: border-box;
      color: #666;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      transition: all .3s;
      -webkit-user-select: none;
      -moz-user-select: none;
      // margin: 0 20px 20px 0;
      overflow: hidden;

      .move-box {
        width: $btn-height * 2;
        height: $btn-height * 2;
        background: #000;
        transform: rotate(-45deg);
        position: absolute;
        left: -125%;
        top: 130%;
        transition: all .5s;
      }

      span {
        color: #000;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transition: all .4s;
      }

      &:hover .move-box{
        left: -20%;
        top: -$btn-height;
      }

      &:hover span {
        color: #fff;
      }
    }
  }
</style>
