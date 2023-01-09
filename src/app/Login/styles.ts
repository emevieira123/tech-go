import styled from "styled-components";

export const LoginContainer = styled.div`
  background: linear-gradient(to right, #38003F, #210746, #0C0644);
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormLoginContainer = styled.div`
  width: 25rem;
  height: 30rem;
  background: #f4f4f6;
  padding: 1rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #121414;
    margin-top: 1.5rem;
  }

  form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    color: #121414;
    display: block;
  }

  input {
    height: 3rem;
    width: 100%;
    border: 0;
    border-bottom: 1px solid gray;
    background: transparent;
    padding: 0 8px;
    font-size: 1.25rem;
    color: gray;
    outline: none;
  }
  
  button {
    background: #210746;
    color: #f4f4f6;
    width: 100%;
    height: 3rem;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1.25rem;
    transition: all 0.35s !important;

    :hover {
      background: #38003F;
    }
  }
`;

export const SocialLoginContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  i {
    color: #DB4437;
    cursor: pointer;

    :hover {
      color: #E57368;
    }
  }
`;