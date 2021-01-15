/**
 * 用户
 */

const state = {
  user: {
    info: {},       // 用户信息
    worktab: {         // 选项卡
      current: {},  // 当前
      opened: []    // 打开的
    },
    setting: {}     // 个性化设置及其它设置
  }
}

const getters = {
  user: (state) => state.user
}

const mutations = {
  // 用户数据持久化存储
  storeStorage(state, rootState) {
    state.user.worktab = rootState.worktab.worktab
    state.user.setting = rootState.setting.setting
    localStorage.setItem("sys",  JSON.stringify(state))
  },
}

const actions = {
  storeStorage({commit, rootState}) {
    commit('storeStorage', rootState)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}