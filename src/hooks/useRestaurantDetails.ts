import { useQuery } from "react-query";
import { restaurantService } from "../services/restaurantService";
import { useParams } from "react-router-dom";

export const useRestaurantDetails = () => {
  const params = useParams();

  const {
    data: restaurantDetails,
    isLoading,
    isError,
  } = useQuery(
    "restaurant",
    async () => {
      return await restaurantService.fetchMealsByRestaurantId(params.id);
    },
    { retry: 2 }
  );

  return { restaurantDetails, loading: isLoading, error: isError };
};
