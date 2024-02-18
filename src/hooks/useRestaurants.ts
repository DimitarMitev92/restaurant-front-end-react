import { useQuery } from "react-query";
import { restaurantService } from "../services/restaurantService";

export const useRestaurants = () => {
  const {
    data: restaurants,
    isLoading,
    isError,
  } = useQuery("restaurants", restaurantService.fetchRestaurants, { retry: 1 });

  return { restaurants, loading: isLoading, error: isError };
};
