import React from 'react';

import logo from '../../assets/images/logo-32x32.png';
import main from '../../assets/images/main.png';

import LandingPageWrapper from './LandingPageStyle';

const Landing = () => {
  return (
    <LandingPageWrapper>
      <nav>
        <img src={logo} alt='TLP' className='logo' />
        <span className='logo-text'>&nbsp; Track Learning Progress</span>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Learning <span> Progress Tracker</span> app
          </h1>
          <p>
            Learning progress tracker app is a great tool that can help you
            track your progress as you learn new things. This app can help you
            keep track of what you've learned,how much progress you're making,
            and to schedule and track your learning sessions. If you're looking
            for a tool that will help you achieve your goals, Learning progress
            tracker app is the perfect option for you!
          </p>
          <button className='btn btn-hero'>login/Register</button>
        </div>
        <img src={main} alt='TLP' className='img main-img' />
      </div>
    </LandingPageWrapper>
  );
};

export default Landing;
