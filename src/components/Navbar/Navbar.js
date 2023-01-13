import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaAlignLeft,
  FaCaretDown,
  FaUserCircle,
  FaArrowLeft,
} from 'react-icons/fa';

import { Logo } from '../';

import { toggleSidebar, logoutUser } from '../../store/features/user/userSlice';

import NavbarWrapper from './Navbar.style';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle_Sidebar = (e) => {
    dispatch(toggleSidebar());
  };

  const logout_user = () => {
    dispatch(logoutUser());
  };
  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle_Sidebar}>
          {/* <FaArrowLeft className={rotate && 'full-rotate'} /> */}
          {isSidebarOpen ? (
            <FaArrowLeft className={isSidebarOpen && 'rotate-left'} />
          ) : (
            <FaAlignLeft className={!isSidebarOpen && 'rotate-right'} />
          )}
        </button>
        <div className='logo-text-container'>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'show-dropdown dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={logout_user}
            >
              logOut
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
