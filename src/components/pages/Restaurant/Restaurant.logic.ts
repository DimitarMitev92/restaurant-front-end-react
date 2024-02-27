import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { usePopupContext } from "../../../context/PopupContext";
import { routes } from "../../../routes/routes.static";
import { mealService } from "../../../services/mealService";
import { clearFilter } from "../../../static/endpoints";
import { IRestaurantsDetails, Menu } from "../../../static/interfaces";
import { useRestaurant } from "../../../hooks/useRestaurant";

export const useRestaurantLogic = () => {
  const {
    isUpdateMealPopUpVisible,
    isUpdateMenuPopUpVisible,
    isAddMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    isDeleteMealPopUpVisible,
    isDeleteRestaurantPopUpVisible,
    showDeleteRestaurantPopUp,
    hideDeleteRestaurantPopUp,
    isUpdateRestaurantPopUpVisible,
    showUpdateRestaurantPopUp,
    hideUpdateRestaurantPopUp,
  } = usePopupContext();

  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurant } = useRestaurant(id!);
  const [restaurantDetails, setRestaurantDetails] =
    useState<IRestaurantsDetails | null>(null);

  const [menus, setMenus] = useState<Menu[] | null>(null);

  const [allMenus, setAllMenus] = useState<Menu[] | null>(null);

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
        const data = await mealService.fetchMealsByRestaurantId(id);
        setRestaurantDetails(data);
        setMenus(data?.menus || []);
        setAllMenus(data?.menus || []);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [
    id,
    isUpdateMealPopUpVisible,
    isUpdateMenuPopUpVisible,
    isAddMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    isDeleteMealPopUpVisible,
    isDeleteRestaurantPopUpVisible,
    isUpdateRestaurantPopUpVisible,
  ]);

  const handleDeleteRestaurant = () => {
    showDeleteRestaurantPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/delete/${id}`);
  };

  const handleCancelDelete = () => {
    hideDeleteRestaurantPopUp();
  };

  const handleUpdateRestaurant = () => {
    showUpdateRestaurantPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${id}`);
  };

  const handleCancelRestaurant = () => {
    hideUpdateRestaurantPopUp();
  };

  return {
    restaurantDetails,
    menus,
    filter,
    handleCancelDelete,
    handleCancelRestaurant,
    handleUpdateRestaurant,
    handleDeleteRestaurant,
    allMenus,
    isDeleteRestaurantPopUpVisible,
    isUpdateRestaurantPopUpVisible,restaurant
  };
};
