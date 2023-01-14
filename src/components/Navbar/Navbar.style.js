import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 0px 10px 0px rgba(0, 120, 0, 0.5);
  z-index: 1;
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .rotate-right {
    animation: rotate 200ms ease-in-out backwards;
  }
  .rotate-left {
    animation: rotate-left 200ms ease-in-out backwards;
  }
  .scalee {
    transition: 1s ease-in-out all;
    animation: scale-up 200ms ease-in-out backwards;
  }

  @keyframes rotate-left {
    100% {
      transform: rotate(360deg) scale(1.5);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg) scale(1.5);
    }
  }

  @keyframes scale-up {
    100% {
      transform: scale(2.9);
    }
  }

  .logo-text-container {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--myPrimary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  .logo {
    width: 4.5rem;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
      font-size: 1.9rem;
    }
  }
  @media (max-width: 1120px) {
    .logo-text {
      font-size: 1.6rem;
    }
  }
`;
export default NavbarWrapper;
