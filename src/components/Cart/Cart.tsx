import React, { useEffect, useState, ChangeEvent, useRef } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useAddressesByUserId } from "../../hooks/useAddresses";
import Select from "../ui-elements/select";

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
  OrderCartButton,
  OrderCartCountWrapper,
  OrderCartCount,
  BottomWrapper,
} from "./Cart.style";
import { Address } from "./Cart.static";
import UnifiedInput from "../ui-elements/input";
import { BillPrintComponent } from "../Bill/BillPrint";
import { PrintPreviewModal } from "../Bill/Modal";
import { IMeal } from "../../static/interfaces";
import { createPDF } from "./Cart.logic";
import { useOrderContext } from "../../context/OrderProvider";
import Switch from "../ui-elements/switchButton";

export const ShoppingCart: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [addressesData, setAddressesData] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const [showPrintPreview, setShowPrintPreview] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();
  const { addresses } = useAddressesByUserId(user?.user.id || "");
  const {
    meals,
    addMealToBasket,
    removeMealFromBasket,
    addAdditionalNoteForMeal,
    totalPrice,
  } = useOrderContext();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        if (
          user &&
          addresses &&
          addresses.address &&
          addresses.address.length > 0
        ) {
          setAddressesData(addresses);
          setSelectedAddress(addresses[0]?.address);
        }
      } catch (error) {
        console.error("Error fetching user addresses:", error);
      }
    };

    fetchAddresses();
  }, [user, addresses]);

  const handleSwitchClick = (mode: boolean) => {
    setDeliveryMode(mode);
    setSelectedAddress(undefined);
  };

  const handleConfirmOrder = () => {
    // TODO: Submit order implementation
  };

  const handleAddressChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAddress = e.target.value;

    const [{ id }] = addresses.filter(
      (ad: Address) => ad.address === selectedAddress
    );

    setSelectedAddressId(id);
    setSelectedAddress(e.target.value);
  };

  const onAddMealToBasket = (meal: IMeal) => {
    addMealToBasket([meal]);
  };

  const onRemoveMealToBasket = (meal: IMeal) => {
    removeMealFromBasket(meal.id);
  };

  const onChangeAdditionalNote = (mealId: string, e: ChangeEvent) => {
    addAdditionalNoteForMeal(mealId, e.target?.value);
  };

  const handlePreviewInvoice = () => {
    setShowPrintPreview(true);
  };

  const handleClosePrintPreview = () => {
    setShowPrintPreview(false);
  };

  const handleDownload = () => {
    const bill = createPDF(meals, totalPrice);
    bill.save("invoice.pdf");
    handlePreviewInvoice();
  };

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
                    <OrderMealTitle>
                      {+meal.price * +meal.count} USD
                    </OrderMealTitle>
                    <OrderMealTitle>
                      {+meal.packagePrice * +meal.count} USD
                    </OrderMealTitle>
                    <OrderMealButtonsWrapper>
                      <OrderCartButton
                        onClick={() => onRemoveMealToBasket(meal)}
                      >
                        -
                      </OrderCartButton>
                      <OrderCartCountWrapper>
                        <OrderCartCount>{meal.count}</OrderCartCount>
                      </OrderCartCountWrapper>
                      <OrderCartButton onClick={() => onAddMealToBasket(meal)}>
                        +
                      </OrderCartButton>
                    </OrderMealButtonsWrapper>
                    <UnifiedInput
                      type="text"
                      name="additionalNote"
                      onChange={(e) => onChangeAdditionalNote(meal.id, e)}
                      placeholder="Additional note"
                    />
                  </OrderMealCardWrapper>
                );
              })}
            <BottomWrapper>
              <StyledPriceDiv>
                Total Price: ${totalPrice.toFixed(2)}
              </StyledPriceDiv>
              <CartButton
                onClick={handlePreviewInvoice}
                disabled={totalPrice <= 10}
              >
                {totalPrice <= 10
                  ? "Order must be over 10 USD"
                  : "Confirm Order"}
              </CartButton>
            </BottomWrapper>
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
