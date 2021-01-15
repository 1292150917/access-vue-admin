/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-12 09:16:04
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-13 09:04:21
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'default-passive-events'
import "@css/reset.scss"            // 重置html元素样式
import '@css/dark.scss'             // 暗黑主题
import "@/assets/icon/iconfont.css" // 图标库
import "@/assets/icon/iconfont.js"  // 彩色图标
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'  // 组件库
import vuescroll from 'vuescroll'   // 滚动插件
import i18n from './lang/i18n'      // 多语言
import VCharts from 'v-charts'      // echarts封装版
import Notice from '@/components/Message/index.js'  // 全局提示
import components from '@/components/index.js'      // 注册全局组件
import derectives from '@/utils/directives.js'      // 注册全局指令

Vue.use(components)
Vue.use(derectives)
Vue.use(Notice)
Vue.use(vuescroll)
Vue.use(VCharts)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 }) // 全局设置element组件默认大小

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
