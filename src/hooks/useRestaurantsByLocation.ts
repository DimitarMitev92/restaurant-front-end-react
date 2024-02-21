import { useQuery } from "react-query";
import { restaurantService } from "../services/restaurantService";

export const useRestaurantsByLocationId = (locationId: string) => {
  const {
    data: restaurantsByLocation,
    isLoading,
    isError,
  } = useQuery(
    ["restaurants", locationId],
    () => restaurantService.fetchRestaurantsByLocationId(locationId),
    {
      retry: 1,
      enabled: !!locationId,
    }
  );

  return { restaurantsByLocation, loading: isLoading, error: isError };
};
