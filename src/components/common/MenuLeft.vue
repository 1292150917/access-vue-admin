<template>
  <div
    class="menu"
    @click.stop.prevent=""
    v-if="!mobile || (mobile && !collapse)"
  >
    <router-link
      tag="div"
      class="el-menu-header"
      :style="{ background: theme.menuLeftBc }"
      to="/"
    >
      <svg class="svg-icon" aria-hidden="true">
        <use xlink:href="#iconzhaopian-copy"></use>
      </svg>
      <p :style="{ color: theme.textColor, width: collapse ? '0' : '190px' }">
        {{ systemName }}
      </p>
    </router-link>
    <el-menu
      class="el-menu"
      :class="'el-menu-' + theme.theme"
      :unique-opened="uniqueOpened"
      :collapse="collapse"
      :default-active="routerPath"
      :background-color="theme.menuLeftBc"
      :text-color="theme.textColor"
      :active-text-color="theme.activeColor"
    >
      <template v-for="(item1, index) in menuList">
        <div is="menu-left-ttem" :tier="1" :key="index" :menu="item1"></div>
      </template>
    </el-menu>
  </div>
</template>

<script>
import setting from "@/config/setting";
import axios from "axios";
import { flatten } from "@/utils/utils";
import { mapState } from "vuex";
import { allowRouters } from "@/router/index.js";
export default {
  name: "MenuLeft",
  inject: ["reload"],
  computed: {
    ...mapState({
      worktab: (state) => state.worktab.worktab,
      setting: (state) => state.setting.setting,
      menu: (state) => state.menu,
      mobile: (state) => state.menu.mobileFlt,
    }),
    routerPath() {
      let { current } = this.worktab;
      let { path, params } = current;
      let { status } = current.params;
      return status ? path + params.status : path;
    },
  },
  watch: {
    "setting.theme": {
      handler(theme) {
        this.getTheme(theme);
      },
      immediate: true,
    },
    mobile: {
      handler(res) {
        this.collapse = res;
      },
      immediate: true,
    },
    collapse: {
      handler() {
        if (this.collapse === false) {
          if (this.mobile) {
            var _this = this;
            this.watchbody((res) => {
              this.collapse = true;
            });
          }
        }
      },
      immediate: true,
    },
    "setting.uniqueOpened"(uniqueOpened) {
      this.uniqueOpened = uniqueOpened;
    },
    "menu.menuList"(list) {
      this.menuList = list;
    },
  },
  data() {
    return {
      status: "",
      systemName: setting.systemName, // 系统名称
      menuList: [], // 菜单数据
      collapse: false, // 是否水平折叠收起菜单
      theme: {}, // 主题
      uniqueOpened: "", // 是否只保持一个子菜单的展开
    };
  },
  mounted() {
    this.initUserSetting();
    this.getMenuList();
    this.collapse = this.mobile;
  },
  methods: {
    // 监听body点击
    watchbody(callback) {
      setTimeout(function () {
        document.body.onclick = function (e) {
          document.body.onclick = null;
          callback(e);
        };
      }, 200);
    },
    // 获取菜单列表|权限列表
    getMenuList() {
      this.menuList = this.$store.state.menu.menuList;
    },
    // 获取主题
    getTheme(theme) {
      if (theme) {
        let t = setting.themeList.filter((item) => {
          return item.theme === theme;
        });
        var _theme = t[0] || {
          activeColor: "#ffffff",
          iconColor: "#BABBBD",
          iconColorActive: "#FFFFFF",
          menuLeftBc: theme,
          tabbarBackground: "#ffffff",
          tabbarFontColor: "#ffffff",
          textColor: "#BABBBD",
          theme: "custom",
        };
        this.theme = _theme;
      }
    },
    // 初始化用户设置
    initUserSetting() {
      this.uniqueOpened = this.setting.uniqueOpened;
    },
    // 菜单展开 | 收缩
    visibleMenu() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style lang="scss">
.menu {
  // 黑色主题
  .el-menu-dark {
    // 选中颜色
    .el-menu-item.is-active {
      background: #2d8cf0 !important;
    }

    // 鼠标移入背景色
    .el-submenu__title:hover {
      background: #121319 !important;
    }
  }

  // 白色主题
  .el-menu-white {
    // box-shadow: 5px 5px 8px 0 red;

    // 选中颜色
    .el-menu-item.is-active {
      background: #f0faff !important;

      // 左侧线条
      &::before {
        content: "";
        width: 3px;
        height: 100%;
        position: absolute;
        left: 0;
        background: #3296fa;
      }
    }

    // 鼠标移入背景色
    .el-submenu__title:hover,
    .el-submenu .el-menu-item:hover {
      color: #3296fa !important;
      background: #f0faff !important;
    }

    // 鼠标移入图标颜色
    .el-submenu__title:hover i,
    .el-submenu .el-menu-item:hover i {
      color: #3296fa !important;
    }
  }

  // 折叠后宽度
  .el-menu--collapse {
    width: $menu-left-shrink-width;
  }
  // 左边距
  // .el-submenu__title {
  //   padding-left: 25px !important;
  // }
  // 设置文字与图标的距离
  // .el-submenu__title span {
  //   margin-left: 10px;
  // }
  .el-submenu .el-menu-item span {
    margin-left: 15px;
  }
  // 箭头加粗
  .el-submenu__icon-arrow {
    font-weight: bold;
  }
}
</style>

<style lang="scss" scoped>
.menu {
  height: 100vh;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  box-shadow: 5px 5px 8px 0 rgba(29, 35, 41, 0.05);

  .el-menu-header {
    height: 45px;
    line-height: 45px;
    padding-left: 25px;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
    overflow: hidden;

    .svg-icon {
      width: 22px;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      margin-left: -2px;
      margin-top: 10px;
    }

    p {
      color: #c3c3c3;
      font-size: 15px;
      margin-left: 10px;
      margin-top: 5px;
      overflow: hidden;
      transition: width 0.3s ease-in-out;
    }
  }

  .el-menu {
    border-right: 0;
    height: calc(100vh - 45px);
    box-sizing: border-box;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0px !important;
    }
  }

  .el-menu:not(.el-menu--collapse) {
    width: $menu-left-open-width;
  }
}

@media only screen and (max-width: $device-ipad) {
  // .menu {
  //   display: none;
  // }
}
</style>