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
    width: 20rem;
    font-size: 3.5rem;
    font-weight: 700;
    span {
      color: var(--myPrimary-700);
      text-decoration: underline;
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

  @media only screen and (max-width: 991px) {
    .info {
      h1 {
        width: fit-content;
        font-size: 2rem;
        font-weight: 700;
        color: var(--black);
        span {
          color: var(--myPrimary-700);
          text-decoration: none;
        }
      }
    }
    p {
      letter-spacing: 1px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      .info {
        padding: 10px;
      }
    }
    .main-img {
      display: block;
    }
  }
`;
export default LandingPageWrapper;
