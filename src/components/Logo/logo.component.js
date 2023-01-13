import React from 'react';

import logo from '../../assets/images/logo-32x32.png';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='TLP' className='logo' />
      <span className='logo-text'>&nbsp; Track Job Progress</span>
    </div>
  );
};

export default Logo;
