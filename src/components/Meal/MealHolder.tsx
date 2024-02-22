import { MealHolderProps } from "../../static/interfaces";
import { MenuName } from "../Menu/Menu.styles";
import { Meal } from "./Meal";
import { MealsWrapper } from "./Meal.style";

export const MealHolder: React.FC<MealHolderProps> = ({ menu }) => {
  return (
    <>
      <MealsWrapper>
        <MenuName>{menu.type}</MenuName>
        {menu.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </MealsWrapper>
    </>
  );
};
