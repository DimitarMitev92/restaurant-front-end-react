import { useQuery } from "react-query";
import { addressService } from "../services/addressService";

export const useAddressesByUserId = (userId: string) => {
  const {
    data: address,
    isLoading,
    isError,
  } = useQuery(
    ["addresse", userId],
    () => addressService.fetchAddressesByUserId(userId),
    {
      retry: 1,
      enabled: !!userId,
    }
  );

  return { address, loading: isLoading, error: isError };
};
