import React, { useState, useRef } from "react";
import Select from "../ui-elements/Select/select";

import {
  CartWrapper,
  SidebarWrapper,
  SidebarHeader,
  SidebarTitle,
  SidebarContent,
  CartLabel,
  CartButton,
  StyledPriceDiv,
  OrderMealCardWrapper,
  OrderMealTitle,
  OrderMealButtonsWrapper,
  OrderCartCountWrapper,
  OrderCartCount,
  BottomWrapper,
  OrderMealPrices,
  AddCartButton,
  DecrementCartButton,
} from "./Cart.style";
import { Address } from "./Cart.static";
import UnifiedInput from "../ui-elements/Input/input";
import { BillPrintComponent } from "../Modal/Bill/BillPrint";
import { PrintPreviewModal } from "../Modal/Modal";
import { useOrderContext } from "../../context/OrderProvider";
import Switch from "../ui-elements/SwitchButton/switchButton";
import { PulseLoader } from "react-spinners";
import { useCartLogic } from "./Cart.logic";

export const ShoppingCart: React.FC = () => {
  const [showInvoice] = useState<boolean>(false);

  const componentRef = useRef<HTMLDivElement>(null);

  const {
    meals,
    addMealToBasket,
    removeMealFromBasket,
    addAdditionalNoteForMeal,
    additionalNoteForOrder,
    totalPrice,
    updateDeliveryMode,
    updateSelectedAddressId,
  } = useOrderContext();

  const {
    deliveryMode,
    addresses,
    selectedAddress,
    isLoading,
    showPrintPreview,
    selectedAddressId,
    handleSwitchClick,
    handleConfirmOrder,
    handleAddressChange,
    onAddMealToBasket,
    onRemoveMealToBasket,
    onChangeAdditionalNote,
    handleClosePrintPreview,
    handleDownload,
    handlePreviewInvoice,
  } = useCartLogic(
    meals,
    addMealToBasket,
    removeMealFromBasket,
    addAdditionalNoteForMeal,
    additionalNoteForOrder,
    totalPrice,
    updateDeliveryMode,
    updateSelectedAddressId
  );

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={12} />;
  }

  return (
    <CartWrapper>
      <SidebarWrapper>
        <SidebarHeader>
          <SidebarTitle>Cart</SidebarTitle>
          <Switch
            deliveryMode={deliveryMode}
            handleSwitchClick={handleSwitchClick}
          />
        </SidebarHeader>
        <SidebarContent>
          <>
            {deliveryMode && addresses && (
              <>
                <CartLabel htmlFor="address-select">
                  Select Delivery Address:
                </CartLabel>
                <Select
                  onChange={handleAddressChange}
                  value={selectedAddress || ""}
                  options={
                    addresses &&
                    addresses.map((address: Address) => ({
                      value: address.address,
                      label: `${address.address}`,
                    }))
                  }
                />
              </>
            )}
            {meals &&
              meals.map((meal) => {
                return (
                  <OrderMealCardWrapper key={meal.id}>
                    <OrderMealTitle>{meal.name}</OrderMealTitle>
                    <OrderMealPrices>
                      meal price: {+meal.price * +meal.count} USD
                    </OrderMealPrices>
                    <OrderMealPrices>
                      package price: {+meal.packagePrice * +meal.count} USD
                    </OrderMealPrices>
                    <OrderMealButtonsWrapper>
                      <DecrementCartButton
                        onClick={() => onRemoveMealToBasket(meal)}
                      ></DecrementCartButton>
                      <OrderCartCountWrapper>
                        <OrderCartCount>{meal.count}</OrderCartCount>
                      </OrderCartCountWrapper>
                      <AddCartButton
                        onClick={() => onAddMealToBasket(meal)}
                      ></AddCartButton>
                    </OrderMealButtonsWrapper>
                    <UnifiedInput
                      type="text"
                      name="additionalNote"
                      onChange={(e) => onChangeAdditionalNote(meal.id, e)}
                      placeholder="Additional note"
                      value={meal.additionalNote || ""}
                    />
                  </OrderMealCardWrapper>
                );
              })}
            {meals.length > 0 && (
              <BottomWrapper>
                <StyledPriceDiv>
                  Total Price: ${totalPrice.toFixed(2)}
                </StyledPriceDiv>
                <CartButton
                  onClick={handlePreviewInvoice}
                  disabled={
                    totalPrice <= 10 || (deliveryMode && !selectedAddressId)
                  }
                >
                  {totalPrice <= 10
                    ? "Order must be over 10 USD"
                    : deliveryMode && !selectedAddressId
                    ? "Please select an address"
                    : "Confirm Order"}
                </CartButton>
              </BottomWrapper>
            )}
          </>
        </SidebarContent>
      </SidebarWrapper>
      {showInvoice && (
        <BillPrintComponent
          isOpen={showPrintPreview}
          onRequestClose={handleClosePrintPreview}
          ref={componentRef}
          meals={meals}
          totalPrice={totalPrice}
          deliveryMode={deliveryMode}
          selectedAddressId={selectedAddressId}
        />
      )}
      <PrintPreviewModal
        isOpen={showPrintPreview}
        onClose={handleClosePrintPreview}
        componentRef={componentRef}
        onDownload={handleDownload}
        onConfirmOrder={handleConfirmOrder}
      />
    </CartWrapper>
  );
};
