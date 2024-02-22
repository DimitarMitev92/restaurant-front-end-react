import { useEffect, useState } from "react";
import { useRestaurantDetails } from "../../../../hooks/useRestaurantDetails";
import { IRestaurantsDetails, Menu } from "../../../../static/interfaces";
import { ShoppingCart } from "../../../Cart/Cart";
import {
  FilterBtnWrapper,
  FilterWrapper,
} from "../../../Menu/MenuFIlter/MenuFIlter.style";
import { MenuFilter } from "../../../Menu/MenuFIlter/MenuFilter";
import { RestaurantWrapper } from "./RestaurantsDetails.style";
import { MealHolder } from "../../../Meal/MealHolder";
import { ClearAllFilter } from "../../../Menu/MenuFIlter/ClearAllFilter";
import { clearFilter } from "../../../../static/endpoints";

export const RestaurantsDetails = () => {
  const { restaurantDetails }: { restaurantDetails: IRestaurantsDetails } =
    useRestaurantDetails();
  const [menus, setMenus] = useState<Menu[]>(restaurantDetails?.menus);
  const [allMenus, setAllMenus] = useState<Menu[]>(restaurantDetails?.menus);

  const filter = (type: string) => {
    if (type === clearFilter.all) {
      setMenus(allMenus);
    } else {
      setMenus(allMenus.filter((menu) => menu.type === type));
    }
  };

  useEffect(() => {
    setMenus(restaurantDetails?.menus);
    setAllMenus(restaurantDetails?.menus);
  }, [restaurantDetails, setAllMenus]);

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
      </FilterWrapper>
      <ShoppingCart />
    </RestaurantWrapper>
  );
};
