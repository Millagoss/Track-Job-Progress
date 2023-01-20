import styled from 'styled-components';

const StatsContainerWrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.5rem;
  }
`;
export default StatsContainerWrapper;
