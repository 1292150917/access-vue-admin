<template>
  <div class="page-content">
    <el-row>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="showModel('menu')"
        v-allow="'menu/add'"
      >
        新建
      </el-button>
    </el-row>

    <div class="table">
      <el-table
        lazy
        :data="tableData"
        style="width: 100%"
        row-key="id"
        size="medium"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        :header-cell-style="{ color: '#666' }"
      >
        <el-table-column prop="title" label="菜单名称" />
        <el-table-column prop="power" label="权限标识" />
        <el-table-column prop="path" label="路由" />
        <el-table-column prop="permission" label="可操作权限">
          <template slot-scope="scope">
            <el-popover
              width="160"
              placement="top"
              :ref="scope.row.id"
              v-for="(item, index) in scope.row.permission"
              :key="index"
            >
              <p style="font-weight: bold">操作</p>
              <div style="text-align: right; margin-top: 15px">
                <el-button
                  type="primary"
                  size="mini"
                  icon="el-icon-edit"
                  @click="showModel('button')"
                  >编辑</el-button
                >
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                  @click="deleteMenu(item)"
                  >删除</el-button
                >
              </div>

              <el-button
                size="mini"
                slot="reference"
                style="margin: 0 8px 6px 0"
              >
                <!-- <i class="iconfont" v-html="item.icon" style="font-size: 10px"></i> -->
                {{ item.title }}
              </el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="排序" width="100" />
        <el-table-column prop="date" label="创建日期" />

        <el-table-column fixed="right" label="操作" width="150px">
          <template>
            <el-button
              type="text"
              icon="el-icon-edit"
              v-allow="'menu/edit'"
              @click="showModel('menu')"
            >
              编辑
            </el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="el-btn-red"
              v-allow="'menu/delete'"
              @click="deleteMenu()"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="新建菜单" :visible.sync="dialogVisible" width="700px">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="85px"
      >
        <el-form-item label="菜单类型">
          <el-radio-group v-model="labelPosition">
            <el-radio-button label="menu">菜单</el-radio-button>
            <el-radio-button label="button">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <template v-if="labelPosition === 'menu'">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="菜单名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="路由地址" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="权限标识" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="图标" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="菜单排序" prop="name" style="width: 100%">
                <el-input-number
                  v-model="ruleForm.num"
                  style="width: 100%"
                  @change="handleChange"
                  :min="1"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="5">
              <el-form-item label="菜单" prop="delivery">
                <el-switch v-model="ruleForm.menu"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="页面缓存" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="菜单可见" prop="delivery">
                <el-switch v-model="ruleForm.menu"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
        </template>

        <template v-if="labelPosition === 'button'">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="按钮名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="权限标识" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="图标" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="按钮排序" prop="name" style="width: 100%">
                <el-input-number
                  v-model="ruleForm.num"
                  style="width: 100%"
                  @change="handleChange"
                  :min="1"
                  controls-position="right"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      labelPosition: "menu",
      ruleForm: {
        name: "",
        delivery: false,
        menu: "",
        num: 1,
      },
      rules: {
        name: [
          // { required: true, message: '请输入活动名称', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
    };
  },
  mounted() {
    let { menuList } = this.$store.state.menu;
    var index = 0;
    menuList.map((s, i) => {
      s.id = s.id || index;
      index++;
      s.children &&
        s.children.map((v, _i) => {
          v.id = v.id || index;
          index++;
        });
    });
    this.tableData = menuList;
  },
  methods: {
    handleChange() {},
    showModel(type) {
      this.dialogVisible = true;
      this.labelPosition = type;
    },
    // 删除菜单
    deleteMenu(item) {
      this.$confirm(`确定要删除吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
      })
        .then(() => {})
        .catch(() => {});
    },
    // 删除可操作权限
    deleteAllow(item) {
      this.$confirm(`确定要删除 ${item.name} ？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
      })
        .then(() => {})
        .catch(() => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  height: 100%;

  .table {
    margin-top: 15px;
  }
}
</style>