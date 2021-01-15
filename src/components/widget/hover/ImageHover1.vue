<template>
  <div class="image-hover1">
    <ul class="content">
      <li v-for="(item, index) in 3" :key="index">
        <img src="@img/bg.jpg"/>
        <div class="right-text">
          <h4>CSS3 HOVER</h4>
        </div>
        <div class="model"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ImageHover1",
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
  .image-hover1 {
    .content {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 300px;
        height: 200px;
        margin: 0 15px 15px 0;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        box-shadow: 0 0 5px #999;

        img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }

        .right-text {
          height: 50px;
          line-height: 50px;
          position: absolute;
          right: -100%;
          top: 0;
          bottom: 0;
          margin: auto;
          z-index: 200;
          transition: all .5s;

          h4 {
            color: #333;
            font-size: 20px;
          }
        }

        .model {
          width: 150%;
          height: 150%;
          position: absolute;
          left: 0;
          right: 0;
          top: -90px;
          bottom: 0;
          margin: auto;
          transform: rotate(45deg);

          &::before {
            content: '';
            width: 30%;
            height: 100%;
            background: rgba($color: #fff, $alpha: .6);
            position: absolute;
            top: 0;
            left: -50%;
            z-index: 100;
            opacity: 0;
            transition: all .4s;
          }

          &::after {
            content: '';
            width: 70%;
            height: 100%;
            background: rgba($color: #fff, $alpha: .9);
            position: absolute;
            top: 0;
            right: -50%;
            z-index: 100;
            opacity: 0;
            transition: all .4s;
          }
        }

        &:hover >div::before {
          left: 0;
          opacity: 1;
        }

        &:hover >div::after {
          right: 0;
          opacity: 1;
        }

        &:hover .right-text {
          right: 20px;
        }
      }
    }
  }
</style>
