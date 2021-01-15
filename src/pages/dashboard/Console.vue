<template>
  <div class="task console">
    <console-card/>

    <div class="row row1">
      <histogram/>
      <plan-progress/>
    </div>

    <div class="row row2">
      <line-chart/>
      
      <round-progress 
        color="#6EB2F4" 
        iconBg="#CAE2FA" 
        title="代办事项" 
        title2="本月待办事项：20" 
        styles="flex: 1"
      />
      <pie-chart/>
    </div>
  </div>
</template>

<script>
  import Histogram from "@/components/dashboard/Histogram"
  import RoundProgress from "@/components/dashboard/RoundProgress"
  import PlanProgress from "@/components/dashboard/PlanProgress"
  import PieChart from "@/components/dashboard/PieChart"
  import ConsoleCard from "@/components/dashboard/ConsoleCard"
  import LineChart from "@/components/charts/LineChart"

  export default {
    components: { 
      RoundProgress,
      PlanProgress,
      Histogram,
      PieChart,
      ConsoleCard,
      LineChart
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .console {
    height: 100%;

    &::-webkit-scrollbar {
      width: 0px !important;
    }

    >>> .line-title {
      color: #555;
      font-size: 15px;
      font-weight: bold;
      padding: 0 13px;
      margin: 20px 0;
      border-left: 4px solid $theme-color;
    }
    
    >>> .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 20px;
    }

    .row {
      display: flex;
      margin-top: 15px;
      background: transparent !important;

      > div {
        margin-right: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(28,76,186,.08);
        transition: box-shadow .3s;

        &:hover {
          box-shadow: 0 5px 10px rgba(28,76,186,.12);
        }

        &:last-of-type {
          margin-right: 0 !important;
        }
      }
    }

    .row1, .row2 {
      height: 410px;
    }
  }

  @media only screen and (max-width: $device-ipad) { 
    .console {

      .row {
        display: block;
        height: auto !important;
      }

      .row1 {
        margin-top: 0;
      }
    }
  }
</style>
