<template>
  <div class="table-bar">
    <div class="top-wrap" v-show="showSearchWrap">
      <slot name="top"></slot>
    </div>
    <div class="bottom-wrap">
      <div class="left-wrap">
        <slot name="bottom"></slot>
      </div>
      <div class="right-wrap">
        <el-button-group>
          <el-button icon="el-icon-search" @click="isShowSearchWrap()"></el-button>
          <el-button icon="el-icon-refresh-right" @click="refresh()"></el-button>
          <el-button icon="el-icon-s-operation"></el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableBar',
    inject: ['reload'],
    props: {
      showTop: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        showSearchWrap: true
      };
    },
    mounted() {
      this.showSearchWrap = this.showTop
    },
    methods: {
      // 刷新页面
      refresh() {
        this.reload()
      },
      // 是否显示搜索区域
      isShowSearchWrap() {
        this.showSearchWrap = !this.showSearchWrap
      }
    }
  };
</script>

<style lang="scss" scoped>
  .table-bar {
    padding-bottom: 15px;

    .top-wrap {
      transition: height .3s;
    }

    .bottom-wrap {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
