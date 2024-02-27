import { useQuery } from "react-query";
import { orderService } from "../services/orderService";

export const useOrderByClientId = (clientId: string) => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery(
    ["orders", clientId],
    () => orderService.findAllOrdersByClientId(clientId),
    {
      retry: 1,
    }
  );

  return { orders, loading: isLoading, error: isError };
};
