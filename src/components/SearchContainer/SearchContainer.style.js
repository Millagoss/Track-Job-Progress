import styled from 'styled-components';

const SearchContainerWrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 350px;
  padding: 1rem 2rem 1rem 2rem;
  background: var(--grey-50);
  box-shadow: 0px 10px 30px 10px var(--myPrimary-50);
  border-style: solid;
  border-width: 20px 70px 0px 0;
  border-color: var(--myPrimary-600) transparent transparent green;
  transition: 600ms all cubic-bezier(0.79, -0.45, 0.14, 1.39);
  position: fixed;
  z-index: 2;
  margin-top: 40px;
  margin-left: -20px;

  ${({ prop }) =>
    prop &&
    `
    margin-top: -440px;
  `}

  @keyframes bounce {
    0% {
      color: var(--grey-100);
    }
    50% {
      color: var(--grey-800);
    }
    100% {
      color: var(--grey-100);
    }
  }
  h4 {
    margin: 0;
  }
  .toggle-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--grey-50);
    width: 140px;
    height: 3rem;
    position: absolute;
    left: 75%;
    top: 99%;
    box-shadow: 0 10px 12px 3px var(--myPrimary-50);
    border: none;
    transition: 1s all cubic-bezier(0.79, -0.45, 0.14, 1.39);
    cursor: pointer;
    color: var(--white);
    letter-spacing: 1px;
    animation: bounce 2s ease-in-out infinite;
    border-radius: var(--borderRadius);

    text-transform: uppercase;
    :hover {
      letter-spacing: 2px;
      border: none;
      box-shadow: 0 5px 1px 1px var(--myPrimary-200);
    }

    .doubled-arrow-icon {
      font-size: 2rem;
    }
  }

  .form-move-in {
    margin: 0;
  }
  .form-move-out {
    margin-top: -500px;
  }

  @media (max-width: 1230px) {
    /* width: 800px; */
  }

  @media (max-width: 991px) {
    .form-center {
      display: flex;
      flex-direction: column;
      width: 100%;
      row-gap: 3rem;
    }
    .inputs-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      row-gap: 1rem;
      margin-top: 2rem;
    }
  }

  h3 {
    margin-bottom: 2rem;
    color: var(--grey-700);
  }
  .form {
    /* margin: 0 0 0 -50px; */
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    margin: 0;
    width: 500px;
    max-width: 100%;
    height: auto;
    background: inherit;

    .input-container {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      background: chartreuse;
    }
    .form-input-label {
      font-size: 1rem;
      font-family: var(--headingFont);
      font-weight: 100;
      text-align: end;
      letter-spacing: 1.2px;
      color: var(--grey-500);
      position: absolute;
      pointer-events: none;
      text-transform: capitalize;
      transition: 200ms ease-in-out all;
    }
  }
  .move-out {
    /* font-size: 1rem; */
    /* position: absolute; */
    left: 5px;
    top: -55px;
  }
  .form-input {
    background: linear-gradient(
      225deg,
      rgb(240, 244, 248) 0%,
      rgba(253, 247, 247, 1) 55%,
      rgba(255, 255, 255, 1) 100%
    );

    font-family: var(--bodyFont);
    color: var(--grey-500);
    font-size: 18px;
    padding: 10px 10px 10px 20px;
    display: block;
    width: 100%;
    height: 42px;
    border: none;
    outline: 1px rgba(217, 226, 236, 0.2) inset;
    border-width: 1px 0 1px 1px;
    letter-spacing: 0.5px;
    transition: 200ms all ease-out;

    :focus {
      outline-style: inset;
      outline-color: rgba(159, 209, 207, 0.2);
      outline-width: 1px;
      box-shadow: 0px 5px 5px 3px rgba(159, 209, 207, 0.7);
    }
  }
  .move-out {
    left: 5px;
    top: -25px;
  }
  .move-in {
    left: 25px;
    top: 8px;
  }

  .red-border {
    /* outline-offset: 5px; */
    outline: 1px rgba(255, 200, 220, 0.5) inset;
    /* box-shadow: 0 10px 10px 0px rgba(255, 200, 210, 1); */
  }
  .form-row {
    width: 100%;
  }
  .form-select {
    width: 100%;
    color: var(--grey-700);
  }
  select:hover {
    background: var(--grey-100);
  }

  .form-label {
    margin: 0;
  }

  .btn-danger {
    width: 12rem;
    height: 2.5rem;
    letter-spacing: 2px;
    border-radius: 0;
    transition: var(--transition);

    :hover {
      outline: 0.5px var(--grey-200) solid;
      outline-offset: 4px;
    }
  }

  .profile-page-btn {
    margin-top: 3rem;
  }
  .clear-btn {
    background: var(--grey-500);
    border-radius: 0;
    width: 12rem;
    height: 2.5rem;
  }

  .clear-btn:hover {
    outline: 0.5px var(--grey-200) solid;
    outline-offset: 4px;
    background: var(--black);
  }

  @media (min-width: 992px) {
    width: 800px;

    z-index: 1;
    ${({ prop }) =>
      prop &&
      `
    margin-top: -460px;
  `}

    .toggle-filter {
      width: 200px;
    }
    .form {
      margin: 0;
      width: 100%;
    }
    .form-center {
      display: flex;
      flex-direction: column;
      row-gap: 5rem;
    }
    .inputs-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      align-items: flex-end;
      width: 100%;
      row-gap: 2.5rem;
      margin-top: 2rem;
    }

    .form-row {
      width: 100%;
    }
  }
`;

export default SearchContainerWrapper;
