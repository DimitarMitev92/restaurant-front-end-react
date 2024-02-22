import styled from "styled-components";
import { CartInputProps, SwitchButtonProps } from "./Cart.static";
import { StyledButton } from "../ui-elements/button";
import InputLabel from "../ui-elements/inputLabel";

export const CartWrapper = styled.div`
  max-height: 856px;
  width: 360px;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: none;
    box-shadow: none;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const CartButton = styled(StyledButton)`
  padding: 10px 15px;
  margin-left: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const CartLabel = styled(InputLabel)`
  font-size: 0.8rem;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledCartInput = styled.div<CartInputProps>`
  label {
    font-size: 0.8rem;
    margin-top: 10px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledPriceDiv = styled.div`
  font-size: 1rem;
`

