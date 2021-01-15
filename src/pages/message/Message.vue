<template>
  <div class="page-content">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="搜索标题或者发送人"></el-input>
      </el-col>
      <el-button>搜索</el-button>
    </el-row>

    <tao-table style="margin-top: 15px">
      <el-table-column prop="default" label="标题" show-overflow-tooltip />
      <el-table-column prop="default" label="内容" show-overflow-tooltip />
      <el-table-column prop="default" label="发送人" show-overflow-tooltip />
      <el-table-column prop="default" label="时间" show-overflow-tooltip />
      <el-table-column fixed="right" label="操作" width="130px">
        <template>
          <el-button type="text" icon="el-icon-edit">
            编辑
          </el-button>
          <el-button type="text" icon="el-icon-delete" class="el-btn-red">
            删除
          </el-button>
        </template>
      </el-table-column>
    </tao-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    mounted() {

    },
    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
  .page-content {
    .head {
      overflow: hidden;
      transition: height .3s;
    }
  }
</style>