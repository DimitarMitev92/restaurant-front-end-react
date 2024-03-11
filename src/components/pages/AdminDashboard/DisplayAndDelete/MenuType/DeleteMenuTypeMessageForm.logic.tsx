import { usePopupContext } from "../../../../../context/PopupContext";
import { menuTypeService } from "../../../../../services/menuTypeService";
import { mainRoute } from "../../../../../static/endpoints";
import { useDeleteMessageModalLogic } from "../../../../Forms/DeleteForms/ReusableDelete.logic";

export const useDeleteMenuTypeModalLogic = (deletedId: string) => {
  const { hideDeleteMenuTypePopUp } = usePopupContext();

  return useDeleteMessageModalLogic(
    deletedId,
    menuTypeService.deleteMenuTypeById,
    mainRoute.ADMIN_DASHBOARD_DELETE_MENU_TYPE,
    hideDeleteMenuTypePopUp
  );
};
