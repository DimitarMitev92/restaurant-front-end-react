import styled from "styled-components";
import { SwitchButtonProps } from "./swithcButton.static";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwitchButton = styled.button<SwitchButtonProps>`
  background-color: ${(props) =>
    props.$active ? "var(--color-green)" : "var(--color-yellow)"};
  color: ${(props) =>
    props.$active ? "var(--color-white)" : "var(--color-dark-gray)"};
  padding: 10px 15px;
  border: none;
  border-radius: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--color-green)" : "var(--color-yellow)"};
  }
`;
