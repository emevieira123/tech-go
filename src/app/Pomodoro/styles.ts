import styled from "styled-components";

export const PomodoroContainer = styled.main`
  flex: 1;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: linear-gradient(to right, #38003f, #210746, #0c0644);
  color: #f0f0f0;

  &:not(:disabled):hover {
    opacity: 0.9;
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: #8B0000;
  color: #f0f0f0;

  &:not(:disabled):hover {
    opacity: 0.9;
  }
`;

export const HistoryLink = styled.span`
  color: #808080;
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;

  &:hover {
    color: #909090;
  }
`;
