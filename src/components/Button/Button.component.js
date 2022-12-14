import React from 'react';
import { motion } from 'framer-motion';

import { handleHoverTransition } from '../../utils/mouseHoverHandle/handleMouseHover';

const Button = () => {
  return (
    <motion.button
      onMouseOver={handleHoverTransition}
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
  );
};

export default Button;
