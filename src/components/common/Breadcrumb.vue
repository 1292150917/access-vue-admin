<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(item, index) in breadList" :key="index">
        <span>{{item.meta.title}}</span>
        <i v-if="index+1 !== breadList.length">/</i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data() {
      return {
        breadList: []
      };
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    },
    created() {
      this.getBreadcrumb();
    },
    methods: {
      isHome(route) {
        return route.name === "/";
      },
      getBreadcrumb() {
        let matched = this.$route.matched;
        let list = [];

        //如果不是首页
        if (!this.isHome(matched[0])) {
          matched.map(item => {
            let { path, meta } = item
            list.push(
              {
                path,
                meta
              }
            )
          })
        }
        this.breadList = list;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .breadcrumb {
    margin-left: 10px;

    ul {
      display: flex;

      li {
        color: #999;
        font-size: 13px;

        span {
          font-size: 13px;
        }

        i {
          font-size: 13px;
          margin: 0 7px;
        }
      }
    }
  }
</style>