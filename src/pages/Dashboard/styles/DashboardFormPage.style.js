import styled from 'styled-components';
import { motion } from 'framer-motion';

const DashboardFormWrapper = styled(motion.section)`
  border-radius: var(--borderRadius);
  width: 70vw;
  padding: 3rem 2rem 4rem 5rem;
  background: var(--grey-50);
  box-shadow: 0px 10px 30px 20px var(--grey-100);
  /* border-radius: 25px 50px 10% 10% / 23% 25% 25% 25%; */
  /* width: 0; */
  /* height: 0; */
  border-style: solid;
  border-width: 50px 70px 0px 0;
  border-color: var(--myPrimary-600) transparent transparent green;
  /* z-index: -500; */

  h3 {
    margin-bottom: 3rem;
    color: var(--grey-700);
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    width: 100%;
    max-width: 100%;
    height: auto;
    background: inherit;

    .form-center {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr;
      row-gap: 2.5rem;
    }
    .input-container {
      display: flex;
      flex-direction: column;
      position: relative;
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
      rgba(253, 247, 247, 1) 35%,
      rgba(255, 255, 255, 1) 100%
    );

    font-family: var(--bodyFont);
    color: var(--grey-500);
    font-size: 18px;
    padding: 10px 10px 10px 20px;
    display: block;
    width: 80%;
    height: 42px;
    border: none;
    /* border-width: 1px 0 1px 1px; */
    letter-spacing: 0.5px;
    transition: 200ms all ease-out;

    :focus {
      outline: none;
      box-shadow: 0px 5px 15px 3px rgba(159, 209, 207, 0.7);
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
    border: 1px rgba(255, 200, 220, 1) solid;
    /* box-shadow: 0 0 10px 5px rgba(255, 200, 210, 0.7); */
  }

  .form-select {
    width: 60%;
    color: var(--grey-700);
  }
  select:hover {
    background: var(--grey-100);
  }

  .form-label {
    margin: 0;
  }

  .btn-container {
    display: flex;
    justify-content: end;
    gap: 3em;
    height: auto;
    width: 100%;
    margin-top: 5rem;
  }

  .btn-submit {
    width: 12rem;
    height: 2.5rem;
    letter-spacing: 2px;
    border-radius: 0;

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
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-submit,
    .clear-btn {
      width: 15rem;
    }
    .btn-container {
      display: flex;
      justify-content: end;
      gap: 3rem;
      margin-top: 5rem;
      width: 70%;
    }
    .form-input {
      width: 80%;
    }
    .form-row {
      width: 80%;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    /* .form-center button {
      margin-top: 0;
    } */
  }
`;

export default DashboardFormWrapper;
