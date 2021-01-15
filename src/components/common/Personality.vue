<template>
  <el-drawer
    size="265px"
    :visible.sync="show"
    :with-header="false"
    :before-close="close"
  >
    <div class="drawer-con">
      <p class="title">主题风格</p>
      <div class="theme-wrap">
        <div class="item" v-for="(item, index) in dayThemeList" :key="item.theme" @click="setDarkTheme(item.theme)">
          <div class="box">
            <div :style="{background: item.color[0] + '!important'}"></div>
            <div :style="{background: index === 2 ? item.color[1] : item.color[0] + '!important'}"></div>
          </div>
          <p class="name">{{item.name}}</p>
          <div class="active" v-show="item.theme === currentView"></div>
        </div>
      </div>

      <p class="title" style="margin-top: 35px">菜单风格</p>
      <div class="menu-theme-wrap">
        <div class="item" v-for="item in themeList" :key="item.theme" @click="setUpTheme(item.theme)">
          <div class="box">
            <div class="top" :style="{ background: item.tabbarBackground + '!important' }" ></div>
            <div class="left" :style="{ background: item.menuLeftBc + '!important' }"></div>
          </div>
          <div class="active" v-if="item.theme === currentTheme"></div>
        </div>
      </div>

      <p class="title" style="margin-top: 40px">基础配置</p>
      <div class="basic-box">
        <div class="item" style="display: flex">
          <span>侧边栏开启手风琴模式</span>
          <el-switch
            v-model="uniqueOpened"
            active-color="#1F8CEB"
            inactive-color="#cccccc"
            @change="setLeftMenuUniqueOpened"
          >
          </el-switch>
        </div>
        <div class="item">
          <span>显示折叠侧边栏按钮</span>
          <el-switch
            v-model="showMenuButton"
            active-color="#1F8CEB"
            inactive-color="#cccccc"
            @change="setLeftMenuButton"
          >
          </el-switch>
        </div>
        <div class="item">
          <span>显示重载页面按钮</span>
          <el-switch
            v-model="showRefreshButton"
            active-color="#1F8CEB"
            inactive-color="#cccccc"
            @change="setPageRefreshButton"
          >
          </el-switch>
        </div>
        <div class="item">
          <span>显示全局面包屑导航</span>
          <el-switch
            v-model="showCrumbs"
            active-color="#1F8CEB"
            inactive-color="#cccccc"
            @change="setLeftMenuCrumbs"
          >
          </el-switch>
        </div>
        <div class="item">
          <span>自动关闭个性化设置</span>
          <el-switch
            v-model="autoClose"
            active-color="#1F8CEB"
            inactive-color="#cccccc"
            @change="setPersonalityAutoClose"
          >
          </el-switch>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>
  import setting from '@/config/setting'
  import { mapState } from 'vuex'

  export default {
    props: {
      show: Boolean
    },
    computed: {
      ...mapState({
        setting: state => state.setting.setting
      })
    },
    watch: { 
      'setting.theme'(theme) {
        this.currentTheme = theme
      },
      'setting.autoClose' (close) {
        this.autoClose = close
      }
    },
    data() {
      return {
        themeList: setting.themeList,
        dayThemeList: [
          {
            name: '浅色',
            theme: 'white',
            color: ['#fff', '#fff']
          },
          {
            name: '深色',
            theme: 'dark',
            color: ['#22252A']
          },
          {
            name: '自动',
            theme: 'auto',
            color: ['#fff', '#22252A'],
          }
        ],
        currentTheme: '',
        uniqueOpened: '',
        showMenuButton: '',
        autoClose: '',
        showRefreshButton: '',
        showCrumbs: '',
        currentView: setting.themeModel,
        dayList: [6, 18]
      }
    },
    mounted() {
      this.initUserSetting()
      this.initThemeModel()
      this.initThemeSetting()
    },
    methods: {
      // 初始化用户主题设置
      initThemeSetting() {
        let { defaultTheme } = setting
        let t = defaultTheme
        let sys = JSON.parse(localStorage.getItem('sys'))

        if(sys) {
          let { theme } = sys.user.setting
          if(theme) {
            t = theme
          }else {
            t = defaultTheme
          }
        }

        this.setUpTheme(t)
      },
      // 设置主题
      setUpTheme(theme) {
        this.currentTheme = theme
        this.$store.dispatch('setting/setUpTheme', theme)
      },
      initThemeModel() {
        let { currentView, dayList } = this

        if(currentView === 'auto') {
          this.setDarkTheme('auto')
        }else {
          this.setDarkTheme(currentView)
        }
      },
      setDarkTheme(theme) {
        let el = document.getElementsByTagName("html")[0]

        if(theme === 'dark') {
          el.setAttribute("class","dark-body")
        }else if(theme === 'white') {
          el.removeAttribute('class')
        }else if(theme === 'auto') {
          this.setAutoThemeModel(el)
        }
        this.currentView = theme
        this.setThemeModel()
      },
      setAutoThemeModel(el) {
        let d = new Date()
        let h = d.getHours()
        let { dayList } = this
        this.currentView = 'auto'
        this.setThemeModel()

        if(h >= dayList[0] && h < dayList[1]) {
          el.removeAttribute('class')
        }else {
          el.setAttribute("class","dark-body")
        }
      },
      // 初始化用户设置
      initUserSetting() {
        let { uniqueOpened, menuButton, autoClose, showRefreshButton, showCrumbs, themeModel } = this.setting

        this.uniqueOpened = uniqueOpened
        this.showMenuButton = menuButton
        this.autoClose = autoClose
        this.showRefreshButton = showRefreshButton
        this.showCrumbs = showCrumbs
        this.currentView = themeModel

        if(!themeModel) {
          this.currentView = setting.themeModel
        }
      },
      // 是否开启手风琴模式
      setLeftMenuUniqueOpened() {
        this.$store.dispatch('setting/setLeftMenuUniqueOpened', {
          show: this.uniqueOpened
        })
        this.isAutoClose()
      },
      // 是否显示菜单展开按钮
      setLeftMenuButton() {
        this.$store.dispatch('setting/setLeftMenuButton', {
          show: this.showMenuButton
        })
        this.isAutoClose()
      },
      // 是否显示局部刷新按钮
      setPageRefreshButton() {
        this.$store.dispatch('setting/setPageRefreshButton', {
          show: this.showRefreshButton
        })
        this.isAutoClose()
      },
      // 是否显示全局面包屑
      setLeftMenuCrumbs() {
        this.$store.dispatch('setting/setLeftMenuCrumbs', {
          show: this.showCrumbs
        })
        this.isAutoClose()
      },
      // 自动关闭
      setPersonalityAutoClose() {
        this.$store.dispatch('setting/setPersonalityAutoClose', {
          show: this.autoClose
        })
        this.isAutoClose()
      },
      // 主题模式
      setThemeModel() {
        this.$store.dispatch('setting/setThemeModel', this.currentView)
        this.isAutoClose()
      },
      // 自动关闭
      isAutoClose() {
        let { autoClose } = this

        if(autoClose) {
          this.show = false
          this.$emit('closePersonality')
        }
      },
      close() {
        this.$emit('click')
      },
    }
  }
</script>

<style>
  /* 去除drawer点击时候出现的边框 */
  .el-drawer:focus {
    outline: none !important;
  }

  .el-switch .el-switch__core {
    width: 35px !important;
  }
</style>

<style lang="scss" scoped>
  .drawer-con {
    padding: 30px 20px;

    .title {
      text-align: center;
      color: #000;
      font-size: 13px;
      position: relative;

      &::before {
        content: '';
        width: 50px;
        border-bottom: 2px solid #F3F4F5;
        position: absolute;
        left: 0;
        top: 10px;
        margin: auto;
      }

      &::after {
        content: '';
        width: 50px;
        border-bottom: 2px solid #F3F4F5;
        position: absolute;
        right: 0;
        top: 10px;
        margin: auto;
      }
    }

    .theme-wrap {
      display: flex;
      flex-wrap: wrap;
      margin-top: 25px;
       
      .item {
        width: 65px;
        box-sizing: border-box;
        margin-right: 15px;

        &:last-of-type {
          margin-right: 0;
        }

        .box {
          width: 100%;
          height: 45px;
          box-shadow: 0 0 5px #ccc;
          position: relative;
          background: #F5F7F9;
          box-sizing: border-box;
          border-radius: 6px;
          transition: box-shadow .1s;
          cursor: pointer;
          display: flex;
          overflow: hidden;

          >div {
            width: 50%;
            height: 100%;
          }
        }

        .name {
          text-align: center;
          margin-top: 6px;
          color: #515a6e;
          font-size: 12px;
        }

        .active {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: relative;
          left: 0;
          right: 0;
          bottom: -5px;
          margin: auto;
          background: #19BE6B !important;
        }
      }
    }

    .menu-theme-wrap {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
       
      .item {
        width: 65px;
        margin-right: 15px;

        .box {
          width: 65px;
          height: 45px;
          box-shadow: 0 0 5px #ccc;
          position: relative;
          background: #F5F7F9 !important;
          box-sizing: border-box;
          border-radius: 6px;
          overflow: hidden;
          transition: box-shadow .1s;
          cursor: pointer;

          &:hover {
            box-shadow: 0 0 10px #ccc;
          }

          &:nth-child(even) {
            margin-right: 0;
          }

          .top {
            width: 100%;
            height: 8px;
          }

          .left {
            position: absolute;
            top: 0;
            left: 0;
            width: 16px;
            height: 100%;
          }
        }

        .active {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin: auto;
          margin-top: 8px;
          background: #19BE6B !important;
        }
      }
    }

    .basic-box {

      .item {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        span {
          color: #515a6e;
          font-size: 14px;
        }
      }
    }
  }
</style>