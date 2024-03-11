import { useEffect, useState } from "react";
import { CategoryDataApi } from "../../../../../static/interfaces";
import { categoryService } from "../../../../../services/categoryService";
import { usePopupContext } from "../../../../../context/PopupContext";

export const useCategory = () => {
  const [categories, setCategories] = useState<CategoryDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isDeleteCategoryPopUpVisible,
    showDeleteCategoryPopUp,
    hideDeleteCategoryPopUp,
  } = usePopupContext();

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
  }, [isDeleteCategoryPopUpVisible]);

  const handleDeleteCategory = () => {
    showDeleteCategoryPopUp();
  };

  const handleCancelDelete = () => {
    hideDeleteCategoryPopUp();
  };

  return {
    categories,
    isLoading,
    handleDeleteCategory,
    handleCancelDelete,
  };
};
