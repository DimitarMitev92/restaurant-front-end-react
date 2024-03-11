import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../../../context/OrderProvider";
import { routes } from "../../../../routes/routes.static";

export const useOrderHistory = () => {
  const { addHistoryOrderToBasket } = useOrderContext();
  const navigate = useNavigate();

  const orderAgainHandler = (order) => {
    order.meals.forEach((meal) =>
      addHistoryOrderToBasket([meal.meal], meal.meal.menuId, meal.count)
    );
    navigate(`${routes.RESTAURANTS}/${order.restaurantId}`);
  };

  return { orderAgainHandler };
};
