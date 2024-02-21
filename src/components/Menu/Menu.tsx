import { Meal } from "../Meal/Meal";
import { MealsWrapper } from "../Meal/Meal.style";
import { MenuName, MenuWrapper } from "./Menu.styles";

export const Menu = (props) => {
  const meals = props.menu.meals.map((meal) => {
    return <Meal key={meal.id} meal={meal}></Meal>;
  });

  return (
    <MenuWrapper>
      <MenuName>{props.menu.name}</MenuName>
      <MealsWrapper>{meals}</MealsWrapper>
    </MenuWrapper>
  );
};
