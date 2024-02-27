import { useQuery } from "react-query";
import { restaurantService } from "../services/restaurantService";

export const useRestaurant = (restaurantId: string) => {
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useQuery(
    ["restaurant", restaurantId],
    () => restaurantService.fetchRestaurantById(restaurantId),
    {
      retry: 1,
    }
  );

  return { restaurant, loading: isLoading, error: isError };
};
