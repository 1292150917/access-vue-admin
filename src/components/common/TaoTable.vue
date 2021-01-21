<template>
  <div class="tao-table" :class="{'hide-scroll-bar': hideScrollBar}">
    <el-table ref="table"
      row-key="id"
      :data="data || tableData"
      :height="height"
      :row-class-name="tableRowClassName"
      :header-cell-style="{ background: '#F8F8F9', color: '#666' }"
      :fit="true"
      :size="size"
      :style="{ marginBottom: Bottom + 'px' }"
      style="width: 100%; font-size: 14px"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column label="序号" v-if="isOrder" align="center">
        <template slot-scope="scope">
          <span>
            {{scope.$index + (pageData.current_page - 1) * pageData.per_page + 1 }}
          </span>
        </template>
      </el-table-column>

      <!-- 插槽 -->
      <slot></slot>

      <!-- 筛选 -->
      <el-table-column
        v-if="status"
        :prop="statusProp"
        :label="statusTitle"
        :width="isStatus ? '90' : ''"
        :filters="[
          { text: '已启用', value: 1 },
          { text: '已禁用', value: 0 },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            size="mini"
            effect="light"
            :type="scope.row[statusProp] === 1 ? 'success' : 'info'"
            disable-transitions
          >
            {{ scope.row[statusProp] === 1 ? "已启用" : "已禁用" }}
          </el-tag>
        </template>
      </el-table-column>

      <!-- 没有数据 -->
      <div slot="empty" class="empty" style="padding: 20px 0">
        <div v-if="showEmptyTips">
          <i class="el-icon-box"></i>
          <p>{{ emptyText }}</p>
        </div>
      </div>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      :page-size="pageData.per_page"
      :total="pageData.total"
      :page-sizes="[1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]"
      :current-page.sync="pageData.current_page"
      @current-change="changePage"
      @size-change="changeSize"
      :layout="pageLaout"
      :hide-on-single-page="hideOnePage"
      v-if="showPage && pageData.total > 0"
    />
  </div>
</template>

<script>
export default {
  name: "TaoTable",
  props: {
    data: Array,
    page: Object,
    defaultData: Boolean,
    statusTitle: {
      type: String,
      default: "状态"
    },
    status: {
      type: Boolean,
      default: false
    },
    statusProp: {
      type: String,
      default: "status"
    },
    height: {
      type: String
    },
    isLimit: {
      type: Boolean,
      default: true
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    hideOnePage: {
      type: Boolean,
      default: false,
    },
    pageLaout: {
      type: String,
      default: "prev, pager, next, jumper, sizes"
    },
    Bottom: {
      type: Number,
      default: 0
    },
    showPage: {
      type: Boolean,
      default: true
    },
    isStatus: {
      type: Boolean,
      default: true
    },
    isOrder: {
      type: Boolean,
      default: false
    },
    hideScrollBar: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      pageData: {
        total: 1000,
        current_page: 1,
        per_page: 100,
        last_page: 1,
      },
      showEmptyTips: false,
    };
  },
  updated() {
    this.$nextTick(() => {
      this.$refs.table.doLayout();
    });
  },
  mounted() {
    if (!this.data) {
      this.setDefaultData()
    }

    this.setEmptyTips();
  },
  methods: {
    setDefaultData() {
      let arr = [];

      for(let i=0; i<25; i++) {
        arr.push({
          id: i+1,
          default: '默认值'
        })
      }

      this.tableData = arr
    },
    // 点击分页按钮
    changePage(page) {
      this.$emit("changePage", { page });
    },
    // 改变每页显示记录数
    changeSize(limit) {
      if (this.isLimit) {
        this.pageSizeStore(limit);
      }
      this.$emit("changePage", { limit });
    },
    // 每一页pageSize持久化
    pageSizeStore(limit) {
      // this.$store.dispatch('worktab/setPageSize', { limit })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    filterTag(value, row) {
      return row[this.statusProp] === value;
    },
    setEmptyTips() {
      setTimeout(() => {
        this.showEmptyTips = true;
      }, 300);
    },
    // 表格间隔class
    tableRowClassName({ row, rowIndex }) {
      return (rowIndex + 1) % 2 === 0 ? "even-row" : "odd-row";
    },
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          this.$refs.table.doLayout();
        });
      },
      immediate: true,
      deep: true,
    },
    page: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.pageData = newVal;
        }
      },
      immediate: true,
      deep: true,
    },
    multipleSelection: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.$emit("selectData", newVal);
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .tao-table {
    height: 100% !important;

    // 分页组件
    ::v-deep .el-pagination {
      margin: 20px 0 0 -5px;
      padding-left: 0;
    }

    // 滚动条
    ::v-deep ::-webkit-scrollbar {
      height: 6px !important;
      display: block !important;
    }

    .empty {
      i {
        color: #d7d6d6;
        font-size: 40px;
      }

      p {
        color: #999999;
        font-size: 13px;
        line-height: 30px;
        margin-top: -10px;
      }
    }
  }

  .hide-scroll-bar {
    ::v-deep ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
  }
</style>