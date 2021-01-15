const menuList =  [
  {
    title: '监控中心',
    icon: '\ue6b2',
    children: [
      {
        title: '工作台',
        path: '/console'
      }
    ]
  },
  {
    title: '文章管理',
    icon: '\ue61e',
    children: [
      {
        title: '文章列表',
        path: '/article/article-list'
      },
      {
        title: '文章分类',
        path: '/article/classify'
      },
      {
        title: '文章发布',
        path: '/article/article-publish'
      },
    ]
  },
  {
    title: '组件中心',
    icon: '\ue61c',
    children: [
      {
        title: '组件市场',
        path: '/widget/widget'
      }
    ]
  },
  {
    title: '消息中心',
    icon: '\ue72c',
    children: [
      {
        title: '系统消息',
        path: '/message/message'
      }
    ]
  },
  {
    title: '用户管理',
    icon: '\ue725',
    children: [
      {
        title: '个人中心',
        path: '/user/user',
      },
      {
        title: '账号管理',
        path: '/user/account',
      },
      {
        title: '部门管理',
        path: '/user/department',
      },
      {
        title: '角色权限',
        path: '/user/role',
      }
    ]
  },
  {
    title: '计划管理',
    icon: '\ue651',
    children: [
      {
        title: '年度计划',
        path: '/plan/year-plan'
      }
    ]
  },
  {
    title: '菜单管理',
    icon: '\ue662',
    children: [
      {
        title: '菜单列表',
        path: '/menu/menu',
        permission: [
          {
            id: 1,
            title: '新增',
            keep_alive: 1,
            permission_mark: "menu/add"
          },{
            id: 2,
            title: '编辑',
            keep_alive: 1,
            permission_mark: "menu/edit"
          }
        ]
      }
    ]
  },
  {
    title: '异常页面',
    icon: '\ue600',
    children: [
      {
        title: '403',
        path: '/exception/403'
      }, {
        title: '404',
        path: '/exception/404'
      },{
        title: '500',
        path: '/exception/500'
      }
    ]
  },
  {
    title: '系统设置',
    icon: '\ue65d',
    children: [
      {
        title: '系统日志',
        path: '/system/log'
      }
    ]
  }
]

export default menuList;