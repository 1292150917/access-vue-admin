import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Console from '@/pages/dashboard/Console'
import { isLoginFun } from '@/utils/utils'

Vue.use(Router)

// noMenu 是否在侧边栏显示  默认为false  true为不显示 会覆盖下级
// independent 是否为独立列 默认为false  true为独立列
// newPage 是否为新页面不是标签  默认为false  

// 不需要权限的路由
export const routes = [
  {
    path: '',
    component: Home,
    redirect: "/console",
    icon:"\ue6b2",
    meta: {
      title: '监控中心'
    },
    children: [
      {
        path: '/console',
        component: Console,
        meta: {
          title: '控制台'
        }
      }
    ]
  }, {
    path: '/login',
    component: () => import('@/pages/login/Login'),
    meta: {
      title: '登录',
      noMenu: true,
      newPage: true
    }
  }
]

const router = new Router({
  routes
})

// 需要权限的路由
export const allowRouters = [{
  path: '/user',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '用户管理'
  },
  children: [
    {
      path: '/user/user',
      component: () => import('@/pages/user/User'),
      meta: {
        title: '个人中心',
        noMenu:true
      },
    }, {
      path: '/form',
      component: () => import('@/pages/form'),
      icon:"\ue6b2",
      meta: {
        title: 'CURD生成',
        independent: true
      }
    },
    {
      path: '/user/account',
      component: () => import('@/pages/user/Account'),
      meta: {
        title: '账号管理'
      }
    },
    {
      path: '/user/department',
      component: () => import('@/pages/user/Department'),
      meta: {
        title: '部门管理'
      }
    },
    {
      path: '/user/role',
      component: () => import('@/pages/user/Role'),
      meta: {
        title: '角色权限'
      }
    }
  ]
}, {
  path: '/menu',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '菜单管理'
  },
  children: [
    {
      path: '/menu/menu',
      component: () => import('@/pages/menu/Menu'),
      meta: {
        title: '权限设置'
      }
    }
  ]
},
{
  path: '/article',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '文章管理'
  },
  children: [
    {
      path: '/article/article-publish',
      component: () => import('@/pages/article/ArticlePublish'),
      meta: {
        title: '文章发布'
      }
    },
    {
      path: '/article/article-edit',
      component: () => import('@/pages/article/ArticleEdit'),
      meta: {
        title: '文章编辑'
      }
    },
    {
      path: '/article/article-list',
      component: () => import('@/pages/article/ArticleList'),
      meta: {
        title: '文章列表'
      }
    },
    {
      path: '/article/classify',
      component: () => import('@/pages/article/Classify'),
      meta: {
        title: '文章分类'
      }
    },
  ]
}, {
  path: '/table',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: 'table',
    noMenu: true
  },
  children: [
    {
      path: '/table/list',
      component: () => import('@/pages/table/List'),
      icon:"\ue6b2",
      meta: {
        title: 'Table案例',
        independent: true
      }
    }
  ]
}, {
  path: '/form-generator',
  component: Home,
  meta: {
    title: 'form-generator',
    noMenu: true
  },
  children: [
    {
      path: '/form-generator',
      component: () => import('@/pages/formGenerator'),
      icon:"\ue6b2",
      meta: {
        title: '表单设计器',
        independent: true
      }
    }
  ]
}, {
  path: '/message',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '消息中心'
  },
  children: [
    {
      path: '/message/message',
      component: () => import('@/pages/message/Message'),
      meta: {
        title: '留言'
      }
    }
  ]
}, {
  path: '/system',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '系统设置'
  },
  children: [
    {
      path: '/system/setting',
      component: () => import('@/pages/system/Setting'),
      meta: {
        title: '系统设置'
      }
    },
    {
      path: '/system/log',
      component: () => import('@/pages/system/Log'),
      meta: {
        title: '操作日志'
      }
    }
  ]
}, {
  path: '/exception',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '异常页面'
  },
  children: [
    {
      path: '/exception/403',
      component: () => import('@/pages/exception/403'),
      meta: {
        title: '403'
      }
    },
    {
      path: '/exception/404',
      component: () => import('@/pages/exception/404'),
      meta: {
        title: '404'
      }
    },
    {
      path: '/exception/500',
      component: () => import('@/pages/exception/500'),
      meta: {
        title: '500'
      }
    }
  ]
},
{
  path: '/widget',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '组件中心'
  },
  children: [
    {
      path: '/widget/button',
      component: () => import('@/pages/widget/button'),
      meta: {
        title: '按钮'
      }
    },
    {
      path: '/widget/link',
      component: () => import('@/pages/widget/link'),
      meta: {
        title: '链接'
      }
    },
    {
      path: '/widget/upload',
      component: () => import('@/pages/widget/upload'),
      meta: {
        title: '文件上传'
      }
    },
    {
      path: '/widget/rate',
      component: () => import('@/pages/widget/rate'),
      meta: {
        title: '评分'
      }
    },
    {
      path: '/widget/color-picker',
      component: () => import('@/pages/widget/ColorPicker'),
      meta: {
        title: '颜色选择器'
      }
    },
    {
      path: '/widget/form',
      component: () => import('@/pages/widget/form'),
      meta: {
        title: '表单'
      }
    }
  ]
},
{
  path: '/safeguard',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '运维管理'
  },
  children: [
    {
      path: '/safeguard/server',
      component: () => import('@/pages/safeguard/server'),
      meta: {
        title: '服务器管理'
      }
    }, {
      path: '/safeguard/database',
      component: () => import('@/pages/safeguard/database'),
      meta: {
        title: '数据库管理'
      }
    }
  ]
}, {
  path: '/plan',
  component: Home,
  icon:"\ue6b2",
  meta: {
    title: '计划'
  },
  children: [
    {
      path: '/plan/year-plan',
      component: () => import('@/pages/plan/YearPlan'),
      meta: {
        title: '年度计划'
      }
    }
  ]
}
]

router.beforeEach((to, from, next) => {
  let { meta, matched } = to
  let { title, newPage, keepAlive } = meta
  let isLogin = isLoginFun()
  to.params.keepAlive = keepAlive

  if (!isLogin && to.path !== '/login') {
    next('/login')
    return
  } else {
    let { menuList } = store.state.menu

    if (menuList.length > 0) { // 菜单数据加载成功
      // if(!matched.length) {   // 打开的页面不存在
      //   router.push('/exception/404')
      //   return
      // }
    }
    next()
  }

  // 不是标签页
  if (newPage) {
    return
  }

  // 路由添加到标签页
  store.dispatch('worktab/worktabRoute', {
    to: {
      name: to.name ? to.name : '',
      title: (to.meta && title) ? title : '',
      path: to.path,
      params: to.params
    },
    from: {
      name: from.name ? from.name : '',
      title: (from.meta && from.meta.title) ? from.meta.title : '',
      path: from.path,
      params: to.params
    }
  })

  // 设置网页title
  if (title) {
    document.title = title
  }
  return
})

export default router