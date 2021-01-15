<template>
  <div class="card">
    <ul>
      <li v-for="(item, index) in dataList" :key="index" :style="dataListStyle">
        <svg class="svg-icon " aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span class="des">{{item.des}}</span>
        <count-to 
          class="number" 
          :startVal='item.startVal' 
          :endVal='item.endVal' 
          :duration='1500' 
          separator=''
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'
  export default {
    name: "ConsoleCard",
    components: {
      countTo
    },
    data() {
      return {
        startVal: 0,
        dataList: [
          {
            des: '总访问次数',
            icon: '#iconfabujishu',
            startVal: 0,
            duration: 1000,
            endVal: 9520,
            width: 24,
            height: 26,
          },
          {
            des: '在线访客数',
            icon: '#iconzhibiao',
            startVal: 0,
            duration: 1000,
            endVal: 182,
            width: 24,
            height: 25
          },
          {
            des: '文章数',
            icon: '#iconbianji',
            startVal: 0,
            duration: 1000,
            endVal: 156,
            width: 24,
            height: 25,
          },
          {
            des: '留言数',
            icon: '#iconsheet_',
            startVal: 0,
            duration: 1000,
            endVal: 1024,
            width: 24,
            height: 24
          },
          {
            des: '待办任务',
            icon: '#iconrenwu',
            startVal: 0,
            duration: 1000,
            endVal: 12,
            width: 27,
            height: 25
          }
        ],
        endVal: 2020,
        duration: 1000,
        dataListStyle: {},
      };
    },
    mounted() {
      this.computedItemWidth()
    },
    methods: {
      computedItemWidth() {
        let count = this.dataList;
        let width = 100 / count;

        this.dataListStyle = {
          width: `calc(${width}% - 20px)`
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .card {
    overflow: hidden;
    background: transparent !important;

    ul {
      width: calc(100% + 15px);
      margin-left: -15px;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      background: transparent !important;

      li {
        width: calc(20% - 15px);
        height: 125px;
        line-height: 125px;
        text-align: center;
        margin: 0 0 0 15px;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        position: relative;
        border-radius: 8px;
        box-shadow: 0 0px 7px rgba(28,76,186,.08);
        transition: box-shadow .3s;

        &:hover {
          box-shadow: 0 5px 20px rgba(28,76,186,.12);
        }

        .svg-icon {
          width: 3em;
          height: 3em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          -moz-transform: translate(0, -50%);
          -webkit-transform: translate(0, -50%);
          bottom: 0;
          left: 10%;
        }

        .number {
          color: #515a6e;
          font-size: 26px;
          line-height: 26px;
          margin: 0;
          position: absolute;
          bottom: 50%;
          right: 10%;
        }

        .des {
          color: #999999;
          font-size: 12px;
          line-height: 14px;
          height: 14px;

          position: absolute;
          bottom: 30%;
          right: 10%;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
        }

      }
    }
  }

  @media only screen and (max-width: $device-notebook)  {
    .card {
      padding-top: 0 !important;

      .iconfont {
        left: 15px !important;
      }

      .number, .des {
        right: 15px !important;
      }
    }
  }

  @media only screen and (max-width: $device-ipad) { 
    .card {

      ul {
        width: calc(100% + 15px);
        margin-left: -15px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;

        li {
          width: calc(33.333% - 15px);
          height: 120px;
          line-height: 120px;
          margin-bottom: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: $device-phone) { 
    .card {

      ul {
        width: calc(100% + 15px);
        margin-left: -15px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;

        li {
          width: 100%;
          height: 100px;
          line-height: 100px;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
