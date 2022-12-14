import styled from 'styled-components';

const ErrorPageWrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
  .error-page-btn {
    height: 3rem;
    background: none;
    border: 2px solid var(--myPrimary-200);
    color: var(--myPrimary-500);
    width: 10rem;
    margin-top: 1rem;
    text-transform: uppercase;
    box-shadow: var(--shadow-2);
    transition: 0.2s ease-in all;

    :hover {
      background: var(--myPrimary-500);
      border: 1px solid white;
      color: var(--white);
      box-shadow: 0px 5px 25px var(--myPrimary-800);
    }
  }
`;

export default ErrorPageWrapper;
