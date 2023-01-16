import React from 'react';

import JobInfoWrapper from './JobInfo.style';

const JobInfo = ({ icon, text }) => {
  return (
    <JobInfoWrapper>
      <span className='icon'>{icon}</span>
      <span className='icon'>{text}</span>
    </JobInfoWrapper>
  );
};

export default JobInfo;
