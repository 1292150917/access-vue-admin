<template>
  <div class="chart">
    <p class="line-title">空间占比</p>
    <ve-ring :data="chartData" :extend="chartExtend"></ve-ring>
  </div>
</template>

<script>
  export default {
    data () {
      this.chartExtend = {
        color: ['#219AF8', '#21DE9E', '#9BB4F3'],
        legend: {
          show: false
        },
        series: {
          center: ['50%', '40%'],
          // label: {
          //   normal: {
          //     show: true,
          //     position: 'none'
          //   }
          // },
          // labelLine: {
          //   normal: {
          //       show: false
          //   }
          // }, 
        },
      }
      return {
        chartData: {
          columns: ['空间', '占比'],
          rows: [
            { '空间': 'Super', '占比': 2393 },
            { '空间': 'Simple', '占比': 2130 },
            { '空间': 'Keep', '占比': 2923 },
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart {
    width: 30%;
  }
</style>