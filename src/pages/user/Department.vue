<template>
  <div class='page-content'>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="名称"></el-input>
      </el-col>
      <el-button>搜索</el-button>
      <el-button @click="showDialog('add')">新增部门</el-button>
    </el-row>

    <el-row style="margin-top: 15px"> 
      <tao-table
        :data="tableData"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        size="mediul"
      >
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="sort" label="排序" sortable></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status === 1 ? 'success' : 'info'">
              {{scope.row.status === 1 ? '启用' : '禁用'}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150px">
          <template>
            <el-button type="text" icon="el-icon-edit" @click="showDialog('edit')">
              编辑
            </el-button>
            <el-button type="text" style="color: #FA6962" icon="el-icon-delete" >
              删除
            </el-button>
          </template>
        </el-table-column>
      </tao-table>
    </el-row>

    <el-dialog :title="dialogTitle" width="500px" :visible.sync="dvEdit" @closed="closeDialog" top="25vh">
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="上级部门">
          <el-input v-model="form.department"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="form.sort" controls-position="right" :min="1"></el-input-number>
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
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        form: {
          name: '',
          sort: '',
          department:"",
          status: true
        },
        tableData: [
          {
            id: 1,
            date: '2016-05-02',
            name: '人力资源部',
            status: 1,
            sort: 1,
          }, {
            id: 2,
            date: '2016-05-04',
            name: '公关部',
            status: 1,
            sort: 2,
          }, {
            id: 3,
            date: '2016-05-01',
            name: '市场部',
            status: 1,
            sort: 3,
            children: [{
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                status: 1,
                sort: 1,
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                status: 0,
                sort: 2,
            }]
          }, {
            id: 4,
            date: '2016-05-03',
            name: '财务部',
            status: 1,
            sort: 4
          }, {
            id: 5,
            date: '2016-05-03',
            name: '广告部',
            status: 1,
            sort: 5
          }, {
            id: 6,
            date: '2016-05-03',
            name: '营销部',
            status: 1,
            sort: 5
          }, {
            id: 7,
            date: '2016-05-03',
            name: '开发部',
            status: 1,
            sort: 5
          }, {
            id: 8,
            date: '2016-05-03',
            name: '测试部',
            status: 1,
            sort: 5
          }, {
            id: 9,
            date: '2016-05-03',
            name: '安全监察部',
            status: 0,
            sort: 5
          }, {
            id: 10,
            date: '2016-05-03',
            name: '设计部',
            status: 1,
            sort: 5
          }, {
            id: 11,
            date: '2016-05-03',
            name: '监事会',
            status: 1,
            sort: 5
          }, {
            id: 12,
            date: '2016-05-03',
            name: '董事会',
            status: 1,
            sort: 5
          }
        ],
      };
    },
    mounted() {
      
    },
    methods: {
      showDialog(type) {
        this.dvEdit = true
        this.dialogTitle = type === 'add' ? '新增部门' : '编辑部门'
      },
      onSubmit() {
        this.dvEdit = false
      },
      deleteUser(scope) {
        this.$confirm('您确定要删除当前部门吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.userList.splice(scope.$index, 1)
        }).catch(() => {})
      },
      handleCheckChange(data, checked, indeterminate) {
        // console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        // console.log(data);
      },
      closeDialog() {
        this.form = {
          name: '',
          sort: '',
          status: true
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "@css/tree.scss";

  .page-content {
    width: 100%;
    height: 100%;

    .department {
      display: flex;

      .left-wrap {
        width: 300px;

        .line {
          margin: 15px 0;
        }
      }

      .right-wrap {
        flex: 1;
      }
    }
  }
</style>