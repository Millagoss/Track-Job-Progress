import styled from 'styled-components';

const JobsContainerWrapper = styled.section`
  margin-top: 6rem;
  margin-bottom: 5rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 800;
    font-size: 2rem;
    text-align: left;
    color: var(--grey-500);
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    margin-top: 4rem;
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default JobsContainerWrapper;
