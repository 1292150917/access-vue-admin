<template>
  <div class='page-content'>
    <table-bar :showTop="false">
      <div slot="top">
        <el-form label-width="70px">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="用户名：">
                <el-input placeholder="用户名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="手机号：">
                <el-input placeholder="手机号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="邮箱：">
                <el-input placeholder="邮箱"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="账号：">
                <el-input placeholder="账号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="用户ID：">
                <el-input placeholder="用户ID"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="性别：">
                <el-select v-model="value" clearable placeholder="请选择" style="width: 100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="用户ID：">
                <el-input placeholder="用户ID"></el-input>
              </el-form-item>
            </el-col>
            
            <el-row :span="6" style="float: right; margin-right: 10px;">
              <el-button type="primary">搜索</el-button>
              <el-button>重置</el-button>
            </el-row>
          </el-row>
        </el-form>
      </div>
      <div slot="bottom">
        <el-button type="primary" plain @click="showDialog('add')">新增用户</el-button>
      </div>
    </table-bar>
    
    <tao-table :data="userList" v-table-drag>
      <el-table-column label="头像" prop="avatar">
        <template slot-scope="scope">
          <img class="avatar" :src="scope.row.avatar"/>
        </template>
      </el-table-column>
      <el-table-column label="用户名" prop="username"/>
      <el-table-column label="手机号" prop="mobile"/>
      <el-table-column label="邮箱" prop="email"/>
      <el-table-column label="性别" prop="sex">
        <template slot-scope="scope">
          {{scope.row.sex === 1 ? '男' : '女'}}
        </template>
      </el-table-column>
      <el-table-column label="部门" prop="dep"/>
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
            注销
          </el-button>
        </template>
      </el-table-column>
    </tao-table>

    <el-dialog :title="dialogTitle" width="500px" :visible.sync="dvEdit">
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.mibile"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="form.dep" placeholder="请选择部门">
            <el-option label="人事部" value="shanghai"></el-option>
            <el-option label="开发部" value="beijing"></el-option>
            <el-option label="测试部" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status"></el-switch>
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
        options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
        value: '',
        userList: [
          {
            username: '中小鱼',
            sex: 0,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar1.jpg')
          },{
            username: '何小荷',
            sex: 1,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar2.jpg')
          },{
            username: '誶誶淰',
            sex: 0,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 0,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar3.jpg')
          },{
            username: '发呆草',
            sex: 0,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar4.jpg')
          },{
            username: '甜筒',
            sex: 1,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 0,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar5.jpg')
          },{
            username: '冷月呆呆',
            sex: 1,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar6.jpg')
          },{
            username: '唐不苦',
            sex: 1,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar7.jpg')
          },{
            username: '笑很甜',
            sex: 0,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar8.jpg')
          },{
            username: '青隐篱',
            sex: 0,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar9.jpg')
          },{
            username: '有你一生',
            sex: 0,
            mobile: '18123820191',
            email: 'lingchen@qq.com',
            dep: '开发部',
            status: 1,
            create_time: '2020-11-14',
            avatar: require('@img/avatar/avatar10.jpg')
          },
        ]
      };
    },
    mounted() {
      
    },
    methods: {
      showDialog(type) {
        this.dvEdit = true
        this.dialogTitle = type === 'add' ? '新增用户' : '编辑用户'
      },
      onSubmit() {
        this.dvEdit = false
      },
      deleteUser(scope) {
        this.$confirm('您确定要注销当前用户吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.userList.splice(scope.$index, 1)
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