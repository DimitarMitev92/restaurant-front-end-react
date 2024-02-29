import { useNavigate, useParams } from "react-router-dom";
import { usePopupContext } from "../../../../context/PopupContext";
import { mealService } from "../../../../services/mealService";
import { mainRoute } from "../../../../static/endpoints";

export const useDeleteMealMessageFormLogic = (deletedId: string) => {
  const navigate = useNavigate();
  const { hideDeleteMealPopUp } = usePopupContext();
  const { id: restaurantId } = useParams();

  const handleDeleteMeal = async () => {
    try {
      await mealService.deleteMealById(deletedId);
      hideDeleteMealPopUp();
      navigate(`${mainRoute.RESTAURANTS}/${restaurantId}`);
    } catch (error) {
      console.error("Failed to delete meal:", error);
      hideDeleteMealPopUp();
    }
  };
  return { handleDeleteMeal };
};
