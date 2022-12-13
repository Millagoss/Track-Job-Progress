import React from 'react';

import { motion } from 'framer-motion';

import logo from '../../assets/images/logo-32x32.png';
import main from '../../assets/images/main.png';

import LandingPageWrapper from './LandingPageStyle';

const Landing = () => {
  const MotionWrapper = motion(LandingPageWrapper);

  const handleHover = (e) => {
    e.target.style.transition = ' 0.4s ease-in-out all';
  };

  return (
    <MotionWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        delay: 1,
        default: {
          duration: 0.9,
        },
      }}
    >
      <nav>
        <div className='logo-container'>
          <img src={logo} alt='TLP' className='logo' />
          <span className='logo-text'>&nbsp; Track Learning Progress</span>
        </div>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Learning <span>Progress Tracker</span> app
          </h1>
          <p>
            Learning progress tracker app is a great tool that can help you
            track your progress as you learn new things. This app can help you
            keep track of what you've learned,how much progress you're making,
            and to schedule and track your learning sessions. If you're looking
            for a tool that will help you achieve your goals, Learning progress
            tracker app is the perfect option for you!
          </p>
          <motion.button
            onMouseOver={handleHover}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: 'spring',
                damping: 9,
                stiffness: 90,
                restDelta: 0.001,
              },
            }}
            className='btn btn-hero'
          >
            login/Register
          </motion.button>
        </div>
        <motion.img
          animate={{ x: 0 }}
          initial={{ x: 700 }}
          transition={{ delay: 1.3, type: 'spring', stiffness: 90 }}
          src={main}
          alt='TLP'
          className='img main-img'
        />
      </div>
    </MotionWrapper>
  );
};

export default Landing;
