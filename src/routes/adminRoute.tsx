import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from '../common/Loader';
// import agentRoutes from './agent';
import adminRouteSet from './admin';

const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));

function AdminRoute() {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  const admin = localStorage.getItem('admin');
  if (!admin) {
    return <Navigate to="/login" />;
  } else {
    console.log(adminRouteSet);

    return (
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            {adminRouteSet.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    );
  }
}

export default AdminRoute;
