export const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/board',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'BoardListPage',
        component: () => import('../pages/board/BoardListPage.vue'),
      },
      {
        path: 'create',
        name: 'BoardCreatePage',
        component: () => import('../pages/board/BoardCreatePage.vue'),
      },
      {
        path: 'detail/:cid',
        name: 'BoardDetailPage',
        component: () => import('../pages/board/BoardDetailPage.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/Login.vue'),
  },
  
  
];

