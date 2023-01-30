import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

import PageBtnWrapper from './PageBtnContainer.style';
import { changePage } from '../../store/features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJobs);

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const nextPage = () => {
    let nextPg = page + 1;
    if (nextPg > numOfPages) {
      nextPg = 1;
    }
    dispatch(changePage(nextPg));
  };
  const prevPage = () => {
    let prevPg = page - 1;
    if (prevPg < 1) {
      prevPg = numOfPages;
    }
    dispatch(changePage(prevPg));
  };

  return (
    <PageBtnWrapper>
      <button type='button' onClick={prevPage} className='prev-btn'>
        <HiChevronDoubleLeft /> prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNum) => {
          return (
            <button
              type='button'
              onClick={() => dispatch(changePage(pageNum))}
              className={pageNum === page ? 'active page-btn' : 'page-btn'}
              key={pageNum}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button type='button' onClick={nextPage} className='next-btn'>
        <HiChevronDoubleRight /> next
      </button>
    </PageBtnWrapper>
  );
};

export default PageBtnContainer;
