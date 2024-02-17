import { useQuery } from "react-query";
import { restaurantService } from "../services/restaurantService";

export const useRestaurants = () => {
  const {
    data: restaurans,
    isLoading,
    isError,
  } = useQuery("restaurants", restaurantService.fetchRestaurants, { retry: 1 });

  return { restaurans, loading: isLoading, error: isError };
};
