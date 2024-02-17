import { useQuery } from "react-query";
import { locationService } from "../services/locationService";

export const useLocations = () => {
  const {
    data: locations,
    isLoading,
    isError,
  } = useQuery("locations", locationService.fetchLocations, { retry: 1 });

  return { locations, loading: isLoading, error: isError };
};
