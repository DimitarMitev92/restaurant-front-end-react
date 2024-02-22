import { MenuProps } from "../../static/interfaces";
import { Meal } from "../Meal/Meal";
import { MealsWrapper } from "../Meal/Meal.style";
import { MenuWrapper } from "./Menu.styles";

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const meals = menu.meals.map((meal) => {
    return <Meal key={meal.id} meal={meal}></Meal>;
  });

  return (
    <MenuWrapper>
      <MealsWrapper>{meals}</MealsWrapper>
    </MenuWrapper>
  );
};
