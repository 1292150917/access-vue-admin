<template>
  <div class="line-chart chart">
    <p class="line-title">访问统计</p>
    <div id="chart"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      legend: {
        type: Object,
        default: () => {
          return {show: true}
        }
      },
      grid: {
        type: Object,
        default: () => {
          return {
            top: '8%',
            left: '19',
            right: '19',
            bottom: '22%',
            containLabel: true 
          }
        }
      }
    },
    computed: {
      ...mapState({
        setting: state => state.setting.setting
      })
    },
    watch: { 
      'setting.themeModel': {
        handler(theme) {
          // this.getTheme(theme)
        },
        immediate: true
      }
    },
    data() {
      return {
        chart: '',
        data: {},
      };
    },
    mounted() {
      this.getData()
      this.windowsResize()
    },
    beforeDestroy() {
      this.removeWindowsResize()
    },
    methods: {
      // 获取数据
      getData() {
        let d = new Date(this.date)

        this.data.xData = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

        this.data.data = [
          [393, 530, 923, 723, 792, 593, 492],
          [93, 230, 623, 423, 492, 293, 216]
        ]

        this.drawLine()
      },
      // 绘图
      drawLine() {
        let chart = this.$echarts.init(document.getElementById("chart"))
        this.chart = chart
        let _this = this

        // 绘制图表
        chart.setOption({
          color: ['#308FF0', '#74D488'],
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              let value1 = params[0].value
              let value2 = params[1].value
              return `浏览量：${value2}<br/> 访问数：${value1}`;
            },
            axisPointer: {
              animation: false
            }
          },
          legend: {
            show: false,
            icon: "circle", // 形状 circle, rect , roundRect, triangle, diamond, pin, arrow, none
            type: 'plain',
            top: '3%',
            left: 15,
            itemWidth: 16,  // 设置宽度
            itemHeight: 8,  // 设置高度
            itemGap: 13,    // 设置间距
            textStyle: {    //图例文字的样式
              color: '#999',
              fontSize: 12,
              padding: [2, 0, 0, 0]
            },
          },
          grid: this.grid,
          xAxis: {
            data: this.data.xData,
            show: true,
            position: 'bottom',  // x轴的位置
            offset: 8, // x轴相对于默认位置的偏移
            type: 'category',   // 轴类型， 默认为 'category'
            nameGap: 15, // 坐标轴名称与轴线之间的距离
            nameRotate: 0,  // 坐标轴名字旋转
            axisLabel: {//x轴文字的配置
              show: true,
              textStyle: {
                color: "#9FA2AF",
              }
            },
            axisLine: {       // 坐标轴 轴线
              show: false,
              lineStyle: {
                color: '#999',
                width: 1,
                type: 'solid'
              }
            },
            axisTick:{ //x轴刻度线
              show: false
            },
          },
          yAxis: {
            show: true,
            position: 'left', // y轴位置
            offset: 0, // y轴相对于默认位置的偏移
            type: 'value',  // 轴类型，默认为 ‘category’
            nameLocation: 'end', // 轴名称相对位置value
            nameTextStyle: {    // 坐标轴名称样式
              color: '#fff',
              padding: [5, 0, 0, 5]  // 坐标轴名称相对位置
            },
            nameGap: 15, // 坐标轴名称与轴线之间的距离
            nameRotate: 270,  // 坐标轴名字旋转
            axisLine: {    // 坐标轴 轴线
              show: false,
              lineStyle: {
                color: '#eee',
                width: 1,
                type: 'solid'
              }
            },
            splitLine: {    // gird 区域中的分割线
              show: false, 
              lineStyle: {
                color: '#eee',
                width: 1,
                type: 'solid'
              }
            },
            axisTick: {      // 坐标轴的刻度
              show: false,  
              length: 0,      // 长度
              lineStyle: {
                color: 'red',  // 默认取轴线的颜色
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {      // 坐标轴的标签
              show: true,  
              inside: false,  // 是否朝内
              rotate: 0,     // 旋转角度
              margin: 8,     // 刻度标签与轴线之间的距离
              color: '#9FA2AF',  // 默认轴线的颜色
            }
          },
          series: [
            {
              name: "浏览量",
              type: "line",
              smooth: true,
              symbol: 'circle',//拐点样式
              symbolSize: 2,   //拐点圆的大小
              itemStyle: {
                normal: {
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#308FF0"
                      },
                      {
                        offset: 1,
                        color: "#308FF0"
                      }
                    ]) //线条渐变色
                  }
                },
                emphasis: {
                  color: "#308FF0",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#308FF0"
                      },
                      {
                        offset: 1,
                        color: "#308FF0"
                      }
                    ])
                  }
                }
              }, 
              areaStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgba(45, 140, 240, 0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(45, 140, 240, 0)'
                    }
                  ])
                }
              },
              data: this.data.data[0]
            },
            {
              name: "访问数",
              type: "line",
              smooth: true,
              symbol: 'circle',//拐点样式
              symbolSize: 2,   //拐点圆的大小
              itemStyle: {
                normal: {
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#74D488"
                      },
                      {
                        offset: 1,
                        color: "#74D488"
                      }
                    ]) //线条渐变色
                  }
                },
                emphasis: {
                  color: "#74D488",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#74D488"
                      },
                      {
                        offset: 1,
                        color: "#74D488"
                      }
                    ])
                  }
                }
              }, //线条样式
              areaStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgba(119, 213, 138, 0.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(119, 213, 138, 0)'
                    }
                  ])
                }
              }, 
              data: this.data.data[1]
            }
          ]
        })
      },
      windowsResize() {
        window.addEventListener('resize', () => {
          this.chart.resize();
        })
      },
      removeWindowsResize() {
        window.removeEventListener('resize', this.windowsResize)
        this.chart.dispose()
      },
    }
  };
</script>

<style lang="scss" scoped>
  .line-chart {
    width: 40%;
    height: 100%;
    background: #101638;
    position: relative;

    #chart {
      width: 100%;
      height: 100%;
    }
  }
</style>
