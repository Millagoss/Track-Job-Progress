import React from 'react';

import StatItemWrapper from './StatItem.style';

const StatItem = ({ count, title, icon, color, bcg }) => {
  const animation = {
    animate: { scale: 1 },
    initial: { scale: 0 },
    transition: {
      delay: 0.1,
      default: {
        duration: 0.2,
      },
    },
  };

  return (
    <StatItemWrapper {...animation} color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </StatItemWrapper>
  );
};

export default StatItem;
