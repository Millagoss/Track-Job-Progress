import styled from 'styled-components';

const RegisterWrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 450px;
    border-top: 5px solid var(--myPrimary-500);

    .input-container {
      margin-top: 3rem;
      position: relative;
    }
    .form-input {
      background-color: var(--grey-50);
      font-family: var(--bodyFont);
      color: var(--grey-700);
      font-size: 18px;
      padding: 10px 10px 10px 10px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 6px;
      border-bottom: 1px solid $sub-color;
      margin: 25px 0;
      letter-spacing: 0.5px;

      :focus {
        outline: none;
      }
    }
    .move-out {
      left: 5px;
      top: -28px;
    }
    .move-in {
      left: 12px;
      top: 5px;
    }
    .form-input-label {
      font-size: 18px;
      font-family: var(--headingFont);
      font-weight: 100;
      letter-spacing: 1.2px;
      color: var(--grey-500);
      position: absolute;
      pointer-events: none;

      transition: 300ms ease all;
    }
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default RegisterWrapper;
