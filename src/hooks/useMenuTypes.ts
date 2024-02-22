import { useQuery } from "react-query";
import { menuTypeService } from "../services/menuTypeService";

export const useMenuTypes = () => {
  const {
    data: menuTypes,
    isLoading,
    isError,
  } = useQuery("menuTypes", menuTypeService.fetchMenuTypes, { retry: 1 });

  return { menuTypes, loading: isLoading, error: isError };
};
