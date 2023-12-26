import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from '../common/Loader';
// import routes from './admin';
import adminRoutes from './admin';

const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));

function AgentRoute() {
  const [loading, setLoading] = useState<boolean>(true);
  const agent = localStorage.getItem('agent');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (!agent) {
    return <Navigate to="/login" />;
  }

  return (
    // <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          {adminRoutes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    // </Suspense>
  );
}

export default AgentRoute;
