import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import Loader from './common/Loader';
// import routes from './routes/admin';
import AdminRoute from './routes/adminRoute';
// import agentRoutes from './routes/agent';
import AgentRoute from './routes/agentRoute';

// const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    if (!admin) {
      navigate('/login');
    }
  }, [navigate]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<SignIn />} />

        <Route path="/admin/*" element={<AdminRoute />} />

        <Route path="/*" element={<AgentRoute />} />








        {/* <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          {routes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
