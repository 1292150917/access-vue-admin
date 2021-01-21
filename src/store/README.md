<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-15 15:07:29
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-18 11:41:49
-->
vuex使用方法

本项目采用modules格式使用。使用中格式为 

commit('user/increment') //此方法为user文件下的mutations中increment函数

dispatch('user/increment') //此方法为user文件下的actions中increment函数

this.$store.state.user.xxx //此方法为this.$store.state指向vuex  user为user的moduls  xxx为某一个变量

此处为使用vuex

import { mapState } from 'vuex'

computed: {
  ...mapState({
    setting: state => state.setting.setting  //为setting文件中的setting的变量
  })
},

官方地址：https://vuex.vuejs.org/zh/guide/modules.html