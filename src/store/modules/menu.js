/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-13 08:58:21
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-13 13:22:24
 */
/**
 * 菜单|权限列表
 */

const state = {
  menuList: [],
  mobileFlt:false
}

const getters = {
  menu: (state) => state.menuList
}

const mutations = {
  setMenuList(state, list) {
    state.menuList = list
  }
}

const actions = {
  setMenuList({commit}, e) {
    commit('setMenuList', e)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}