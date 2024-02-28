import React from "react";
import { useAuth } from "../../../../context/AuthProvider";
import { useOrderContext } from "../../../../context/OrderProvider";
import { useOrderByClientId } from "../../../../hooks/useOrderByClientId";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes/routes.static";
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

export const OrdersHistory = () => {
  const { user } = useAuth();
  const { orders } = useOrderByClientId(user?.user.id);
  const { addHistoryOrderToBasket } = useOrderContext();
  const navigate = useNavigate();

  const orderAgainHandler = (order) => {
    order.meals.forEach((meal) =>
      addHistoryOrderToBasket([meal.meal], meal.meal.menuId, meal.count)
    );
    navigate(`${routes.RESTAURANTS}/${order.restaurantId}`);
  };

  return (
    <OrderHistoryContainer>
      {orders?.map((order) => (
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
