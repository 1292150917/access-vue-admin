<template>
  <div class="image-hover2">
    <ul class="content">
      <li v-for="(item, index) in 3" :key="index">
        <img src="@img/bg.jpg"/>
        <div class="model"></div>
        <h4>CSS3 HOVER</h4>
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
  .image-hover2 {
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
          width: 90%;
          height: 90%;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          background: rgba($color: #fff, $alpha: 0.6);
          transform: scale(1.5) rotate(180deg);
          transition: all .4s;
          opacity: 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
        }

        h4 {
          color: #C39C7C;
          text-align: center;
          line-height: 200px;
          font-size: 30px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          z-index: 300;
          opacity: 0;
          transition: all .5s;
          transform: scale(3.5);
        }

        &:hover .model {
          opacity: 1;
          transform: scale(1) rotate(0);
           
        }

        &:hover img {
          transform: scale(1.75) rotate(30deg);
        }

        &:hover h4 {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
</style>
