import styled from 'styled-components';

const LandingPageWrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: var(--myPrimary-700);
      font-size: 2rem;
      font-weight: 800;
      font-family: var(--headingFont);
    }
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    overflow: hidden;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--myPrimary-700);
    }
  }
  p {
    color: var(--grey-600);
    letter-spacing: 2px;
    line-height: 25px;
  }
  .main-img {
    display: none;
    z-index: 300;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      .info {
        padding: 10px;

        span {
          text-decoration: underline;
        }
      }
    }
    .main-img {
      display: block;
    }
  }
`;
export default LandingPageWrapper;
