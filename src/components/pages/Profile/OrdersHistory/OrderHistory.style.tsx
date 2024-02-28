import styled from "styled-components";
import { StyledButton } from "../../../ui-elements/Button/button.style";

export const OrderHistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 1378px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const OrderHistoryHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const OrderHistoryCardOrder = styled.div`
  background-color: var(--color-white-smoke);
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 756px) {
    width: 100%;
  }
`;

export const OrderHistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const OrderHistoryTableHeading = styled.th`
  background-color: #f4f4f4;
  font-size: 1em;
  text-align: left;
  padding: 8px;
`;

export const OrderHistoryTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  & td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
`;
export const OrderAgainButton = styled(StyledButton)`
  margin-top: 10px;
`;
