import { useQuery } from "react-query";
import { mealService } from "../services/mealService";

export const useMeals = () => {
  const {
    data: meals,
    isLoading,
    isError,
  } = useQuery("meals", mealService.fetchMeals, {
    retry: 1,
  });

  return { meals, loading: isLoading, error: isError };
};
