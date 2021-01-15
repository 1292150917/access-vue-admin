<template>
  <div class="topbar" :style="{width: topWidth}">
    <div class="menu">
      <div class="left" style="display: flex">
        <i class="iconfont" @click.prevent="visibleMenu" v-if="showMenuButton">&#xe6af;</i>
        <i class="iconfont" @click="reload()" v-if="showRefreshButton">&#xe760;</i>
        <breadcrumb v-if="showCrumbs"/>
      </div>

      <div class="right">
        <div class="screen" @click="fullScreen" v-if="!isFullScreen">
          <i class="iconfont">&#xe824;</i>
        </div>
        <div class="screen" @click="exitScreen" v-else>
          <i class="iconfont">&#xe8fa;</i>
        </div>
        <div class="user">
          <el-dropdown @command="goPage">
            <div>
              <img class="cover" src="@img/avatar.png" style="float: left"/>
              <span class="name">{{$t('user.name')}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="/user/user">
                <i class="menu-icon iconfont">&#xe725;</i>
                <span class="menu-txt">个人中心</span>
              </el-dropdown-item>
              <el-dropdown-item command="loginOut">
                <i class="menu-icon iconfont">&#xe678;</i>
                <span class="menu-txt">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="lang">
          <el-dropdown @command="changeLanguage">
            <div class="btn">
              <i class="iconfont">&#xe618;</i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh_CN">
                <span class="menu-txt">中文</span>
              </el-dropdown-item>
              <el-dropdown-item command="en_US">
                <span class="menu-txt">English</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="gxh" @click="openSetting">
          <i class="iconfont">&#xe6b1;</i>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import Breadcrumb from "@/components/common/Breadcrumb"
  import { menuLeftOpenWidth, menuLeftShrinkWidth } from "@/config/menu/menu"
  import { fullScreen, exitScreen } from "@/utils/util.js"
  import { delCookie } from "@/utils/utils.js"
  import { mapState } from 'vuex'

  export default {
    name: 'TopBar',
    components: {
      Breadcrumb
    },
    props: {
      menuOpen: Boolean
    },
    inject: ['reload'],
    computed: {
      ...mapState({
        setting: state => state.setting.setting,
      }),
      topWidth() {
        return this.menuOpen ? `calc(100% - ${menuLeftOpenWidth})` : 
        `calc(100% - ${menuLeftShrinkWidth})`
      }
    },
    watch: {
      'setting.menuButton'(show) {
        this.showMenuButton = show
      },
      'setting.showRefreshButton'(show) {
        this.showRefreshButton = show
      },
      'setting.showCrumbs'(show) {
        this.showCrumbs = show
      }
    },
    data () {
      return {
        showMenuButton: '',
        showRefreshButton: '',
        showCrumbs: '',
        isFullScreen: false
      }
    },
    mounted() {
      this.initSetting()
    },
    methods: {
      // 初始化个性设置
      initSetting() {
        let { menuButton, showRefreshButton, showCrumbs } = this.setting
        this.showMenuButton = menuButton
        this.showRefreshButton = showRefreshButton
        this.showCrumbs = showCrumbs
      },
      // 退出登录
      loginOut() {
        this.$confirm('您确定退出登录当前账户吗？打开的标签页和个人设置将会保存。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delCookie('userName')
          delCookie('userPwd')
          this.$router.push('/login')
        }).catch(() => {});
      },
      // 全屏
      fullScreen() {
        fullScreen()
        this.isFullScreen = true
      },
      // 退出全屏
      exitScreen() {
        exitScreen()
        this.isFullScreen = false
      },
      // 获取多语言
      getLanguage() {
        let {locale} = this.$i18n
        let language = '';

        switch(locale) {
          case 'zh_CN':
            language = '中文';
            break;
          case 'en_US':
            language = 'English';
            break;
        }
        // this.language = language
      },
      // 改变语言
      changeLanguage(lang) {
        this.$i18n.locale = lang
      },
      // 左侧菜单展开|缩小
      visibleMenu() {
        this.$emit('click')
        // 处理移动端小屏情况
      },
      // 打开个性化设置
      openSetting() {
        this.$emit('personalityShow')
      },
      // 跳转页面
      goPage(path) {
        if(path == 'loginOut') {
          this.loginOut()
          return
        }
        this.$router.push({path})
      }
    }
  }
</script>

<style lang="scss" scoped>
  $hover-color: #f8f8f8;

  .topbar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    transition: all .3s ease-in-out;
    background: $default-background;
    background: transparent !important;

    .menu {
      height: 60px;
      line-height: 60px;
      background: $theme-menu-color;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;

      .left {
        line-height: 60px;

        i {
          display: inline-block;
          width: 50px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          cursor: pointer;
          transition: all .2s;
          font-size: 16px;

          &:hover {
            background: $hover-color;
          }
        }

        .el-route {
          line-height: 60px;
          margin-left: 10px;
        }
      }

      .right {
        display: flex;

        .screen {
          cursor: pointer;
          padding: 0 10px;
          transition: background-color .3s;

          i {
            color: #777;
            font-size: 20px;
          }

          &:hover {
            background: $hover-color;
          }
        }

        .user {
          height: 60px;
          line-height: 60px;
          display: flex;
          padding: 0 10px;
          transition: background-color .3s;

          &:hover {
            background: $hover-color;
          }

          &:hover ul {
            height: 80px;
          }

          .cover {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #eee;
            margin: 15px 10px 0 0;
            overflow: hidden;
            cursor: pointer;
          }

          .name {
            font-size: 13px;
            cursor: pointer;
          }
        }

        .lang {
          height: 60px;
          line-height: 60px;
          display: flex;
          text-align: center;
          transition: background-color .3s;

          .btn {
            width: 45px;
          }

          &:hover {
            background: $hover-color;
          }

          &:hover ul {
            height: 80px;
          }
        }

        .gxh {
          width: 45px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          cursor: pointer;
          transition: background-color .3s;
          
          i {
            font-size: 16px;
          }

          &:hover {
            background: #f8f8f8;
          }
        }
      }
    }
  }

  @media only screen and (max-width: $device-ipad) { 
    .topbar {
      width: 100% !important;
    }
  }
</style>