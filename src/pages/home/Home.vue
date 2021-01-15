<template>
  <div class="frame" :style="{paddingLeft}">
    <!-- 左侧菜单 -->
    <menu-left ref="menuLeft"/>

    <!-- 顶栏、选项卡 -->
    <top-bar 
      :menuOpen="menuOpen"
      @click="visibleMenu" 
      @personalityShow="personalityShow" 
    >
      <work-tab />
    </top-bar>

    <!-- 内容区 -->
    <div class="container">
      <keep-alive v-if="isRouterAlive">
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- 个性化 -->
    <personality 
      :show="personalityOpen" 
      @click="personalityShow" 
      @closePersonality="closePersonality"
    />
  </div>
</template>

<script>
  import { menuLeftOpenWidth, menuLeftShrinkWidth } from "@/config/menu/menu"

  export default {
    provide () {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        menuOpen: true,  //菜单是否展开
        isRouterAlive: true,  // KeepAlive
        personalityOpen: false, // 个性化可见性
      };
    },
    computed: {
      paddingLeft() {
        return this.menuOpen ? menuLeftOpenWidth : menuLeftShrinkWidth
      }
    },
    beforeCreate() {
      // 初始化State
      this.$store.dispatch('worktab/initState')
      this.$store.dispatch('setting/initState')
    },
    mounted() {
      this.refreshSaveUserData()
    },
    methods: {
      // 刷新页面保存用户数据到localStorage
      refreshSaveUserData() {
        let _self = this
        window.addEventListener('beforeunload', e => {
          _self.$store.dispatch('user/storeStorage')
        })
      },
      // 刷新页面
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      },
      // 菜单展开 | 收缩
      visibleMenu() {
        this.menuOpen = !this.menuOpen
        this.$refs.menuLeft.visibleMenu();
      },
      personalityShow() {
        this.personalityOpen = !this.personalityOpen
      },
      closePersonality() {
        this.personalityOpen = false
      }
    }
  };
</script>

<style lang="scss" scoped>
  .frame {
    width: 100%;
    padding: 108px 0 15px 0;
    box-sizing: border-box;
    transition: padding .3s ease-in-out;
    min-height: 100vh;
    overflow: hidden;
    background: $default-background;

    .container {
      width: calc(100% - 30px);
      min-height: 100%;
      margin: auto;
      box-sizing: border-box;

      // 子页面默认style
      >>> .page-content {
        min-height: calc(100vh - 120px);
        background: #fff;
        padding: 16px;
        position: relative;
        box-sizing: border-box;

        >>> .open-head-btn {
          width: 100%;
          height: 15px;
          cursor: pointer;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 999;
          text-align: center;
          font-size: 12px;
          color: #eee;
        }
      }
    }
  }

  @media only screen and (max-width: $device-ipad) { 
    .frame {
      width: 100%;
      padding-left: 0 !important;
      min-height: 100vh;
      overflow-y: scroll;

      .container {
        width: calc(100% - 20px);
      }
    }
  }
</style>
