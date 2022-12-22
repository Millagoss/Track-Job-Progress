import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../';

import SmallSidebarWrapper from './SmallSidebar.style';

const SmallSidebar = () => {
  return (
    <SmallSidebarWrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button className='close-btn' onClick={console.log('ola')}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>navLinks</div>
        </div>
      </div>
    </SmallSidebarWrapper>
  );
};

export default SmallSidebar;
