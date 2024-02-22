import { MenuProps } from "../../../static/interfaces";
import { FilterHolder } from "./MenuFIlter.style";
import { Meal } from "../../Meal/Meal";
import { MealsWrapper } from "../../Meal/Meal.style";
import { MenuName } from "../Menu.styles";

export const MenuFilter: React.FC<MenuProps> = ({ menu }) => {
  const { meals } = menu;

  return (
    <>
      <FilterHolder
        onClick={() => {
          console.log(menu.type);
        }}
      >
        {menu.type}
      </FilterHolder>
      <MenuName>{menu.type}</MenuName>
      <MealsWrapper>
        {meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </MealsWrapper>
    </>
  );
};
