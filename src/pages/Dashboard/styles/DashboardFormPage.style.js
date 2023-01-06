import styled from 'styled-components';
import { motion } from 'framer-motion';

const DashboardFormWrapper = styled(motion.section)`
  border-radius: var(--borderRadius);
  width: 100%;
  padding: 3rem 2rem 4rem;
  /* height: 500px; */
  /* background: var(--white); */
  /* box-shadow: 0px 20px 20px 10px var(--white); */
  h3 {
    margin-top: 0;
  }

  /* .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  } */

  /* //////////// */

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    height: auto;
    background: inherit;

    .form-center {
      height: fit-content;
    }
    .input-container {
      margin-top: 2.3rem;
      position: relative;
    }
    .form-input {
      background: linear-gradient(
        190deg,
        rgb(240, 244, 248) 0%,
        rgba(253, 247, 247, 1) 35%,
        rgba(255, 255, 255, 1) 100%
      );

      font-family: var(--bodyFont);
      color: var(--grey-500);
      font-size: 18px;
      padding: 10px 10px 10px 20px;
      display: block;
      width: 70%;
      height: 42px;
      border: none;
      /* border-bottom: 5px solid var(--grey-200); */
      margin: 25px 0;
      letter-spacing: 0.5px;
      transition: 0.1s all ease-in-out;

      :focus {
        outline: none;
        box-shadow: 0px 5px 15px 3px rgba(159, 209, 207, 0.7);
      }
    }
    .move-out {
      left: -45px;
      top: 4px;
    }
    .move-in {
      left: 22px;
      top: 4px;
    }

    .input-move-out {
      margin-left: 70px;
      box-shadow: 0px 14px 9px 3px rgba(159, 209, 207, 0.1);
    }
    .input-move-in {
      border: 1px rgba(255, 200, 210, 0.9) solid;
    }

    .form-select {
      width: 70;
      color: var(--grey-700);
    }
    select:hover {
      background: var(--grey-100);
    }

    .form-label {
      margin: 0;
    }
    .form-input-label {
      font-size: 22px;
      font-family: var(--headingFont);
      font-weight: 100;
      letter-spacing: 1.2px;
      color: var(--grey-500);
      position: absolute;
      pointer-events: none;
      text-transform: capitalize;

      transition: 300ms ease-in-out all;
    }
  }

  .btn-container {
    display: flex;
    justify-content: end;
    gap: 3em;
    height: auto;
    width: 70%;
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
