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
  BottomWrapper,
  OrderMealCardWrapper,
  OrderMealTitle,
  OrderMealButtonsWrapper,
  OrderCartButton,
  OrderCartCount,
  OrderCartCountWrapper,
} from "./Cart.style";
import { Address, CartItem } from "./Cart.static";
import Switch from "../ui-elements/switchButton";
import { useOrderContext } from "../../context/OrderProvider";
import { IMeal } from "../../static/interfaces";
import UnifiedInput from "../ui-elements/input";
import { BillPrintComponent } from "../Bill/BillPrint";
import { PrintPreviewModal } from "../Bill/Modal";
import { createPDF } from "./Cart.logic";

export const ShoppingCart: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addressesData, setAddressesData] = useState<Address[]>([]);
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const [showPrintPreview, setShowPrintPreview] = useState<boolean>(false);

  const { user } = useAuth();
  const addressesQuery = useAddressesByUserId(user?.user.id || "");
  const {
    meals,
    addMealToBasket,
    removeMealFromBasket,
    addAdditionalNoteForMeal,
  } = useOrderContext();
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        if (
          
          user &&
         
          addressesQuery &&
         
          addressesQuery.addresses &&
         
          addressesQuery.addresses.length > 0
        
        ) {
          setAddressesData(addressesQuery.addresses);
          setSelectedAddress(addressesQuery.addresses[0]?.id);
        }
      } catch (error) {
        console.error("Error fetching user addresses:", error);
      }
    };

    fetchAddresses();
  }, [user, address]);

  const handleSwitchClick = (mode: boolean) => {
    setDeliveryMode(mode);
    setSelectedAddress(undefined);
  };

  const handleConfirmOrder = () => {
    // TODO: Submit order implementation
  };

  const calculateTotalPrice = () => {
    let total = 0;
    meals.forEach((meal) => {
      total += meal.price * meal.count + meal.packagePrice * meal.count;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [meals]);

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
              <CartButton onClick={handleConfirmOrder}>
                Confirm Order
              </CartButton>
            </BottomWrapper>
          </>
          <CartButton onClick={handlePreviewInvoice}>Show Order</CartButton>
        </SidebarContent>
      </SidebarWrapper>
      {showInvoice && (
        <BillPrintComponent
          isOpen={showPrintPreview}
          onRequestClose={handleClosePrintPreview}
          ref={componentRef}
          cartItems={cartItems}
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
