import { usePopupContext } from "../../../../../context/PopupContext";
import { locationService } from "../../../../../services/locationService";
import { mainRoute } from "../../../../../static/endpoints";
import { useDeleteMessageModalLogic } from "../../../../Forms/DeleteForms/ReusableDelete.logic";

export const useDeleteLocationMessageModalLogic = (deletedId: string) => {
  const { hideDeleteLocationPopUp } = usePopupContext();

  return useDeleteMessageModalLogic(
    deletedId,
    locationService.deleteLocationById,
    mainRoute.ADMIN_DASHBOARD_DELETE_LOCATION,
    hideDeleteLocationPopUp
  );
};
