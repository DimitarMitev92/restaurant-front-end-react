import { usePopupContext } from "../../../../../context/PopupContext";
import { categoryService } from "../../../../../services/categoryService";
import { mainRoute } from "../../../../../static/endpoints";
import { useDeleteMessageModalLogic } from "../../../../Forms/DeleteForms/ReusableDelete.logic";

export const useDeleteCategoryMessageModalLogic = (deletedId: string) => {
  const { hideDeleteCategoryPopUp } = usePopupContext();

  return useDeleteMessageModalLogic(
    deletedId,
    categoryService.deleteCategoryById,
    mainRoute.ADMIN_DASHBOARD_DELETE_CATEGORY,
    hideDeleteCategoryPopUp
  );
};
