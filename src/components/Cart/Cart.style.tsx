import styled from "styled-components";
import { CartInputProps, SwitchButtonProps } from "./Cart.static";
import { StyledButton } from "../ui-elements/button";
import InputLabel from "../ui-elements/inputLabel";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
  width: 360px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SidebarWrapper = styled.div`
  top: 85px;
  width: 320px;
  height: 90%;
  background: var(--color-white);
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
  border-bottom: 1px solid var(--color-white-smoke);
  border-radius: 6px;
`;

export const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-black);
`;

export const SidebarContent = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwitchButton = styled.button<SwitchButtonProps>`
  background-color: ${(props) =>
    props.active ? "var(--color-green)" : "var(--color-yellow)"};
  color: ${(props) =>
    props.active ? "var(--color-white)" : "var(--color-black)"};
  padding: 10px 15px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--color-green)" : "var(--color-yellow)"};
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

  &:disabled {
    background-color: var(--color-bright-red);
    cursor: not-allowed;
  }

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

export const OrderMealCardWrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  padding: 0.8rem;
  margin-bottom: 0.5em;
`;

export const OrderMealTitle = styled.h2`
  font-size: 1em;
  color: var(--color-black);
`;

export const OrderMealPrices = styled.h3`
  font-size: 0.8em;
  color: var(--color-green);
`;

export const OrderMealButtonsWrapper = styled.div`
  background-color: var(--color-yellow);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
`;

export const OrderCartButton = styled(CartButton)`
  width: 2.6em;
  height: 2.6em;
  border-radius: 50%;
`;

export const OrderCartCountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderCartCount = styled.p`
  text-align: center;
`;

export const StyledPriceDiv = styled.div`
  font-size: 1rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  position: fixed;
  margin-top: 20px;
  background-color: var(--color-white);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  bottom: 20px;
  padding: 1rem;
`;
