import { useQuery } from "react-query";
import { packageService } from "../services/packageService";

export const usePackages = () => {
  const {
    data: packages,
    isLoading,
    isError,
  } = useQuery("packages", packageService.fetchPackages, { retry: 1 });

  return { packages, loading: isLoading, error: isError };
};
