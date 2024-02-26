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
    { isOpen, onRequestClose, cartItems, totalPrice }: BillPrintComponentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const currentDate = new Date().toLocaleDateString();

    return (
      <BillDiv ref={ref}>
        <BillHeading>Bill</BillHeading>
        <DateHeading>Date: {currentDate}</DateHeading>
        <BillContentDiv>
          {cartItems.map((item, index) => (
            <CartItemDiv key={index}>
              {`${index + 1}. ${item.product.name} - Quantity: ${
                item.quantity
              } - Price: $${item.product.price.toFixed(2)}`}
            </CartItemDiv>
          ))}
          <StyledPriceDiv>Total Price: ${totalPrice.toFixed(2)}</StyledPriceDiv>
        </BillContentDiv>
      </BillDiv>
    );
  }
);
