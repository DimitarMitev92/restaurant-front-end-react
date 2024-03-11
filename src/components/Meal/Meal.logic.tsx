import { useNavigate, useParams } from "react-router-dom";
import { useOrderContext } from "../../context/OrderProvider";
import { routes } from "../../routes/routes.static";
import { IMeal } from "../../static/interfaces";

export const useMeal = (
  meal: IMeal,
  menuId: string | undefined,
  showUpdateMealPopUp: () => void,
  hideUpdateMealPopUp: () => void,
  showDeleteMealPopUp: () => void,
  hideDeleteMealPopUp: () => void
) => {
  const { id } = useParams();

  const { addMealToBasket } = useOrderContext();

  const navigate = useNavigate();

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
