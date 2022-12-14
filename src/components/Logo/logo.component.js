import React from 'react';

import logo from '../../assets/images/logo-32x32.png';

const LogoComponent = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='TLP' className='logo' />
      <span className='logo-text'>&nbsp; Track Learning Progress</span>
    </div>
  );
};

export default LogoComponent;
