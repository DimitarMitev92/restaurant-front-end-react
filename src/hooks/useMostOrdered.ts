import { useQuery } from "react-query";
import { orderDetailService } from "../services/orderDetailService";

export const useMostOrderedMeals = () => {
  const {
    data: meals,
    isLoading,
    isError,
  } = useQuery(
    "order-details",
    () => orderDetailService.fetchMostOrderedMeal(),
    {
      retry: 1,
    }
  );

  return { meals, loading: isLoading, error: isError };
};
