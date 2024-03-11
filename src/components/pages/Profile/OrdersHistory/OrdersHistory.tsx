import { useAuth } from "../../../../context/AuthProvider";
import { useOrderByClientId } from "../../../../hooks/useOrderByClientId";
import {
  OrderHistoryCardOrder,
  OrderHistoryContainer,
  OrderHistoryHeading,
  OrderHistoryTable,
  OrderHistoryTableHeading,
  OrderHistoryTableRow,
} from "./OrderHistory.style";
import { OrderHistoryMeal } from "./OrdersHistory.static";
import Button from "../../../ui-elements/Button/button";
import EmptyList from "../../../EmptyList/EmptyList";
import { PulseLoader } from "react-spinners";
import { useOrderHistory } from "./OrderHistory.logic";

export const OrdersHistory = () => {
  const { user } = useAuth();
  const { orders, loading } = useOrderByClientId(user?.user.id);

  const { orderAgainHandler } = useOrderHistory();

  if (orders?.length === 0) {
    return <EmptyList message="No history order available" />;
  }
  return (
    <OrderHistoryContainer>
      {loading && <PulseLoader color="var(--color-green)" size={12} />}
      {!loading &&
        orders?.map((order) => (
          <OrderHistoryCardOrder key={order.id}>
            <OrderHistoryHeading>
              Restaurant name: {order.restaurant.name}
            </OrderHistoryHeading>
            <OrderHistoryHeading>
              Picked method: {order.pickMethod}
            </OrderHistoryHeading>
            <OrderHistoryTable>
              <thead>
                <tr>
                  <OrderHistoryTableHeading>Meal Name</OrderHistoryTableHeading>
                  <OrderHistoryTableHeading>Count</OrderHistoryTableHeading>
                  <OrderHistoryTableHeading>Price</OrderHistoryTableHeading>
                  <OrderHistoryTableHeading>Weight</OrderHistoryTableHeading>
                </tr>
              </thead>
              <tbody>
                {order.meals.map((meal: OrderHistoryMeal) => (
                  <OrderHistoryTableRow key={meal.id}>
                    <td>{meal.meal.name}</td>
                    <td>{meal.count}</td>
                    <td>${meal.meal.price}</td>
                    <td>{meal.meal.weight}g</td>
                  </OrderHistoryTableRow>
                ))}
              </tbody>
            </OrderHistoryTable>

            <Button
              color="var(--color-green)"
              label="Order again"
              onClick={() => orderAgainHandler(order)}
            />
          </OrderHistoryCardOrder>
        ))}
    </OrderHistoryContainer>
  );
};
