import React, { useEffect, useState, ChangeEvent } from "react";
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

export const ShoppingCart: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addressesData, setAddressesData] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const { user } = useAuth();
  const { addresses } = useAddressesByUserId(user?.user.id || "");
  const { meals, addMealToBasket, removeMealFromBasket } = useOrderContext();

  console.log(meals);

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

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

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
        </SidebarContent>
      </SidebarWrapper>
    </CartWrapper>
  );
};
