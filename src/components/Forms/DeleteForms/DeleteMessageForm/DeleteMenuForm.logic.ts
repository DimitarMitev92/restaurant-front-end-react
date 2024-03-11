import { useParams } from "react-router-dom";
import { usePopupContext } from "../../../../context/PopupContext";
import { menuService } from "../../../../services/menuService";
import { mainRoute } from "../../../../static/endpoints";
import { useDeleteMessageModalLogic } from "../ReusableDelete.logic";

export const useDeleteMenuMessageModalLogic = (deletedId: string) => {
  const { hideDeleteMenuPopUp } = usePopupContext();
  const { id: restaurantId } = useParams();

  return useDeleteMessageModalLogic(
    deletedId,
    menuService.deleteMenuById,
    `${mainRoute.RESTAURANTS}/${restaurantId}`,
    hideDeleteMenuPopUp
  );
};
