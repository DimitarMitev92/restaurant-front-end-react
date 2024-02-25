import { useQuery } from "react-query";
import { mealService } from "../services/mealService";

export const useMealsByMenu = (restaurantId: string, menuId: string) => {
  const {
    data: mealsByMenu,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["meals", menuId],
    () => mealService.fetchMealsByMenuId(restaurantId, menuId),
    {
      retry: 1,
    }
  );

  return { mealsByMenu, loading: isLoading, error: isError, refetch };
};
