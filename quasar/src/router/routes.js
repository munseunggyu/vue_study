const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/TypograpyVue.vue') },
      { path: 'colors', component: () => import('pages/ColorVue.vue') },
      { path: 'spacing', component: () => import('src/pages/SpacingVue.vue') },
      {
        path: 'classes-variable',
        component: () => import('src/pages/ClassesVariable.vue'),
      },
      {
        path: 'breakpoints',
        component: () => import('src/pages/BreakpointsVue.vue'),
      },
      {
        path: 'flex-grid-1',
        component: () => import('src/pages/FlexGrid1.vue'),
      },
      {
        path: 'flex-grid-2',
        component: () => import('src/pages/FlexGrid2.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
