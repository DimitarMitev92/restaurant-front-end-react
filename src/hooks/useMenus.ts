import { useQuery } from "react-query";
import { menuService } from "../services/menuService";

export const useMenus = () => {
  const {
    data: menus,
    isLoading,
    isError,
    refetch: fetchMenus,
  } = useQuery("menus", menuService.fetchMenus, { retry: 1 });

  return { menus, fetchMenus, loading: isLoading, error: isError };
};
