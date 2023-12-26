import { lazy } from 'react';

const EntityForm = lazy(() => import('../pages/Form/EntityForm'));

const coreRoutes = [
  {
    path: '/token',
    title: 'Token list',
    component: EntityForm,
  },
  // {
  //   path: '/addtoken',
  //   title: 'Add Token',
  //   component: EntityForm,
  // },
];

const agentRoutes = [...coreRoutes];
export default agentRoutes;
