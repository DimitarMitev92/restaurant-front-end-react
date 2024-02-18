import { useQuery } from "react-query";
import { menuService } from "../services/menuService";

export const useMenus = () => {
  const {
    data: menus,
    isLoading,
    isError,
  } = useQuery("menus", menuService.fetchMenus, { retry: 1 });

  return { menus, loading: isLoading, error: isError };
};
