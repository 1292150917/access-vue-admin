<template>
  <div class="image-hover3">
    <ul class="content">
      <li v-for="(item, index) in 3" :key="index">
        <img src="@img/bg.jpg"/>
        <div class="model">
          <div class="line left-line"></div>
          <div class="line right-line"></div>
          <div class="line top-line"></div>
          <div class="line bottom-line"></div>

          <h4>CSS3 HOVER</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ImageHover3",
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
  .image-hover3 {
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
          transition: all .5s;
        }

        .model {
          width: calc(100% - 50px);
          height: calc(100% - 50px);
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transition: all .4s;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

          .line {
            position: absolute;
            z-index: 100;
            background: #fff;
            transition: all .3s;
          }

          .left-line {
            width: 1px;
            height: 0;
            left: 0;
            top: 50%;
          }

          .right-line {
            width: 1px;
            height: 0;
            right: 0;
            top: 50%;
          }

          .top-line {
            width: 0%;
            height: 1px;
            left: 50%;
            top: 0;
          }

          .bottom-line {
            width: 0%;
            height: 1px;
            left: 50%;
            bottom: 0;
          }
        }

        &:hover .model .left-line,
        &:hover .model .right-line {
          top: 0;
          height: 100%;
        }

        &:hover .model .top-line,
        &:hover .model .bottom-line {
          left: 0;
          width: 100%;
        }

        &:hover .model {
          opacity: 1;
          transform: scale(1) rotate(0);
        }

        h4 {
          color: #fff;
          text-align: center;
          font-size: 30px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 30%;
          margin: auto;
          z-index: 300;
          opacity: 0;
          transition: all .3s;
        }

        &:hover h4 {
          opacity: 1;
          bottom: 50%;
          transform: translateY(50%);
        }
      }
    }
  }
</style>
