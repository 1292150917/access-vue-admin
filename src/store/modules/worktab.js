/**
 * 工作台选项卡
 * 属于：user.js > worktab
 */

const state = {
  homePage: '/console',
  worktab: {
    current: {},  // 当前页
    opened: []    // 打开的页面
  }
}

const getters = {
  homePage: (state) => state.homePage,
  worktab: (state) => state.worktab,
}

const mutations = {
  // 初始化State
  initState(state) {
    let sys = JSON.parse(localStorage.getItem("sys"))

    if(sys && sys.user.worktab) {
      state.worktab = sys.user.worktab
    }
  },
  // 选项卡路由
  worktabRoute (state, e) {
    let { worktab } = state
    let { opened } = worktab
    let index = opened.findIndex(s => s.path === e.to.path)

    // 新增tab
    if (index <= -1) {
      worktab.opened.push(e.to)
      worktab.current = e.to
    } else {  // 切换到当前tab
      worktab.current = opened[index]
    }
  },
  // 关闭选项卡
  worktabRemove (state, e) {
    let { homePage } = state
    let { opened } = state.worktab
    let index = opened.findIndex(s => s.path === e.path)

    if (index > -1) {
      opened.splice(index, 1)
    }

    // 当页面全部关闭回到首页
    if(!opened.length && e.path != homePage) {
      e.router.push(homePage)
    }

    // 当前页
    if (opened.length && e.path === state.worktab.current.path) {
      e.router.push(state.worktab.opened.pop().path)
    }
  },
  // 关闭左侧页面
  worktabRemoveLeft(state, e) {
    let currentPath = e.path;
    let list = state.worktab.opened;

    for(let i = 0; i<list.length; i++) {
      let item = list[i];
      if(item.path === currentPath) {
        state.worktab.opened.splice(0, i)
        break;
      }
    }
  },
  // 关闭右侧页面
  worktabRemoveRight(state, e) {
    let currentPath = e.path;
    let list = state.worktab.opened;

    for(let i = 0; i<list.length; i++) {
      let item = list[i];
      if(item.path === currentPath) {
        state.worktab.opened.splice(i+1)
        break;
      }
    }
  },
  // 关闭其它页面
  worktabRemoveOther(state, e) {
    state.worktab.opened = state.worktab.opened.filter((item) => {
      return item.path === e.path
    })
  },
  // 关闭全部页面
  worktabRemoveAll(state, e) {
    let {homePage} = state
    let {path, router} = e

    if(homePage !== path) {
      state.worktab =  {
        current: {},
        opened: []
      }

      router.push(homePage)
    }else {
      state.worktab.opened = state.worktab.opened.filter((item) => {
        return item.path === e.path
      })
    }
  }
}

const actions = {
  initState ({commit }) {
    commit('initState')
  },
  worktabRemove ({commit}, e) {
    commit('worktabRemove', e)
  },
  worktabRoute ({commit}, e) {
    commit('worktabRoute', e)
  },
  worktabRemoveOther ({commit}, e) {
    commit('worktabRemoveOther', e)
  },
  worktabRemoveLeft ({commit}, e) {
    commit('worktabRemoveLeft', e)
  },
  worktabRemoveRight ({commit}, e) {
    commit('worktabRemoveRight', e)
  },
  worktabRemoveAll ({commit}, e) {
    commit('worktabRemoveAll', e)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}