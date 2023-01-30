import React from 'react';
import { useState } from 'react';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput, FormSelectRow } from '../';

import {
  handleSearchFormInput,
  clearFilter,
  toggleFilter,
} from '../../store/features/allJobs/allJobsSlice';

import SearchContainerWrapper from './SearchContainer.style';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sortOptions,
    sort,
    isFilter,
  } = useSelector((store) => store.allJobs);

  const { statusOptions, jobTypeOptions } = useSelector(
    (store) => store.addJob
  );

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleSearchFormInput({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilter());
  };

  const toggleFilterHandler = () => {
    dispatch(toggleFilter());
  };
  return (
    <SearchContainerWrapper prop={isFilter ? 'form-move-out' : null}>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          <div className='inputs-container'>
            <FormInput
              type='text'
              name='search'
              value={search}
              onChange={handleSearch}
              label='search'
            />
            <FormSelectRow
              labelText='status'
              name='searchStatus'
              onChange={handleSearch}
              value={searchStatus}
              statusOptions={['all', ...statusOptions]}
            />
            <FormSelectRow
              labelText='type'
              name='searchType'
              onChange={handleSearch}
              value={searchType}
              statusOptions={['all', ...jobTypeOptions]}
            />
            <FormSelectRow
              labelText='sort'
              name='sort'
              onChange={handleSearch}
              value={sort}
              statusOptions={sortOptions}
            />
          </div>
          <button
            className='toggle-filter'
            type='button'
            onClick={toggleFilterHandler}
          >
            {/* Hide filter <BsChevronDoubleDown /> */}
            {!isFilter ? 'Hide filter' : 'Show Filter'}
            {!isFilter ? (
              <BsChevronDoubleUp className='doubled-arrow-icon' />
            ) : (
              <BsChevronDoubleDown className='doubled-arrow-icon' />
            )}
          </button>
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filter
          </button>
        </div>
      </form>
    </SearchContainerWrapper>
  );
};

export default SearchContainer;
