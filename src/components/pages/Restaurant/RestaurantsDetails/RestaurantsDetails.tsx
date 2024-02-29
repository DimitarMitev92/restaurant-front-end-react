import { Menu } from "../../../../static/interfaces";
import { ShoppingCart } from "../../../Cart/Cart";
import {
  FilterBtnWrapper,
  FilterWrapper,
} from "../../../Menu/MenuFIlter/MenuFIlter.style";
import { MenuFilter } from "../../../Menu/MenuFIlter/MenuFilter";
import { RestaurantWrapper } from "../Restaurant.style";
import { MealHolder } from "../../../Meal/MealHolder";
import { ClearAllFilter } from "../../../Menu/MenuFIlter/ClearAllFilter";
import { clearFilter } from "../../../../static/endpoints";
import { useRestaurantDetailsLogic } from "./RestaurantsDetails.logic";
import { PulseLoader } from "react-spinners";

export const RestaurantsDetails = () => {
  const { filter, menus, allMenus, isLoading } = useRestaurantDetailsLogic();
  return (
    <RestaurantWrapper>
      {isLoading && <PulseLoader color="var(--color-green)" size={12} />}
      <FilterWrapper>
        <FilterBtnWrapper>
          <ClearAllFilter type={clearFilter.all} filter={filter} />
          {!isLoading &&
            allMenus &&
            allMenus.map((menu: Menu) => {
              return <MenuFilter filter={filter} key={menu.id} menu={menu} />;
            })}
        </FilterBtnWrapper>
        {!isLoading &&
          menus &&
          menus.map((menu: Menu) => {
            return <MealHolder key={menu.id} menu={menu} />;
          })}
        {menus && menus.length === 0 && <div>No menus found</div>}
      </FilterWrapper>
      <ShoppingCart />
    </RestaurantWrapper>
  );
};
