import { usePopupContext } from "../../../../context/PopupContext";
import { restaurantService } from "../../../../services/restaurantService";
import { mainRoute } from "../../../../static/endpoints";
import {  useDeleteMessageModalLogic } from "../ReusableDelete.logic";

export const useDeleteRestaurantMessageModalLogic = (deletedId: string) => {
  const { hideDeleteRestaurantPopUp } = usePopupContext();

  return useDeleteMessageModalLogic(
    deletedId,
    restaurantService.deleteRestaurantById,
    mainRoute.RESTAURANTS,
    hideDeleteRestaurantPopUp
  );
};
