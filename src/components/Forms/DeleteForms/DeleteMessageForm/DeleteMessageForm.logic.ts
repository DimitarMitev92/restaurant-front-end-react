import { useNavigate, useParams } from "react-router-dom";
import { usePopupContext } from "../../../../context/PopupContext";
import { mealService } from "../../../../services/mealService";
import { menuService } from "../../../../services/menuService";
import { mainRoute } from "../../../../static/endpoints";

export const useDeleteMessageFormLogic = (deletedId: string) => {
  const navigate = useNavigate();
  const { hideDeleteMenuPopUp } = usePopupContext();
  const { id: restaurantId } = useParams();

  const handleDeleteMenu = async () => {
    try {
      if (deletedId) {
        await menuService.deleteMenuById(deletedId);
        await mealService.deleteMealsByMenuId(deletedId);
      }

      hideDeleteMenuPopUp();
      navigate(`${mainRoute.RESTAURANTS}/${restaurantId}`);
    } catch (error) {
      console.error("Failed to delete menu:", error);
      hideDeleteMenuPopUp();
    }
  };
  return { handleDeleteMenu };
};
