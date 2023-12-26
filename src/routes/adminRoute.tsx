import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from '../common/Loader';
// import agentRoutes from './agent';
import adminRoutes from './admin';

const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));

function AdminRoute() {
  const [loading, setLoading] = useState<boolean>(true);
  const admin = localStorage.getItem('admin');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (!admin) {
    return <Navigate to="/login" />;
  }
  console.log(adminRoutes);
  

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />

          {adminRoutes.map(({ path, component: Component }, index) => 
          ( 
            <Route key={index} path={path} element={<Component />} />

          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AdminRoute;
