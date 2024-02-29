import { MostOrderedMealsProps } from "../../static/interfaces";
import { Card, ImageContainer, FoodImage } from "./MostOrderedMeal.style";
import { useMostOrderedLogic } from "./MostOrderedMeal.logic";

export const MostOrderedMeal: React.FC<MostOrderedMealsProps> = ({ meal }) => {
  const { cardClickHandler } = useMostOrderedLogic(meal);

  return (
    <Card onClick={cardClickHandler}>
      <h3 style={{ color: " var(--color-green)" }}>{meal.meal_name}</h3>
      <sub>{meal.restaurant_name}</sub>
      <ImageContainer>
        <FoodImage src={meal.meal_picture} alt={meal.meal_name} />
      </ImageContainer>
      <div>Ordered</div>
      <div>{meal.total_meal_count}</div>
    </Card>
  );
};
