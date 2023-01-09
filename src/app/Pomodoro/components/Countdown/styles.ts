import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: #b8b8b8;

  display: flex;
  gap: 1rem;

  span {
    background: #f0f0f0;
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: #38003f;
  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`;