import { useRestaurantDetails } from "../../../../hooks/useRestaurantDetails";
import { ShoppingCart } from "../../../Cart/Cart";
import { Menu } from "../../../Menu/Menu";
import { MenuWrapper, RestaurantWrapper } from "./RestaurantsDetails.style";

export interface Meal {}

export interface IRestaurantsDetails {
  restaurant: string;
  menus: [
    {
      name: string;
      id: string;
      meals: [
        {
          id: string;
          name: string;
          description: string;
          additionalNote: string;
          picture: string;
          price: number;
          weight: number;
          startHour: string;
          endHour: string;
          startDate: string;
          endDate: string;
          categoryId: string;
          packegeId: string;
        }
      ];
    }
  ];
}

export const RestaurantsDetails = () => {
  const { restaurantDetails }: { restaurantDetails: IRestaurantsDetails } =
    useRestaurantDetails();

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  const menus = restaurantDetails.menus.map((menu) => {
    console.log(menu);

    return <Menu key={menu.id} menu={menu}></Menu>;
  });

  return (
    <RestaurantWrapper>
      <MenuWrapper>{menus}</MenuWrapper>
      <ShoppingCart />
    </RestaurantWrapper>
  );
};
