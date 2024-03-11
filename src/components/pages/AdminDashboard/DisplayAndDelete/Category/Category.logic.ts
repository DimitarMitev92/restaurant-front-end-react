import { useEffect, useState } from "react";
import { CategoryDataApi } from "../../../../../static/interfaces";
import { categoryService } from "../../../../../services/categoryService";

export const useCategory = (onDelete: (arg0: string) => void) => {
  const [categories, setCategories] = useState<CategoryDataApi[]>([]);
  const [triggerDelete, setTriggerDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categories = await categoryService.fetchCategories();
        setCategories(categories);
      } catch (error) {
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [triggerDelete]);

  const handleDeleteCategory = async (categoryId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this category?"
      );

      if (isConfirmed) {
        await categoryService.deleteCategoryById(categoryId);
        setTriggerDelete((prev) => !prev);
        onDelete(categoryId);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return {
    categories,
    isLoading,
    handleDeleteCategory,
  };
};
