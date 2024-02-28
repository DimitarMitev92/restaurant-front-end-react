import React from "react";
import { OrderData, OrderHistoryMeal } from "./OrdersHistory.static";
import { useOrderContext } from "../../../../context/OrderProvider";
import { useNavigate } from "react-router-dom";
import {
  OrderHistoryCardOrder,
  OrderHistoryContainer,
  OrderHistoryHeading,
  OrderHistoryMealCard,
  OrderHistoryMealHeading,
  OrderHistoryMealsContainer,
} from "./OrderHistory.style";
import Button from "../../../ui-elements/Button/button";
import { routes } from "../../../../routes/routes.static";
import { useAuth } from "../../../../context/AuthProvider";
import { useOrderByClientId } from "../../../../hooks/useOrderByClientId";

export const OrdersHistory = () => {
  const { user } = useAuth();
  const { orders } = useOrderByClientId(user?.user.id);
  const { addHistoryOrderToBasket } = useOrderContext();
  const navigate = useNavigate();

  const orderAgainHandler = (order: OrderData) => {
    order.meals.forEach((meal: OrderHistoryMeal) =>
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
          <OrderHistoryMealsContainer>
            {order.meals.map((meal: OrderHistoryMeal) => (
              <OrderHistoryMealCard key={meal.id}>
                <OrderHistoryMealHeading>
                  Meal name: {meal.meal.name}
                </OrderHistoryMealHeading>
                <OrderHistoryMealHeading>
                  Count: {meal.count}
                </OrderHistoryMealHeading>
                <OrderHistoryMealHeading>
                  Price: {meal.meal.price}
                </OrderHistoryMealHeading>
                <OrderHistoryMealHeading>
                  Weight: {meal.meal.weight}
                </OrderHistoryMealHeading>
              </OrderHistoryMealCard>
            ))}
          </OrderHistoryMealsContainer>
          <Button
            label="Order again"
            onClick={() => orderAgainHandler(order)}
            color={""}
          />
        </OrderHistoryCardOrder>
      ))}
    </OrderHistoryContainer>
  );
};
