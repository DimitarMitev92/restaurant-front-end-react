import { useQuery } from "react-query";
import { orderDetailService } from "../services/orderDetailService";

export const useOrderDetails = () => {
  const {
    data: orderDetails,
    isLoading,
    isError,
  } = useQuery("orderDetails", orderDetailService.fetchOrderDetails, {
    retry: 1,
  });

  return { orderDetails, loading: isLoading, error: isError };
};
