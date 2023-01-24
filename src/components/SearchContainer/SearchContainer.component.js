import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput, FormSelectRow } from '../';

import {
  handleSearchFormInput,
  clearFilter,
} from '../../store/features/allJobs/allJobsSlice';

import SearchContainerWrapper from './SearchContainer.style';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, search, searchStatus, searchType, sortOptions, sort } =
    useSelector((store) => store.allJobs);

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

  return (
    <SearchContainerWrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
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
