<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import { allowRouters, routes } from "@/router/index.js";

export default {
  name: "App",
  data() {
    return {
      localityFil: true, // 是否路由为本地还是接口  true为本地
    };
  },
  created() {
    this.noRebound();
    this.getMenuList();
  },
  methods: {
    // 获取菜单列表
    getMenuList() {
      this.$root.localRouter = {};
      if (this.localityFil) {
        var data = this.routerFilter([...routes, ...allowRouters]);
        var menuDate = JSON.parse(JSON.stringify(data));
        var { localRouter } = this.$root;
        Object.keys(localRouter).map((_v) => {
          localRouter[_v].filter((s) => {
            menuDate.splice(_v, 0, s);
          });
        });
        this.$store.dispatch("menu/setMenuList", menuDate);
        this.$router.options.routes = Array.from(
          new Set(this.$router.options.routes.concat(data))
        );
        // console.log(this.$root.localRouter, )
        this.$router.addRoutes(data); // 动态添加路由
      } else {
        let isPro = location.href.indexOf("tao_admin");
        let url = "./static/mock/menu.json";
        if (isPro !== -1) {
          url = "/tao_admin" + url;
        }
        axios.get(url).then((res) => {
          if (res.data.code === 200) {
            let { data } = res.data;
            this.routerMatch(data, allowRouters).then((routes) => {
              this.$store.dispatch("menu/setMenuList", data);
              this.$router.options.routes = Array.from(
                new Set(this.$router.options.routes.concat(routes))
              );
              console.log(routes);
              this.$router.addRoutes(routes); // 动态添加路由
            });
          }
        });
      }
    },
    /**
     * 根据权限匹配路由并返回
     * @param {array} permission    后台返回的权限列表（菜单列表）
     * @param {array} allowRouters  需要权限的路由表
     */
    routerMatch(permission, allowRouters) {
      return new Promise((resolve) => {
        const routers = [];
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

            allowRouters.find((s) => {
              if (s.children) {
                s.children.find((y) => {
                  if (y.path === path) {
                    y.meta.permission = item.permission;
                    routers.push(s);
                  }
                });
              } else {
                if (path && s.path === path) {
                  s.meta.permission = item.permission;
                  routers.push(s);
                }
              }
            });
          });
        }
        createRouter(permission);
        resolve(Array.from(new Set(routers)));
      });
    },
    // 处理router
    routerFilter(data, metadata, _index) {
      if (data && data.length !== 0) {
        data.map((s, i) => {
          s.title = s.meta.title;
          s.noMenu = s.meta.noMenu;
          s.independent = s.meta.independent;
          if (s.meta.independent) {
            var _s = JSON.parse(JSON.stringify(s));
            _s.independent = false;
            if (this.$root.localRouter[_index]) {
              this.$root.localRouter[_index].push(_s);
            } else {
              this.$root.localRouter[_index] = [_s];
            }
            // data.splice(i - 1,1)
          }
          this.routerFilter(s.children, data, i);
        });
      } else {
        if (data) {
          data.title = data.meta.title;
          data.noMenu = data.meta.noMenu;
        }
      }
      return data;
    },
    // 阻止下拉滑动回弹 并且判断当前环境分辨率
    noRebound() {
      // 为移动端适配
      var is_Fit = false;
      var that = this
      document.body.onresize = () => {
        onresize()
      };
      onresize()
      function onresize() {
        var _is = document.body.clientWidth < 700;
        if (is_Fit !== _is) {
          is_Fit = _is;
          that.$store.state.menu.mobileFlt = _is;
        }
      }
      document.body.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );
    },
  },
};
</script>

<style lang="scss">
.btn-icon {
  font-size: 10px;
}

.el-btn-red {
  color: #fa6962 !important;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
}
</style>