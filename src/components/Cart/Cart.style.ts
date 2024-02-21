import styled from "styled-components";
import { SwitchButtonProps } from "./Cart.static";

export const CartWrapper = styled.div`
  max-height: 856px;
  width: 344px;
`;

export const SidebarWrapper = styled.div`
  top: 85px;
  width: 320px;
  height: 90%;
  background: white;
  z-index: 1000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 7px;
  transform: translateX(0);
  padding: 5px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 6px;
`;

export const SidebarTitle = styled.h2`
  color: var(--xds-color-content-default);
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const SidebarContent = styled.div`
  padding: 16px;
  overflow-y: auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwitchButton = styled.button<SwitchButtonProps>`
  background-color: ${(props) => (props.active ? "#4caf50" : "#ffc244")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  padding: 10px 15px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#4caf50" : "#ffc244")};
  }
`;
