<template>
  <div class="line-chart">
    <div id="chart" :style="{ width, height }"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    styles: Object,
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    bottomTitle: String,
    legend: {
      type: Object,
      default: () => {
        return { show: true };
      },
    },
    grid: {
      type: Object,
      default: () => {
        return {
          top: "15%",
          left: "19",
          right: "19",
          bottom: "15%",
          containLabel: true,
        };
      },
    },
  },
  data() {
    return {
      chart: "",
      date: "",
      data: {
        xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        data: {
          enter: [20, 30, 20, 28, 25, 30, 33],
        },
      },
    };
  },
  mounted() {
    this.windowsResize();
    this.drawLine();
  },
  beforeDestroy() {
    this.removeWindowsResize();
  },
  methods: {
    drawLine() {
      let chart = this.$echarts.init(document.getElementById("chart"));
      this.chart = chart;
      let _this = this;

      // 绘制图表
      chart.setOption({
        color: ["#40CA5A", "#00A0E9"],
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: this.legend.show,
          icon: "circle", // 形状 circle, rect , roundRect, triangle, diamond, pin, arrow, none
          type: "plain",
          top: "3%",
          left: 15,
          itemWidth: 16, // 设置宽度
          itemHeight: 8, // 设置高度
          itemGap: 13, // 设置间距
          textStyle: {
            //图例文字的样式
            color: "#999",
            fontSize: 12,
            padding: [2, 0, 0, 0],
          },
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "30px",
          containLabel: true,
        },
        xAxis: {
          data: this.data.xData,
          show: true, // 是否显示
          position: "bottom", // x轴的位置
          offset: 8, // x轴相对于默认位置的偏移
          type: "category", // 轴类型， 默认为 'category'
          nameGap: 15, // 坐标轴名称与轴线之间的距离
          nameRotate: 0, // 坐标轴名字旋转
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: "#9FA2AF",
            },
          },
          axisLine: {
            // 坐标轴 轴线
            show: false, // 是否显示
            lineStyle: {
              color: "#3A3F5B",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            //x轴刻度线
            show: false,
          },
        },
        yAxis: {
          show: false, // 是否显示
          position: "left", // y轴位置
          offset: 0, // y轴相对于默认位置的偏移
          type: "value", // 轴类型，默认为 ‘category’
          nameLocation: "end", // 轴名称相对位置value
          nameTextStyle: {
            // 坐标轴名称样式
            color: "#fff",
            padding: [5, 0, 0, 5], // 坐标轴名称相对位置
          },
          nameGap: 15, // 坐标轴名称与轴线之间的距离
          nameRotate: 0, // 坐标轴名字旋转
          axisLine: {
            // 坐标轴 轴线
            show: false, // 是否显示
            // ----- 线 -------
            lineStyle: {
              color: "#666",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            // 坐标轴的刻度
            show: false, // 是否显示
            length: 0, // 长度
            lineStyle: {
              color: "red", // 默认取轴线的颜色
              width: 1,
              type: "solid",
            },
          },
          axisLabel: {
            // 坐标轴的标签
            show: true, // 是否显示
            inside: false, // 是否朝内
            rotate: 0, // 旋转角度
            margin: 8, // 刻度标签与轴线之间的距离
            color: "#1F4E93", // 默认轴线的颜色
          },
          splitLine: {
            // gird 区域中的分割线
            show: false, // 是否显示
            lineStyle: {
              color: "#142958",
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            smooth: true,
            symbolSize: 7,
            data: this.data.data.enter,
            lineStyle: {},
            itemStyle: {
              normal: {
                color: "rgba(179,127,235,0.5)",
                lineStyle: {
                  color: "#7b7878",
                  width: 1,
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#09b0f5",
                  },
                  {
                    offset: 1,
                    color: "rgba(45,140,240,.5)",
                  },
                ]),
              },
            },
          },
        ],
      });
    },
    windowsResize() {
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    },
    removeWindowsResize() {
      window.removeEventListener("resize", this.windowsResize);
      this.chart.dispose();
    },
  },
};
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 100%;
  background: #101638;
  position: relative;
  overflow: hidden;
}
</style>
