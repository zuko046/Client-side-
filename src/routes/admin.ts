  import { lazy } from 'react';
  import ECommerce from '../pages/Dashboard/ECommerce';

  const EntityForm = lazy(() => import('../pages/Form/EntityForm'));
  const RegistrationForm = lazy(() => import('../pages/Form/RegistrationForm'));
  const SettingsForm = lazy(() => import('../pages/Form/SettingsForm'));
  const entity = lazy(() => import('../components/EntityList'));
  const Settings = lazy(() => import('../pages/Settings'));
  const Users = lazy(() => import('../pages/Users'));

  const coreRoutes = [
    // {
    //   path: '/',
    //   title: 'dashboard',
    //   component: ECommerce,
    // },
    {
      path: '/entity',
      title: 'entity',
      component: entity,
    },
    // {
    //   path: '/addtoken',
    //   title: 'Add Token',
    //   component: EntityForm,
    // },
    {
      path: '/userlist',
      title: 'Users',
      component: Users,
    },
    {
      path: '/settings',
      title: 'Settings',
      component: Settings,
    },
    {
      path: '/register',
      title: 'register',
      component: RegistrationForm,
    },
    {
      path: '/addrange',
      title: 'AddRange',
      component: SettingsForm,
    },
  ];

  const adminRoutes = [...coreRoutes];
  export default adminRoutes;
