import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #b8b8b8;
  font-size: 1.1rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid #b8b8b8;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 0.5rem;
  color: #b8b8b8;

  &:focus {
    outline: none;
    border-color: #38003f;
  }

  &::placeholder {
    color: #dcdcdc;
  }
`;



export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;