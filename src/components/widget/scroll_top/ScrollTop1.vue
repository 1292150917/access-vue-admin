<template>
  <div class="scroll-top">
  </div>
</template>

<script>
  export default {
    name: "ScrollTop1",
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
  $arrow-color: #fff;

  .scroll-top {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(0, 0, 0, .2);
    transition: all .3s;

    &::before {
      content: '';
      width: 10px;
      height: 2px;
      background: $arrow-color;
      position: absolute;
      left: 16px;
      top: 0;
      bottom: 0;
      margin: auto;
      transform: rotate(-0deg);
      transition: all .3s;
      border-radius: 2px;
    }

    &::after {
      content: '';
      width: 10px;
      height: 2px;
      background: $arrow-color;
      position: absolute;
      right: 16px;
      top: 0;
      bottom: 0;
      margin: auto;
      transform: rotate(0deg);
      transition: all .3s;
      border-radius: 2px;
    }

    &:hover {
      background: rgba(0, 0, 0, .5);
    }

    &:hover::before {
      transform: rotate(-40deg);
      left: 12px;
      width: 15px;
    }

    &:hover::after {
      transform: rotate(40deg);
      right: 12px;
      width: 15px;
    }

    &:active {
      transform: scale(0.9);
    }
  }
</style>
