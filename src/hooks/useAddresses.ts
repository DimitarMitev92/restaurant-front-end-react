import { useQuery } from "react-query";
import { addressService } from "../services/addressService";

export const useAddressesByUserId = (userId: string) => {
  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery(
    ["addresses", userId],
    () => addressService.fetchAddressesByUserId(userId),
    {
      retry: 1,
      enabled: !!userId,
    }
  );

  return { addresses, loading: isLoading, error: isError };
};