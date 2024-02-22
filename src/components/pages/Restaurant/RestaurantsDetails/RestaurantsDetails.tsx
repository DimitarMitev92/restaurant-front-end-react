import { useRestaurantDetails } from "../../../../hooks/useRestaurantDetails";
import { IRestaurantsDetails } from "../../../../static/interfaces";
import { ShoppingCart } from "../../../Cart/Cart";
import { FilterWrapper } from "../../../Menu/MenuFIlter/MenuFIlter.style";
import { MenuFilter } from "../../../Menu/MenuFIlter/MenuFilter";
import { RestaurantWrapper } from "./RestaurantsDetails.style";

export const RestaurantsDetails = () => {
  const { restaurantDetails }: { restaurantDetails: IRestaurantsDetails } =
    useRestaurantDetails();

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <RestaurantWrapper>
      <FilterWrapper>
        {restaurantDetails.menus?.map((menu) => {
          return <MenuFilter key={menu.id} menu={menu} />;
        })}
      </FilterWrapper>
      <ShoppingCart />
    </RestaurantWrapper>
  );
};
