<template>
  <div class="line-box chart">
    <div class="head">
      <p class="line-title">访问情况</p>
    </div>

    <div class="line-chart">
      <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-line>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "LineChart",
    data() {
      this.chartSettings = {
        area: true
      }
      this.chartExtend = {
        color: [
          new echarts.graphic.LinearGradient(
            0,0,0,1,[{
            offset: 0.3, color: 'rgba(45, 140, 240, 0.9)'
          },{
            offset: 1, color: 'rgba(66, 197, 246,0)'
          }]),
          new echarts.graphic.LinearGradient(
            0,0,0,1,[{
            offset: 0.3, color: 'rgba(44, 203, 152, 0.7)'
          },{
            offset: 1, color: 'rgba(44, 203, 152, 0)'
          }]),
        ],
        // ---- legend ----
        legend: {
          type: 'plain',
          bottom: '80px',
          textStyle: { //图例文字的样式
            color: '#999',
            fontSize: 12,
          },
        },
        series: {
          symbol: 'none'
        },
        grid: {
          top: '10%',
          left: '10',
          right: '5%',
          bottom: '120px',
          containLabel: true
        },
        //  ------  X轴 ------
        xAxis: {
          show: true,  // 是否显示
          position: 'bottom',  // x轴的位置
          offset: 8, // x轴相对于默认位置的偏移
          type: 'category',   // 轴类型， 默认为 'category'
          nameGap: 15, // 坐标轴名称与轴线之间的距离
          nameRotate: 0,  // 坐标轴名字旋转
          axisLabel: {//x轴文字的配置
            show: true,
            textStyle: {
              color: "#666",
            }
          },
          boundaryGap: false,
          axisLine: {       // 坐标轴 轴线
            show: false,  // 是否显示
            lineStyle: {
              color: '#EBEBEB',
              width: 1,
              type: 'solid'
            }
          }
        },
        yAxis: {
          splitLine: {    // gird 区域中的分割线
            show: false,   // 是否显示
            lineStyle: {
              color: '#666',
              width: 1,
              type: 'dashed'
            }
          }
        },
      }
      return {
        chartData: {
          columns: ['日期', '浏览量', '访问数'],
          rows: [
            { '日期': '2020-1', '浏览量': 393, '访问数': 93},
            { '日期': '2020-2', '浏览量': 530, '访问数': 230},
            { '日期': '2020-3', '浏览量': 923, '访问数': 623},
            { '日期': '2020-4', '浏览量': 723, '访问数': 423},
            { '日期': '2020-5', '浏览量': 792, '访问数': 492 },
            { '日期': '2020-6', '浏览量': 593, '访问数': 293}
          ]
        }
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
  .line-box {
    width: 40%;
    position: relative;

    .line-chart {
      height: calc(100% - 80px);
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      margin: auto;
      overflow: hidden;
    }
  }
  
  @media only screen and (max-width: $device-ipad) { 
    .line-box {
      width: 100%;
      height: 370px;

      .line-chart {
        height: calc(100% - 80px);
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: auto;
        overflow: hidden;
      }
    }
  }
</style>
