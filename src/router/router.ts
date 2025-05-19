export default [
    {
      path: '/',
      name: 'layoutView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LayoutView.vue'),
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'indexView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/IndexView.vue'),
          meta: {
            name: '主页'
          }
        },
        {
          path: 'shopping',
          name: 'shoppingView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ShoppingView.vue'),
          meta: {
            name: '商城'
          }
        },
        {
          path: 'server',
          name: 'serverView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ServerView.vue'),
          meta: {
            name: '服务支持'
          }
        },
        {
          path: 'about',
          name: 'aboutView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta: {
            name: '关于我们'
          }
        },
        {
          path: 'contact',
          name: 'contactView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ContactView.vue'),
          meta: {
            name: '联系我们'
          }
        },
        {
            path: 'news',
            name: 'newsView',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/NewsView.vue'),
            meta: {
              name: '新闻'
            }
          }
      ]
    },
    {
        path: '/module',
        name: 'ModuleView',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/ModuleView.vue'),
        redirect: '/module/login',
        children: [
            {
                path: 'login',
                name: 'loginView',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/loginComponents/LoginComponents.vue'),
                meta: {
                  name: '登录'
                }
              },
              {
                path: 'register',
                name: 'registerView',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/registerComponents/RegisterComponents.vue'),
                meta: {
                  name: '注册'
                }
              },
              {
                path: 'findpass',
                name: 'findpassView',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/findPassComponents/FindPassComponents.vue'),
                meta: {
                  name: '忘记密码'
                }
              },
        ]
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/testVideo',
      name: 'testVideo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestVideoView.vue')
    },
    {
      path: '/regulations',
      name: 'regulationsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DocxRegulationsView.vue')
    },
    {
      path: '/privice',
      name: 'priviceView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DocxPriviceView.vue')
    }
]
    