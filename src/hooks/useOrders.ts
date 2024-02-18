import { useQuery } from "react-query";
import { orderService } from "../services/orderService";

export const useOrders = () => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery("orders", orderService.fetchOrders, { retry: 1 });

  return { orders, loading: isLoading, error: isError };
};
