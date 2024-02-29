import { useNavigate } from "react-router";
import { routes } from "../../routes/routes.static";

export const useMostOrderedLogic = (meal: { restaurant_id: string }) => {
  const navigate = useNavigate();
  const cardClickHandler = () => {
    navigate(`${routes.RESTAURANTS}/${meal.restaurant_id}`);
  };

  return {
    cardClickHandler,
  };
};
