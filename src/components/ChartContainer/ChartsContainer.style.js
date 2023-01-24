import styled from 'styled-components';

const ChartContainerWrapper = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  .chart-btn {
    width: 9rem;
    color: var(--primary-500);
    height: 4rem;
    margin: 1rem 0 0 0;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    z-index: -12;
    box-shadow: -1px 0px 19px 2px rgba(0, 0, 0, 0.22) inset;
  }
  .no-b-border {
    box-shadow: none;
    border-bottom: none;
    background: var(--white);
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .chart {
    background: var(--white);
  }
  .add-chart-border {
    margin-top: -2px;
    border: 1px solid var(--myPrimary-200);
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default ChartContainerWrapper;
