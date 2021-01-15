<template>
  <div class='page-content'>
    <table-bar :showTop="false">
      <div slot="top">
        <el-form label-width="70px">
          <el-row :gutter="20">
            <el-col :span="4">
              <el-form-item label="名称：">
                <el-input placeholder="名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="连接地址：">
                <el-input placeholder="连接地址"></el-input>
              </el-form-item>
            </el-col>
            
            <el-row :span="4" style="float: right; margin-right: 10px;">
              <el-button type="primary">搜索</el-button>
              <el-button>重置</el-button>
            </el-row>
          </el-row>
        </el-form>
      </div>
      <div slot="bottom">
        <el-button type="primary" plain @click="showDialog('add')">新增</el-button>
      </div>
    </table-bar>
    
    <tao-table :data="serverList" :showPage="false">
      <el-table-column label="名称" prop="name"/>
      <el-table-column label="地址" prop="ip"/>
      <el-table-column label="用户名" prop="username"/>
      <el-table-column label="状态" prop="status">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status === 1 ? 'success' : 'info'">
            {{scope.row.status === 1 ? '启用' : '禁用'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建日期" prop="create_time"/>
      <el-table-column fixed="right" label="操作" width="150px">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="showDialog('edit')">
            编辑
          </el-button>
          <el-button type="text" style="color: #FA6962" icon="el-icon-delete" @click="deleteUser(scope)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </tao-table>

    <el-dialog :title="dialogTitle" width="500px" :visible.sync="dvEdit" top="30vh">
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="名称">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.mibile"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dvEdit = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dvEdit: false,
        dialogTitle: '',
        form: {
          username: '',
          mibile: '',
          email: '',
          sex: 1,
          dep: '',
          status: true
        },
        value: '',
        serverList: [
          {
            name: 'blog',
            ip: '43.133.133.133',
            username: 'SuperMan',
            account: 'root',
            status: 1,
            create_time: '2021-1-5'
          }
        ]
      };
    },
    mounted() {
      
    },
    methods: {
      showDialog(type) {
        this.dvEdit = true
        this.dialogTitle = type === 'add' ? '新增' : '编辑'
      },
      onSubmit() {
        this.dvEdit = false
      },
      deleteUser(scope) {
        this.$confirm('您确定要删除当前服务器吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.serverList.splice(scope.$index, 1)
        }).catch(() => {})
      }
    },
  }
</script>

<style lang='scss' scoped>
  .page-content {
    width: 100%;
    height: 100%;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
</style>