import React from "react";
import { DeliverySwitchProps } from "./swithcButton.static";
import { FlexContainer, SwitchButton } from "./switchButton.style";

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
