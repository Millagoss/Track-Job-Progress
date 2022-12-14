import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// MY IMPORTS
import main from '../../assets/images/main.png';
import LandingPageWrapper from './LandingPage.style';
import {
  scaleElement,
  deScaleElement,
} from '../../utils/mouseHoverHandle/handleMouseHover';
import { Logo } from '../../components/';
import Button from '../../components/Button/Button.component';

const LandingPage = () => {
  const LandingPageMotionWrapper = motion(LandingPageWrapper);

  return (
    <LandingPageMotionWrapper
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
        <Logo />
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
          <Link to='/register'>
            <Button label='login/register' />
          </Link>
        </div>
        <motion.img
          animate={{ x: 0 }}
          initial={{ x: 700 }}
          transition={{ delay: 1.3, type: 'spring', stiffness: 90 }}
          src={main}
          alt='TLP'
          className='img main-img'
          onMouseOver={scaleElement}
          onMouseLeave={deScaleElement}
        />
      </div>
    </LandingPageMotionWrapper>
  );
};

export default LandingPage;
