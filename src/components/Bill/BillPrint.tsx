import { forwardRef, ForwardedRef, useEffect, useState } from "react";
import { BillPrintComponentProps } from "./BillPrint.static";
import {
  BillContentDiv,
  BillDiv,
  CartItemDiv,
  BillHeading,
  DateHeading,
} from "./BillPrint.style";
import { StyledPriceDiv } from "../Cart/Cart.style";
import { addressService } from "../../services/addressService";

export const BillPrintComponent = forwardRef(
  (
    {
      isOpen,
      onRequestClose,
      meals,
      totalPrice,
      deliveryMode,
      selectedAddressId,
    }: BillPrintComponentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const currentDate = new Date().toLocaleDateString();
    const [addressData, setAddressData] = useState({ address: "" });

    useEffect(() => {
      const fetchAddressData = async () => {
        try {
          const data = await addressService.fetchAddressByUd(selectedAddressId);
          setAddressData(data);
        } catch (error) {
          console.error("Error fetching address data:", error);
        }
      };

      fetchAddressData();
    }, [selectedAddressId]);

    return (
      <BillDiv ref={ref}>
        <BillHeading>Bill</BillHeading>
        <BillHeading>
          Delivery mode: {deliveryMode ? "Delivery" : "On-site"}
        </BillHeading>
        <BillHeading>Address: {addressData.address}</BillHeading>
        <DateHeading>Date: {currentDate}</DateHeading>
        <BillContentDiv>
          {meals.map((meal) => (
            <CartItemDiv key={meal.id}>
              {meal.name} - {meal.price} - {meal.count} - {meal.weight}
            </CartItemDiv>
          ))}
          <StyledPriceDiv>Total Price: ${totalPrice.toFixed(2)}</StyledPriceDiv>
        </BillContentDiv>
      </BillDiv>
    );
  }
);
