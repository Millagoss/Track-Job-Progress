import React from 'react';
import { Outlet } from 'react-router-dom';

import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import SharedLayoutWrapper from './styles/SharedLayout.style';

const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </SharedLayoutWrapper>
  );
};

export default SharedLayout;
