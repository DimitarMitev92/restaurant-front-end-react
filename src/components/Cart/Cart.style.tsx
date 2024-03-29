import styled from "styled-components";
import { CartInputProps, SwitchButtonProps } from "./Cart.static";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { StyledButton } from "../ui-elements/SubmitFormButton/submitFormButton.style";
import InputLabel from "../ui-elements/InputLabel/inputLabel";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 360px;
  padding: 30px;
  padding-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 0;
  width: 320px;
  height: 75vh;
  background: var(--color-white);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 7px;
  transform: translateX(0);

  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: none;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
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
  padding: 20px;
  padding-bottom: 40px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin: 4px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(217, 217, 217, 1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(196, 196, 196);
  }
  height: 88%;
  @media (max-width: 768px) {
    overflow-y: auto;
    height: 78%;
  }
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
  font-size: 12px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: var(--color-red);
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    margin-bottom: 10px;
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
  gap: 15px;
  padding: 0.5em;
`;

export const AddCartButton = styled(IoIosAddCircle)`
  width: 30px;
  font-size: 40px;
  color: var(--color-green);
`;
export const DecrementCartButton = styled(IoIosRemoveCircle)`
  width: 30px;
  font-size: 40px;
  color: var(--color-green);
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
  padding: 10px;
  text-align: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: var(--color-white);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  bottom: 20px;
  padding: 1rem;
`;

export const CreateAddressButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateAddressButton = styled.button`
  padding: 10px 15px;
  margin-bottom: 1em;
  font-size: 12px;
  border: none;
  border-radius: 2px;
  background-color: var(--color-green);
  color: var(--color-white);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: var(--color-red);
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;
