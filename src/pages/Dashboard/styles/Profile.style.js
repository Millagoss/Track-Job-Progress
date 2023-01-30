import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProfileWrapper = styled(motion.section)`
  border-radius: var(--borderRadius);
  width: 80%;
  margin-top: 3rem;
  padding: 3rem 2rem 4rem 2rem;
  background: var(--grey-50);
  box-shadow: 0px 10px 30px 20px var(--grey-100);
  border-style: solid;
  border-width: 50px 70px 0px 0;
  border-color: var(--myPrimary-600) transparent transparent green;

  @media (max-width: 1230px) {
    width: 100%;
  }

  @media (max-width: 991px) {
    .form-center {
      display: grid;
      align-items: center;
      column-gap: 1rem;
      width: 100%;
      grid-template-columns: 1fr;
      row-gap: 2.5rem;
      overflow: hidden;
    }
  }

  h3 {
    margin-bottom: 3rem;
    color: var(--grey-700);
  }
  .form {
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    width: 400px;
    max-width: 100%;
    height: auto;
    background: inherit;

    .input-container {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
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
    outline: 1px rgba(255, 200, 220, 0.5) inset;
    box-shadow: 0 10px 10px 0px rgba(255, 200, 210, 1);
  }
  .form-row {
    width: 80%;
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
    width: 50%;
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

  @media (min-width: 992px) {
    .form {
      margin: 2rem 0 3rem 2rem;
      width: 90%;
      max-width: 100%;
    }
    .form-center {
      display: grid;
      align-items: center;
      column-gap: 2rem;
      width: 100%;
      overflow: hidden;
      grid-template-columns: 1fr 1fr;
      row-gap: 3.5rem;
      padding: 2rem 0 0 0;
    }
    .btn-submit,
    .clear-btn {
      margin-top: 1rem;
      width: 15rem;
    }

    .form-input {
      width: 100%;
    }
  }
`;

export default ProfileWrapper;
