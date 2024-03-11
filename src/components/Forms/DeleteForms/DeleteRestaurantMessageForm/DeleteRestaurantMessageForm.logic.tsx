import { useNavigate } from "react-router-dom";
import { usePopupContext } from "../../../../context/PopupContext";
import { mainRoute } from "../../../../static/endpoints";
import { restaurantService } from "../../../../services/restaurantService";

export const useDeleteRestaurantMessageFormLogic = (deletedId: string) => {
  const navigate = useNavigate();
  const { hideDeleteRestaurantPopUp } = usePopupContext();

  const handleDeleteRestaurant = async () => {
    try {
      await restaurantService.deleteRestaurantById(deletedId);
      hideDeleteRestaurantPopUp();
      navigate(`${mainRoute.RESTAURANTS}`);
    } catch (error) {
      console.error("Failed to delete restaurants:", error);
      hideDeleteRestaurantPopUp();
    }
  };
  return { handleDeleteRestaurant };
};
