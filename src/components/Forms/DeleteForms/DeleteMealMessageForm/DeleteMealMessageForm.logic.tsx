import { useParams } from "react-router-dom";
import { usePopupContext } from "../../../../context/PopupContext";
import { mealService } from "../../../../services/mealService";
import { mainRoute } from "../../../../static/endpoints";
import { useDeleteMessageModalLogic } from "../ReusableDelete.logic";

export const useDeleteMealMessageModalLogic = (deletedId: string) => {
  const { hideDeleteMealPopUp } = usePopupContext();
  const { id: restaurantId } = useParams();

  return useDeleteMessageModalLogic(
    deletedId,
    mealService.deleteMealById,
    `${mainRoute.RESTAURANTS}/${restaurantId}`,
    hideDeleteMealPopUp
  );
};
