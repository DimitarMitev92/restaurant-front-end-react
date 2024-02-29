import { useEffect, useState } from "react";
import { MenuTypeDataApi } from "../../../../../static/interfaces";
import { menuTypeService } from "../../../../../services/menuTypeService";

export const useMenuTypeLogic = (onDelete: (arg0: string) => void) => {
  const [menuTypes, setMenuTypes] = useState<MenuTypeDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);

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
  }, [triggerDelete]);

  const handleDeleteMenuType = async (menuTypeId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this menu type?"
      );

      if (isConfirmed) {
        await menuTypeService.deleteMenuTypeById(menuTypeId);
        setTriggerDelete((prev) => !prev);
        onDelete(menuTypeId);
      }
    } catch (error) {
      console.error("Error deleting menu type:", error);
    }
  };

  return {
    menuTypes,
    isLoading,
    handleDeleteMenuType,
  };
};
