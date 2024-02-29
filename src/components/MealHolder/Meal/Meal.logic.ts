import { useNavigate, useParams } from "react-router";
import { routes } from "../../../routes/routes.static";
import { useOrderContext } from "../../../context/OrderProvider";
import { IMeal } from "../../../static/interfaces";

export const useMealLogic = (
  meal: IMeal,
  menuId: string,
  showUpdateMealPopUp: () => void,
  hideUpdateMealPopUp: () => void,
  hideDeleteMealPopUp: () => void,
  showDeleteMealPopUp: () => void
) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addMealToBasket } = useOrderContext();

  const handlePopUp = () => {
    showUpdateMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${meal.id}`);
  };

  const handleCancel = () => {
    hideUpdateMealPopUp();
  };

  const addHandler = () => {
    addMealToBasket([meal], menuId);
  };

  const handleDeleteMeal = () => {
    showDeleteMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/delete/${meal.id}`);
  };

  const handleCancelDelete = () => {
    hideDeleteMealPopUp();
  };

  return {
    handlePopUp,
    handleCancel,
    addHandler,
    handleDeleteMeal,
    handleCancelDelete,
  };
};
