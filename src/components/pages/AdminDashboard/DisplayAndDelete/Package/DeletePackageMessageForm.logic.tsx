import { usePopupContext } from "../../../../../context/PopupContext";
import { packageService } from "../../../../../services/packageService";
import { mainRoute } from "../../../../../static/endpoints";
import { useDeleteMessageModalLogic } from "../../../../Forms/DeleteForms/ReusableDelete.logic";

export const useDeletePackageMessageModalLogic = (deletedId: string) => {
  const { hideDeletePackagePopUp } = usePopupContext();

  return useDeleteMessageModalLogic(
    deletedId,
    packageService.deletePackagesById,
    mainRoute.ADMIN_DASHBOARD_DELETE_PACKAGE,
    hideDeletePackagePopUp
  );
};
