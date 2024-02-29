import { useNavigate } from "react-router";
import { useAuth } from "../../../../context/AuthProvider";
import { useOrderContext } from "../../../../context/OrderProvider";
import { useOrderByClientId } from "../../../../hooks/useOrderByClientId";
import { routes } from "../../../../routes/routes.static";

export const useOrderHistoryLogic = () => {
  const { user } = useAuth();
  const { orders, loading } = useOrderByClientId(user?.user.id);
  const { addHistoryOrderToBasket } = useOrderContext();
  const navigate = useNavigate();

  const orderAgainHandler = (order: { meals: any[]; restaurantId: any }) => {
    order.meals.forEach((meal) =>
      addHistoryOrderToBasket([meal.meal], meal.meal.menuId, meal.count)
    );
    navigate(`${routes.RESTAURANTS}/${order.restaurantId}`);
  };

  return {
    orders,
    loading,
    orderAgainHandler,
  };
};
