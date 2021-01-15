<template>
  <div class='page-content'>
    <el-row :gutter="20" style="padding: 0 10px">
      <el-button type="primary" style="width: 75px">新建</el-button>
    </el-row>
    <tao-table :data="tableData" :showPage="false" style="margin-top: 15px">
      <el-table-column label="计划事项" prop="title"/>
      <el-table-column label="进度">
        <template slot-scope="scope">
          {{scope.row.percentage}}%
        </template>
      </el-table-column>
      <el-table-column prop="startDate" label="开始时间"/>
      <el-table-column prop="endDate" label="结束时间"/>
    </tao-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [
          {
            title: '学习英语',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 0,
            color: '#19BE6B'
          },
          {
            title: '学习Flutter',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 100,
            color: '#2D8CF0'
          },
          {
            title: '六块腹肌',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 20,
            color: '#E6A23C'
          },
          {
            title: '网站重构',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 100,
            color: '#F06B7C'
          },
          {
            title: 'Golang',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 100,
            color: '#B7CBE2'
          },
          {
            title: 'TypeScript',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 60,
            color: '#909399'
          },
          {
            title: 'HTTP',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 60,
            color: '#9BB4F3'
          },
          {
            title: '设计模式',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 20,
            color: '#F2B985'
          },
          {
            title: '算法',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 0,
            color: '#F5B7CE'
          },
          {
            title: 'Node.js',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 0,
            color: '#7CC6DD'
          },
          {
            title: 'Vue深入学习',
            startDate: '2020-1-1',
            endDate: '2020-12-31',
            percentage: 46,
            color: '#FF9C80'
          },
        ],
      };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  }
</script>

<style lang='scss' scoped>
  .page-content {
    width: 100%;
    height: 100%;
  }
</style>