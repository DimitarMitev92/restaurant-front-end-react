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

export const RestaurantsDetails = () => {
  const { restaurantDetails, filter, menus, allMenus } =
    useRestaurantDetailsLogic();

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <RestaurantWrapper>
      <FilterWrapper>
        <FilterBtnWrapper>
          <ClearAllFilter type={clearFilter.all} filter={filter} />
          {allMenus &&
            allMenus.map((menu: Menu) => {
              return <MenuFilter filter={filter} key={menu.id} menu={menu} />;
            })}
        </FilterBtnWrapper>
        {menus &&
          menus.map((menu: Menu) => {
            return <MealHolder key={menu.id} menu={menu} />;
          })}
        {menus && menus.length === 0 && <div>No menus found</div>}
      </FilterWrapper>
      <ShoppingCart />
    </RestaurantWrapper>
  );
};
