import { forwardRef, ForwardedRef } from "react";
import { BillPrintComponentProps } from "./BillPrint.static";
import {
  BillContentDiv,
  BillDiv,
  CartItemDiv,
  BillHeading,
  DateHeading,
} from "./BillPrint.style";
import { StyledPriceDiv } from "../Cart/Cart.style";

export const BillPrintComponent = forwardRef(
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { isOpen, onRequestClose, meals, totalPrice }: BillPrintComponentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const currentDate = new Date().toLocaleDateString();
    return (
      <BillDiv ref={ref}>
        <BillHeading>Bill</BillHeading>
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
