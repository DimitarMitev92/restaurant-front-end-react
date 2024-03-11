import { useEffect, useState } from "react";
import { MenuTypeDataApi } from "../../../../../static/interfaces";
import { menuTypeService } from "../../../../../services/menuTypeService";
import { usePopupContext } from "../../../../../context/PopupContext";

export const useMenuType = () => {
  const [menuTypes, setMenuTypes] = useState<MenuTypeDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isDeleteMenuTypePopUpVisible,
    showDeleteMenuTypePopUp,
    hideDeleteMenuTypePopUp,
  } = usePopupContext();

  useEffect(() => {
    const fetchMenuTypes = async () => {
      try {
        setIsLoading(true);
        const menuTypes = await menuTypeService.fetchMenuTypes();
        setMenuTypes(menuTypes);
      } catch (error) {
        setMenuTypes([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenuTypes();
  }, [isDeleteMenuTypePopUpVisible]);

  const handleDeleteMenuType = () => {
    showDeleteMenuTypePopUp();
  };

  const handleCancelDelete = () => {
    hideDeleteMenuTypePopUp();
  };

  return {
    menuTypes,
    isLoading,
    handleDeleteMenuType,
    handleCancelDelete,
  };
};
