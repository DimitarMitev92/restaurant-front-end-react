import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { usePopupContext } from "../../../../context/PopupContext";
import { mealService } from "../../../../services/mealService";

export const RestaurantsDetails = () => {
  const { isPopUpVisible } = usePopupContext();
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] =
    useState<IRestaurantsDetails | null>(null);
  const [menus, setMenus] = useState<Menu[] | null>(null);
  const [allMenus, setAllMenus] = useState<Menu[] | null>(null);

  const filter = (type: string) => {
    if (type === clearFilter.all) {
      setMenus(allMenus);
    } else {
      setMenus(allMenus?.filter((menu) => menu.type === type) || []);
    }
  };

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const data = await mealService.fetchMealsByRestaurantId(id);
        setRestaurantDetails(data);
        setMenus(data?.menus || []);
        setAllMenus(data?.menus || []);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [id, isPopUpVisible]);

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
