<template>
  <div class="pro chart">
    <p class="line-title">计划</p>
    <div class="table-box">
      <tao-table ref="tables" :data="tableData" :showPage="false" height="100%" :hideScrollBar="true">
        <el-table-column prop="title" label="计划事项" />
        <el-table-column label="进度" width="200px" >
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.pro" :color="scope.row.color"/>
          </template>
        </el-table-column>
        <el-table-column width="100px"/>
        <el-table-column prop="startDate" label="开始时间"  />
        <el-table-column prop="endDate" label="结束时间"  />
      </tao-table>
    </div>
  </div>
   
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            title: '学习英语',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 10,
            color: '#19BE6B !important'
          },
          {
            title: '学习Flutter',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 100,
            color: '#64B6F5 !important'
          },
          {
            title: '六块腹肌',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 10,
            color: '#E6A23C !important'
          },
          {
            title: '网站重构',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 100,
            color: '#FF9C80 !important'
          },
          {
            title: 'Golang',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 100,
            color: '#B7CBE2 !important'
          },
          {
            title: 'TypeScript',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 70,
            color: '#909399 !important'
          },
          {
            title: 'HTTP',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 10,
            color: '#9BB4F3 !important'
          },
          {
            title: '设计模式',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 30,
            color: '#F2B985 !important'
          },
          {
            title: '算法',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 5,
            color: '#F5B7CE !important'
          },
          {
            title: 'Node.js',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 10,
            color: '#7CC6DD !important'
          },
          {
            title: 'Vue深入学习',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 30,
            color: '#F06B7C !important'
          },
        ],
      }
    },
    mounted() {
      this.addAnimation()
    },
    methods: {
      addAnimation() {
        setTimeout(() => {
          let { tableData } = this
          for(let i=0; i<tableData.length; i++) {
            let item = tableData[i]

            this.$set(this.tableData[i], 'pro', item.percentage)
          }
        }, 1)
      }
    }
  }
</script>

<style lang="scss">
  // 进度动画
  .el-progress-bar__inner {
    transition: all 1s !important;
  }
</style>

<style lang="scss" scoped>
  .pro {
    flex: 1;
    padding-bottom: 30px; 

    .table-box {
      padding: 0 8px;
      margin-top: -10px;
      height: calc(100% - 30px);
    }
  }

  /deep/ .el-table .cell {
    font-size: 13px;
  }

  @media only screen and (max-width: $device-ipad) { 
    .pro {
      width: 100% !important;
      margin-top: 15px;
      padding-bottom: 30px; 
    }
  }
</style>