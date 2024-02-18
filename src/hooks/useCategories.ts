import { useQuery } from "react-query";
import { categoryService } from "../services/categoryService";

export const useCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery("categories", categoryService.fetchCategories, { retry: 1 });

  return { categories, loading: isLoading, error: isError };
};
