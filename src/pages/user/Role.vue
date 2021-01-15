<template>
  <div class='page-content'>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="用户名或昵称"></el-input>
      </el-col>
      <el-button>搜索</el-button>
      <el-button @click="showDialog('add')">新增角色</el-button>
    </el-row>

    <tao-table style="margin-top: 15px" :data="roleList">
      <el-table-column label="角色名称" prop="name"/>
      <el-table-column label="拥有权限" prop="allow"/>
      <el-table-column label="描述" prop="des"/>
      <el-table-column label="创建时间" prop="date"/>
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

    <el-dialog :title="dialogTitle" width="500px" :visible.sync="dvEdit">
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="描述：" prop="desc">
          <el-input
            type="textarea"
            :rows="3"
            v-model="form.desc"
          />
        </el-form-item>
        <el-form-item label="权限：">
          <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
          </el-tree>
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
          desc: '',
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        roleList: [
          {
            name: '超级管理员',
            allow: '全部权限',
            des: '拥有系统全部权限',
            date: '2021-01-08'
          },
          {
            name: '董事会部',
            allow: '自定义',
            des: '负责董事会部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '监事会部',
            allow: '自定义',
            des: '负责监事会部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '市场部',
            allow: '自定义',
            des: '负责市场部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '人力资源部',
            allow: '自定义',
            des: '负责人力资源部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '财务部',
            allow: '自定义',
            des: '负责财务部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '公关部',
            allow: '自定义',
            des: '负责公关部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '广告部',
            allow: '自定义',
            des: '负责广告部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '营销',
            allow: '自定义',
            des: '负责营销相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '设计部',
            allow: '自定义',
            des: '负责设计部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '开发部',
            allow: '自定义',
            des: '负责开发部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '测试部',
            allow: '自定义',
            des: '负责测试部相关工作的管理者',
            date: '2021-01-08'
          },
          {
            name: '安保部',
            allow: '自定义',
            des: '负责安保部相关工作的管理者',
            date: '2021-01-08'
          },
          
        ]
      };
    },
    mounted() {
      
    },
    methods: {
      showDialog(type) {
        this.dvEdit = true
        this.dialogTitle = type === 'add' ? '新增角色' : '编辑角色'
      },
      onSubmit() {
        this.dvEdit = false
      },
      handleCheckChange(data, checked, indeterminate) {
        // console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        // console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([
            { name: '监控中心' },
            { name: '文章管理' },
            { name: '用户管理' },
            { name: '菜单管理' },
            { name: '个性设置' },
            { name: '异常管理' },
            { name: '系统设置' },
          ]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
      deleteUser(scope) {
        this.$confirm('您确定要删除当前用户吗', '提示', {
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
  }
</style>