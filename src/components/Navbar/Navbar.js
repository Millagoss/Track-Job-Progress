import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa';

import { Logo } from '../';

import NavbarWrapper from './Navbar.style';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch;

  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => console.log('toggle')}
        >
          <FaAlignLeft />
        </button>
        <div className='logo-text-container'>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => console.log('toggleDrpdn')}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className='dropdown show-dropdown'>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => console.log('logOut user')}
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
