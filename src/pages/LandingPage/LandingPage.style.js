import styled from 'styled-components';

const LandingPageWrapper = styled.main`
  position: relative;
  overflow: hidden;
  height: 100vh;
  .clipPath2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    clip-path: polygon(8% 26%, 100% 73%, 100% 100%, 0 100%, 0 35%);
    background: rgb(45, 154, 148, 0.2);
    z-index: -5;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
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
