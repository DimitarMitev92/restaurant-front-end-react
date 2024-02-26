import React from "react";
import styled from "styled-components";

export interface SwitchButtonProps {
  $active: boolean;
}

export interface DeliverySwitchProps {
  deliveryMode: boolean;
  handleSwitchClick: (mode: boolean) => void;
}

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwitchButton = styled.button<SwitchButtonProps>`
  background-color: ${(props) => (props.$active ? "#4caf50" : "#ffc244")};
  color: ${(props) => (props.$active ? "#fff" : "#333")};
  padding: 10px 15px;
  border: none;
  border-radius: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$active ? "#4caf50" : "#ffc244")};
  }
`;

const Switch: React.FC<DeliverySwitchProps> = ({
  deliveryMode,
  handleSwitchClick,
}) => {
  return (
    <FlexContainer>
      <SwitchButton
        onClick={() => handleSwitchClick(true)}
        $active={deliveryMode}
      >
        Delivery
      </SwitchButton>
      <SwitchButton
        onClick={() => handleSwitchClick(false)}
        $active={!deliveryMode}
      >
        On-site
      </SwitchButton>
    </FlexContainer>
  );
};

export default Switch;
