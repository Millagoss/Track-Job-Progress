import React from 'react';
import { useSelector } from 'react-redux';

import BigSidebarWrapper from './BigSidebar.style';

import { Logo } from '../';
import NavLinksComponent from '../NavLinks/NavLinks.component';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <BigSidebarWrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinksComponent />
        </div>
      </div>
    </BigSidebarWrapper>
  );
};

export default BigSidebar;
