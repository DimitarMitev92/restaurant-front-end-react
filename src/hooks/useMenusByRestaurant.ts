import { useQuery } from "react-query";
import { menuService } from "../services/menuService";

export const useMenusByRestaurant = (restaurantId: string) => {
  const {
    data: menusByRestaurant,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["menus", restaurantId],
    () => menuService.fetchMenusByRestaurantId(restaurantId),
    {
      retry: 1,
    }
  );

  return { menusByRestaurant, loading: isLoading, error: isError, refetch };
};
