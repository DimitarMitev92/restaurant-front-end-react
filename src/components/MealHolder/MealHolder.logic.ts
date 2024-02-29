import { useNavigate, useParams } from "react-router";
import { routes } from "../../routes/routes.static";

export const useMealHolderLogic = (
  menu: { id: string },
  showUpdateMenuPopUp: () => void,
  hideUpdateMenuPopUp: () => void,
  showAddMealPopUp: () => void,
  hideAddMealPopUp: () => void,
  hideDeleteMenuPopUp: () => void,
  showDeleteMenuPopUp: () => void
) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePopUp = () => {
    showUpdateMenuPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${menu.id}`);
  };

  const handleCancel = () => {
    hideUpdateMenuPopUp();
  };
  const handleCancelCreate = () => {
    hideAddMealPopUp();
  };

  const handleAddMeal = () => {
    showAddMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/create/${menu.id}`);
  };

  const handleDeleteMenu = () => {
    showDeleteMenuPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/delete/${menu.id}`);
  };

  const handleCancelDelete = () => {
    hideDeleteMenuPopUp();
  };

  return {
    handlePopUp,
    handleCancel,
    handleCancelCreate,
    handleAddMeal,
    handleDeleteMenu,
    handleCancelDelete,
  };
};
