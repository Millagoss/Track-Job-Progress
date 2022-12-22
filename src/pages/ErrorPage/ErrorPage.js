import React from 'react';
import { Link } from 'react-router-dom';

import ErrorPageWrapper from './ErrorPage.style';

import notFoundImage from '../../assets/images/page not found.svg';

const ErrorPage = () => {
  return (
    <ErrorPageWrapper className='full-page'>
      <div>
        <img src={notFoundImage} alt='404' />
        <h3>Ooops!! page not found</h3>
        <p>we can't seem to find te page you're looking for</p>
        <Link to='/'>
          <button className='btn error-page-btn'>go back</button>
        </Link>
      </div>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
