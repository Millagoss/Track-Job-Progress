import styled from 'styled-components';

const StatItemWrapper = styled.article`
  width: 95%;
  padding: 2rem;
  background: var(--grey-50);
  outline: 1px solid ${(props) => props.color};
  outline-offset: 5px;
  box-shadow: 10px 10px 1px 0.51px ${(props) => props.color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
`;

export default StatItemWrapper;
