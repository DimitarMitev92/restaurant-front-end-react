import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { mealService } from "../services/mealService";

export const useRestaurantDetails = () => {
  const params = useParams();

  const {
    data: restaurantDetails,
    isLoading,
    isError,
  } = useQuery(
    "restaurant",
    async () => {
      return await mealService.fetchMealsByRestaurantId(params.id);
    },
    { retry: 2 }
  );

  return { restaurantDetails, loading: isLoading, error: isError };
};
