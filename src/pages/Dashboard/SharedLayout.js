import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { toggleFilter } from '../../store/features/allJobs/allJobsSlice';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import SharedLayoutWrapper from './styles/SharedLayout.style';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.allJobs);

  const { isSidebarOpen } = useSelector((store) => store.user);

  const handleClick = (e) => {
    const check =
      e.target.className == 'outlet-container' ||
      e.target.className == 'dashboard-page' ||
      e.target.className == 'content' ||
      e.target.className == '' ||
      e.target.className == 'status declined' ||
      e.target.className == 'status pending' ||
      e.target.className == 'status interview' ||
      e.target.className == 'jobs' ||
      e.target.className == 'cover' ||
      e.target.className == 'cover resize' ||
      e.target.className == 'icon';
    if (check) {
      dispatch(toggleFilter('close'));
      return;
    }
  };

  return (
    <SharedLayoutWrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div onClick={handleClick} className='outlet-container'>
          {isLoading && (
            <div className={isSidebarOpen ? 'cover resize' : 'cover'}></div>
          )}
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
