<template>
  <div class="worktab">
    <vue-scroll :ops="ops" ref="scroll">
      <ul class="tabs" ref="tabs">
        <draggable v-model="worktab.opened" animation="300">
          <li
            @contextmenu.prevent="contextmenu($event, i.path)"
            v-for="(i, index) in worktabs"
            :key="i.path"
            :ref="i.path"
            :class="{ 'activ-tab': i.path === activeTab }"
            @click="clickWorktab(i.path)"
          >
            {{ i.title }}
            <i
              class="el-icon-close"
              @click.stop="closeWorktab('current', i.path)"
              v-if="index !== 0"
            ></i>
          </li>
        </draggable>
      </ul>
    </vue-scroll>
    <div class="ctxMenu" :style="MenuStyle">
      <div class="ctxMenu-item" @click="load">
        <a><i class="el-icon-refresh"></i> 刷新当前</a>
      </div>
      <div class="ctxMenu-item" @click="menuClose('current', menuPath)">
        <a><i class="el-icon-error"></i> 关闭当前</a>
      </div>
      <div class="ctxMenu-item" @click="menuClose('other')">
        <a><i class="el-icon-close"> </i> 关闭其他</a>
      </div>
      <div class="ctxMenu-item" @click="menuClose('all')">
        <a><i class="el-icon-warning"></i> 关闭全部</a>
      </div>
    </div>
    <div class="right">
      <el-dropdown @command="closeWorktab">
        <div class="btn el-icon-arrow-down" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-arrow-left" command="left">
            <span style="menu-txt">关闭左侧</span>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-arrow-right" command="right">
            <span style="menu-txt">关闭右侧</span>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-close" command="other">
            <span style="menu-txt">关闭其它</span>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-error" command="all">
            <span style="menu-txt">关闭全部</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import draggable from "vuedraggable";
export default {
  name: "Worktab",
  inject: ["reload"],
  computed: {
    ...mapState({
      worktab: (state) => state.worktab.worktab,
      menu: (state) => state.menu,
    }),
    worktabs() {
      return this.worktab.opened;
    },
    MenuStyle() {
      return {
        top: this.menuTop + "px",
        left: this.menuLeft + "px",
        display: this.menuLeft ? "block" : "none",
      };
    },
  },
  watch: {
    "worktab.current"(tab) {
      this.activeTab = tab.path;
      let el = this.$refs[tab.path];
      let offset = 0;
      if (el && el.length > 0) {
        offset = el[0].offset;
      }
      // 进入控制台刷新页面
      if (tab.path === "/console") {
        this.reload();
      }
      this.worktabAutoPosition(offset);
    },
    "menu.menuList": {
      handler(list) {
        this.getCurrentUserAllowRouters();
      },
      immediate: true,
    },
  },
  data() {
    return {
      activeTab: "", // 选中的 tab
      menuTop: 0,
      menuLeft: 0,
      menuPath: "",
      ops: {
        // 滚动条
        rail: {
          opacity: "0",
          background: undefined,
          size: "0px",
        },
        bar: {
          background: "#999",
          keepShow: false,
          size: "0px",
          minSize: 0,
        },
        scrollButton: {
          enable: true,
          background: "#cecece",
        },
        scrollPanel: {
          easing: "easeOutQuad",
          speed: 800,
        },
        vuescroll: {
          wheelScrollDuration: 600,
          wheelDirectionReverse: true,
        },
      },
      allowPath: [], // 存储当前用户可访问的路由
    };
  },
  created() {
    this.initActiveWorktab();
  },
  components: {
    draggable,
  },
  methods: {
    contextmenu(e, path) {
      this.menuLeft = e.clientX;
      this.menuTop = e.clientY;
      this.menuPath = path;
      document.body.onclick = () => {
        document.body.onclick = null;
        this.menuLeft = 0;
      };
    },
    load() {},
    menuClose(v, menuPath) {
      this.closeWorktab(v, menuPath);
    },
    // 获取当前用户可访问的路由
    getCurrentUserAllowRouters() {
      let { menuList } = this.menu;
      let { routes } = this.$router.options;
      this.routerMatch(menuList, routes).then((res) => {
        this.allowPath = res;
      });
    },
    // 重载后选项卡默认选中项
    initActiveWorktab() {
      setTimeout(() => {
        this.activeTab = this.$route.path;
      }, 800);
    },
    // 点击选项卡
    clickWorktab(path) {
      let currentPath = this.$route.path;
      let allow = this.allowPath.indexOf(path);
      if (currentPath !== path) {
        if (allow !== -1) {
          this.$router.push(path);
        } else {
          // 无权限
          // let page403 = "/exception/403";
          // if (currentPath !== page403) {
          //   this.$router.push(page403);
          // }
        }
      }
    },
    /**
     * 根据权限匹配路由并返回
     * @param {array} permission 后台返回的权限列表（菜单列表）
     * @param {array} allowRouters 需要权限的路由表
     */
    routerMatch(permission, allowRouters) {
      return new Promise((resolve) => {
        const paths = [];
        function createRouter(permission) {
          permission.forEach((item) => {
            let { path } = item;
            // let pathArr = path && path.split("/");
            let pathArr = path;

            // if (pathArr) {
            //   path = pathArr[pathArr.length - 1];
            // }
            if (item.children && item.children.length) {
              createRouter(item.children);
            }

            paths.push(path);
            // allowRouters.find((s) => {
            //   if (s.children) {
            //     s.children.find((y) => {
            //       if (y.path === path) {
            //         paths.push(s.path + "/" + y.path);
            //       }
            //     });
            //   }
            // });
          });
        }
        createRouter(permission);
        resolve(paths);
      });
    },
    /**
     * 关闭选项卡
     * type {current: 当前, left: 左侧, right: 右侧, other: 其它, all: 所有}
     */
    closeWorktab(type, tabPath) {
      let { path } = this.$route;
      let router = this.$router;
      let action = "";
      switch (type) {
        case "current":
          action = "worktabRemove";
          if (tabPath) {
            path = tabPath;
          }
          break;
        case "left":
          action = "worktabRemoveLeft";
          break;
        case "right":
          action = "worktabRemoveRight";
          break;
        case "other":
          action = "worktabRemoveOther";
          break;
        case "all":
          action = "worktabRemoveAll";
          break;
      }
      this.$store.dispatch("worktab/" + action, { path, router });
    },
    // 工作台选项卡自动定位
    worktabAutoPosition(offsetLeft) {
      const scroll = this.$refs["scroll"];
      const panel = scroll.scrollPanelElm;
      const panelWidth = panel.clientWidth;
      const scrollOfLeft = panel.scrollLeft;
      let x = 0;
      offsetLeft += 150;
      // 大于出可视区域
      if (offsetLeft > panelWidth) {
        x = offsetLeft;
      }
      // 小于可视区域
      if (offsetLeft < scrollOfLeft) {
        x = offsetLeft - 150;
      }
      scroll.scrollTo({ x });
    },
  },
};
</script>

<style lang="scss" scoped>
.worktab {
  width: 100%;
  display: flex;
  justify-content: space-between;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  padding: 8px 15px;
  box-sizing: border-box;
  background: $default-background;
  .ctxMenu {
    max-width: 250px;
    min-width: 110px;
    background: white;
    border-radius: 2px;
    padding: 5px 0;
    white-space: nowrap;
    position: fixed;
    z-index: 2147483647;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    border: 1px solid #d2d2d2;
    overflow: visible;
    .ctxMenu-item {
      height: 36px;
      text-align: center;
      font-size: 13px;
      cursor: pointer;
      line-height: 36px;
    }
    .ctxMenu-item:hover {
      background: #f6f6f6;
    }
  }
  .tabs {
    width: 100px;
    display: flex;
    white-space: nowrap;
    background: transparent !important;
    li {
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #808695;
      font-size: 13px;
      padding: 0 12px;
      display: inline-block;
      cursor: pointer;
      border-top: 2px solid transparent;
      transition: color 0.1s;
      background: #fff;
      border-radius: 3px;
      margin-right: 6px;
      &:hover {
        color: #515a6e;
        transition: color 0.2s;
      }
      i {
        color: #808695;
        padding: 2px;
        margin-left: 5px;
        border-radius: 50%;
        transition: all 0.2s;
        &:hover {
          background: #eee;
        }
      }
    }
    .activ-tab {
      color: $theme-color !important;
    }
  }
  .right {
    .btn {
      font-size: 16px;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      position: relative;
      top: 0;
      border-left: 1px solid #f2f2f2;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 0 5px #eee;
      &:hover ul {
        display: inline;
      }
    }
  }
}
@media only screen and (max-width: $device-ipad) {
  .worktab {
    padding: 6px 10px;
  }
}
</style>