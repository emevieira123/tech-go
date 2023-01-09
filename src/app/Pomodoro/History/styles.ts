import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: #808080;
  }
`;

export const HistoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #808080;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #909090;
    }
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: #d3d3d3;
      padding: 1rem;
      text-align: left;
      color: #181818;
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: #f0f0f0;
      border-top: 4px solid #ffffff;
      padding: 1rem;
      font-size: 0.875rem;
      font-weight: normal;
      line-height: 1.6rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: '#FFE350',
  green: '#38A64F',
  red: '#FC2B35',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => STATUS_COLORS[props.statusColor]};
  }
`;