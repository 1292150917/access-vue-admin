<template>
  <div class='page-content'>
    <div class="header">
      <h3>网站设置</h3>
    </div>

    <el-form label-width="95px" style="margin-top: 20px">
      <el-form-item label="网站名称：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="网站域名：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="缓存时间：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="图片大小：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="图片格式：">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label=".jpg"></el-checkbox>
          <el-checkbox label=".png"></el-checkbox>
          <el-checkbox label=".jpeg"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="视频格式：">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label=".mp4"></el-checkbox>
          <el-checkbox label=".rm"></el-checkbox>
          <el-checkbox label=".rmvb"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="附件格式：">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label=".doc"></el-checkbox>
          <el-checkbox label=".docx"></el-checkbox>
          <el-checkbox label=".xls"></el-checkbox>
          <el-checkbox label=".xlsx"></el-checkbox>
          <el-checkbox label=".pdf"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 90px">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          username: '',
          mibile: '',
          email: '',
          sex: 1,
          dep: '',
          status: true
        },
        checkList: []
      };
    },
    mounted() {},
    methods: {},
  }
</script>

<style lang='scss' scoped>
  .page-content {
    width: 100%;
    height: 100%;

    .header {
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;

      h3 {
        font-size: 17px;
        font-weight: 500;
      }
    }

    /deep/ .el-form {
      .el-form-item {
        max-width: 700px;
      }
    }
  }
</style>