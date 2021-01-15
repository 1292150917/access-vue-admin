<template>
  <div class="lc-button">
    <div class="button2" v-for="item in 3" :key="item">
      <div class="line left-line"></div>
      <div class="line top-line"></div>
      <div class="line right-line"></div>
      <div class="line bottom-line"></div>
      Button
    </div>
  </div>
</template>

<script>
  export default {
    name: "Button2",
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
  $line-move-width: 2px;
  $line-move-color: #1D1D1D;

  .lc-button {
    display: flex;
    flex-wrap: wrap;

    .button2 {
      width: 150px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      border: $line-move-width solid #8B8B8B;
      box-sizing: border-box;
      color: #666;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      transition: all .3s;
      -webkit-user-select: none;
      -moz-user-select: none;
      margin: 0 20px 20px 0;

      .line {
        position: absolute;
        background: $line-move-color;
        transition: all .3s;
      }

      .top-line {
        width: 0;
        height: $line-move-width;
        top: -$line-move-width;
        right: -$line-move-width;
      }

      .bottom-line {
        width: 0;
        height: $line-move-width;
        bottom: -$line-move-width;
        left: -$line-move-width;
      }

      .left-line {
        width: $line-move-width;
        height: 0;
        left: -$line-move-width;
        top: -$line-move-width;
        transition: all .2s;
        transition-delay: .3s;
      }

      .right-line {
        width: $line-move-width;
        height: 0;
        right: -$line-move-width;
        bottom: -$line-move-width;
        transition: all .2s;
        transition-delay: .3s;
      }

      &:hover .top-line,
      &:hover .bottom-line {
        width: calc(100% + 4px);
      }

      &:hover .left-line,
      &:hover .right-line {
        height: calc(100% + 4px);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
