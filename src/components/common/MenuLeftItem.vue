<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-14 14:58:20
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-15 15:54:23
-->
<template>
  <div v-if="!item1.noMenu && !item1.independent">
    <el-menu-item
      :key="item1.title"
      v-if="!item1.children"
      :index="routerPathCihld(item1)"
      @click="goPage(item1.path, item1.params, item1)"
    >
      <i
        class="iconfont"
        :style="{
          color:
            routerPath !== item1.route
              ? theme.iconColor
              : theme.iconColorActive,
        }"
        >{{ item1.icon }}</i
      >
      <span :style="titleStyle">
        {{ item1.title }}
      </span>
    </el-menu-item>
    <el-submenu v-else :key="item1.title" :index="item1.title">
      <template slot="title">
        <i
          class="iconfont"
          :style="{
            color:
              routerPath !== item1.route
                ? theme.iconColor
                : theme.iconColorActive,
          }"
          >{{ item1.icon }}</i
        >
        <span>
          {{ item1.title }}
        </span>
      </template>
      <div v-for="item2 in item1.children" :key="item2.title">
        <el-submenu :index="item2.title" v-if="item2.children">
          <template slot="title">
            <span :style="titleStyle">
              {{ item2.title }}
            </span>
          </template>
          <div
            is="menu-left-ttem"
            v-for="(_item, _index) in item2.children"
            :key="_index"
            :tier="Number(tier) + 1"
            :menu="_item"
          ></div>
        </el-submenu>
        <el-menu-item
          :index="item2.path"
          v-else
          @click="goPage(item2.path, item2.params, item2)"
          v-show="!item2.noMenu && !item2.independent"
        >
          <span slot="title" :style="titleStyle">{{ item2.title }}</span>
        </el-menu-item>
      </div>
    </el-submenu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      item1: {},
      theme: {}, // 主题
    };
  },
  "setting.theme": {
    handler(theme) {
      this.getTheme(theme);
    },
    immediate: true,
  },
  computed: {
    ...mapState({
      worktab: (state) => state.worktab.worktab,
      setting: (state) => state.setting.setting,
    }),
    titleStyle() {
      return {
        // marginLeft: this.tier * 15 + "px",
      };
    },
    routerPath() {
      let { current } = this.worktab;
      let { path, params } = current;
      let { status } = current.params;
      return status ? path + params.status : path;
    },
  },
  methods: {
    // 切换页面
    goPage(path, params, item) {
      let currentPath = this.$route.path;
      let arr = currentPath.split("/");

      if (currentPath === path) {
        // 当前页跳转
        if (params) {
          let { status } = params;

          if (status) {
            this.$store.dispatch("worktab/worktabRoute", {
              to: { name, params },
              from: { name, params },
            });
            this.reload();
          }
        }
      } else {
        // 跳转其它页
        this.$router.push({ path, params });
      }
    },
    // 返回子菜单路径
    routerPathCihld(item) {
      let { params, path } = item;
      if (params) {
        if (params.status) {
          return path + params.status;
        }
      } else {
        return path;
      }
    },
    // 获取主题
    getTheme(theme) {
      if (theme) {
        let t = setting.themeList.filter((item) => {
          return item.theme === theme;
        });
        this.theme = t[0];
      }
    },
  },
  props: ["menu", "tier"],
  created() {
    this.item1 = this.menu;
  },
};
</script>