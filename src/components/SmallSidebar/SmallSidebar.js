import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../';

import { toggleSidebar } from '../../store/features/user/userSlice';

import SmallSidebarWrapper from './SmallSidebar.style';
import NavLinksComponent from '../NavLinks/NavLinks.component';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const toggle_Sidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <SmallSidebarWrapper>
      <div
        className={
          isSidebarOpen ? 'show-sidebar sidebar-container' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggle_Sidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>

          <NavLinksComponent toggle_Sidebar={toggle_Sidebar} />
        </div>
      </div>
    </SmallSidebarWrapper>
  );
};

export default SmallSidebar;
