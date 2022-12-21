import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  ErrorPage,
  RegisterPage,
  DashboardPage,
  PrivateRoute,
} from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </BrowserRouter>
  );
}

export default App;
