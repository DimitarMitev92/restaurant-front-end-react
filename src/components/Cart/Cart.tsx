import React, { useState } from "react";
import { useSwipeable, SwipeableHandlers } from "react-swipeable";
import {
  SidebarWrapper,
  SidebarHeader,
  SidebarTitle,
  SidebarContent,
  CartWrapper,
} from "./Cart.style";
import UnifiedInput from "../ui-elements/input";
import Switch from "./Switch";
import InputLabel from "../ui-elements/inputLabel";
import TextArea from "../ui-elements/textArea";
import { Button } from "../pages/Restaurants/RestaurantsCard/RestaurantCard.style";

export const ShoppingCart: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [showNoteTextArea, setShowNoteTextArea] = useState<boolean>(false);
  const [additionalNote, setAdditionalNote] = useState<string>("");

  const handleSwitchClick = (mode: boolean) => {
    setDeliveryMode(mode);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalNote(e.target.value);
  };

  const handleCheckButton = () => {
    setShowNoteTextArea(!showNoteTextArea);
  };

  const handlers: SwipeableHandlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Right") {
        setDeliveryMode(true);
      } else if (eventData.dir === "Left") {
        setDeliveryMode(false);
      }
    },
  });

  const handleConfirmOrder = () => {
    // TODO: Create order
  };

  return (
    <CartWrapper {...handlers}>
      <SidebarWrapper>
        <SidebarHeader>
          <SidebarTitle>Cart</SidebarTitle>
          <Switch
            deliveryMode={deliveryMode}
            handleSwitchClick={handleSwitchClick}
          />
        </SidebarHeader>
        <SidebarContent>
          {/* Your cart items will go here */}
          {/* Example: 
          <CartItem />
          <CartItem />
          */}
            <UnifiedInput
              type="checkbox"
              checked={showNoteTextArea}
              onChange={handleCheckButton} value={""}/>
            <InputLabel htmlFor={"additional note"} >Additional Note</InputLabel>
          {showNoteTextArea && (
            <TextArea
              placeholder="Additional Note"
              value={additionalNote}
              onChange={handleNoteChange}
            />
          )}
        </SidebarContent>
           <Button onClick={handleConfirmOrder}>
            Confirm Order
          </Button>
      </SidebarWrapper>
    </CartWrapper>
  );
};

