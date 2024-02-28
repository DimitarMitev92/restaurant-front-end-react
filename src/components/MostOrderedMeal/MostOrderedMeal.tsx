import { useNavigate } from "react-router";
import { MostOrderedMealsProps } from "../../static/interfaces";
import { Card } from "./MostOrderedMeal.style";
import { routes } from "../../routes/routes.static";

export const MostOrderedMeal: React.FC<MostOrderedMealsProps> = ({ meal }) => {
  const navigate = useNavigate();
  const cardClickHandler = () => {
    navigate(`${routes.RESTAURANTS}/${meal.restaurant_id}`);
  };
  return (
    <Card onClick={cardClickHandler}>
      <h3>{meal.meal_name}</h3>
      <sub>{meal.restaurant_name}</sub>
      <div>
        <img src={meal.meal_picture} alt={meal.meal_name} />
      </div>
      <div>Ordered</div>
      <div>{meal.total_meal_count}</div>
    </Card>
  );
};
