import { forwardRef, ForwardedRef } from "react";
import { BillPrintComponentProps } from "./BillPrint.static";
import {
  BillContentDiv,
  BillDiv,
  BillHeading,
  DateHeading,
  Table,
} from "./BillPrint.style";
import { StyledPriceDiv } from "../Cart/Cart.style";
import { PulseLoader } from "react-spinners";
import { useBillPrint } from "./BillPrint.logic";

export const BillPrintComponent = forwardRef(
  (
    {
      meals,
      totalPrice,
      deliveryMode,
      selectedAddressId,
    }: BillPrintComponentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const currentDate = new Date().toLocaleDateString();

    const { addressData, isLoading } = useBillPrint(selectedAddressId);

    if (isLoading) {
      return <PulseLoader color="var(--color-green)" size={5} />;
    }

    return (
      <BillDiv ref={ref}>
        <BillHeading>Bill</BillHeading>
        <BillHeading>
          Delivery mode: {deliveryMode ? "Delivery" : "On-site"}
        </BillHeading>
        <BillHeading>Address: {addressData.address}</BillHeading>
        <DateHeading>Date: {currentDate}</DateHeading>
        <BillContentDiv>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Pack. Price</th>
                <th>Add. Note</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal) => (
                <tr key={meal.id}>
                  <td>{meal.name}</td>
                  <td>{meal.count}</td>
                  <td>{meal.weight}</td>
                  <td>{meal.price}</td>
                  <td>{meal.packagePrice}</td>
                  <td>{meal.additionalNote}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <StyledPriceDiv>Total Price: ${totalPrice.toFixed(2)}</StyledPriceDiv>
        </BillContentDiv>
      </BillDiv>
    );
  }
);
