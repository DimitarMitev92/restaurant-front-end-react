import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { usePopupContext } from "../../../../context/PopupContext";
import { mealService } from "../../../../services/mealService";
import { clearFilter } from "../../../../static/endpoints";
import { IRestaurantsDetails, Menu } from "../../../../static/interfaces";

export const useRestaurantDetailsLogic = () => {
  const {
    isUpdateMealPopUpVisible,
    isUpdateMenuPopUpVisible,
    isAddMealPopUpVisible,
    isDeleteMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    isDeleteRestaurantPopUpVisible,
  } = usePopupContext();
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] =
    useState<IRestaurantsDetails | null>(null);
  const [menus, setMenus] = useState<Menu[] | null>(null);
  const [allMenus, setAllMenus] = useState<Menu[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filter = (type: string) => {
    if (type === clearFilter.all) {
      setMenus(allMenus);
    } else {
      setMenus(allMenus?.filter((menu) => menu.type === type) || []);
    }
  };

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        setIsLoading(true);
        const data = await mealService.fetchMealsByRestaurantId(id);
        setRestaurantDetails(data);
        setMenus(data?.menus || []);
        setAllMenus(data?.menus || []);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [
    id,
    isUpdateMealPopUpVisible,
    isUpdateMenuPopUpVisible,
    isAddMealPopUpVisible,
    isDeleteMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    isDeleteRestaurantPopUpVisible,
  ]);

  return { restaurantDetails, filter, menus, allMenus, isLoading };
};
