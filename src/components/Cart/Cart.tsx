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
  OrderMealPrices,
} from "./Cart.style";
import { Address } from "./Cart.static";
import UnifiedInput from "../ui-elements/input";
import { BillPrintComponent } from "../Bill/BillPrint";
import { PrintPreviewModal } from "../Bill/Modal";
import { CreateOrderFormData, IMeal } from "../../static/interfaces";
import { createPDF } from "./Cart.logic";
import { useOrderContext } from "../../context/OrderProvider";
import Switch from "../ui-elements/switchButton";
import { useNavigate, useParams } from "react-router-dom";
import { orderService } from "../../services/orderService";
import { mainRoute } from "../../static/endpoints";
import { menuService } from "../../services/menuService";

export const ShoppingCart: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [addressesData, setAddressesData] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [showInvoice] = useState<boolean>(false);
  const [showPrintPreview, setShowPrintPreview] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();
  const { id } = useParams();
  const { addresses } = useAddressesByUserId(user?.user.id || "");
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

  const navigate = useNavigate();

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

  const handleConfirmOrder = async () => {
    const clientId = user?.user.id || "";
    const restaurantId = id || "";

    const mealsDataRefactor = meals.map((meal) => {
      return { mealId: meal.id, count: meal.count };
    });
    const dataForResponseOrder: CreateOrderFormData = {
      clientId: clientId,
      restaurantId: restaurantId,
      pickMethod: deliveryMode ? "delivery" : "on-site",
      additionalInfo: additionalNoteForOrder || "",
      meals: mealsDataRefactor,
    };
    await orderService.createOrder(dataForResponseOrder);
    navigate(`${mainRoute.PROFILE_ORDERS_HISTORY}`);
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

    updateDeliveryMode(deliveryMode);
    updateSelectedAddressId(selectedAddressId);
  };

  const handleClosePrintPreview = () => {
    setShowPrintPreview(false);
  };

  const handleDownload = () => {
    const bill = createPDF(meals, totalPrice);
    bill.save("bill.pdf");
    handlePreviewInvoice();
  };

  // useEffect(() => {
  //   const fetchMenusById = async () => {
  //     meals.forEach(async (meal) => {
  //       const menuData = await menuService.fetchMenuById(meal.menuId);
  //       console.log(menuData);
  //       if (menuData.restaurantId === id) {
  //         return setAreMealsFromRestaurant(true);
  //       }
  //     });
  //   };
  //   fetchMenusById();
  // }, []);

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
