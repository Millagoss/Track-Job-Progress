import { useRef, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LandingPage, ErrorPage, RegisterPage, PrivateRoute } from './pages';

import {
  AddJob,
  AllJobs,
  Profile,
  Status,
  SharedLayout,
} from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Status />} />
          <Route path='all-Jobs' element={<AllJobs />} />
          <Route path='add-Job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer
        className='toast'
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
