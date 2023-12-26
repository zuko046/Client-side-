import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from '../common/Loader';
// import routes from './admin';
// import adminRoutes from './admin';
import agentRouteSet from './agent';

const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const Dashboard = lazy(() => import('../pages/Dashboard/ECommerce'));

function AgentRoute() {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  const agent = localStorage.getItem('agent');
  console.log('agent -----------', agent, agentRouteSet);

  if (!agent) {
    return <Navigate to="/login" />;
  } else {
    return (
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
{/* 
            {agentRouteSet.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))} */}

          </Route>
        </Routes>
      </Suspense>
    );
  }
}

export default AgentRoute;
