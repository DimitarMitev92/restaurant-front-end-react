import { Menu } from "../../../static/interfaces";
import { clearFilter } from "../../../static/endpoints";
import { RestaurantWrapper } from "./Restaurant.style";
import {
  FilterBtnWrapper,
  FilterWrapper,
} from "../../Menu/MenuFIlter/MenuFIlter.style";
import { ClearAllFilter } from "../../Menu/MenuFIlter/ClearAllFilter";
import { MenuFilter } from "../../Menu/MenuFIlter/MenuFilter";
import { MealHolder } from "../../Meal/MealHolder";
import { ShoppingCart } from "../../Cart/Cart";
import UserRoleHOC from "../../UserRoleHOC/UserRoleHOC";
import Button from "../../ui-elements/button";
import DeleteRestaurantPopUp from "../../PopUp/DeleteRestaurantPopUp";
import { UpdateRestaurant } from "../../Forms/UpdateRestaurant/UpdateRestaurant";
import PopUp from "../../PopUp/PopUp";
import { useRestaurantLogic } from "./Restaurant.logic";

export const Restaurant = () => {
  const {
    restaurantDetails,
    menus,
    filter,
    handleCancelDelete,
    handleCancelRestaurant,
    handleUpdateRestaurant,
    handleDeleteRestaurant,
    allMenus,
    isDeleteRestaurantPopUpVisible,
    isUpdateRestaurantPopUpVisible,
  } = useRestaurantLogic();

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <RestaurantWrapper>
        <FilterWrapper>
          <FilterBtnWrapper>
            <UserRoleHOC>
              <Button
                label="Delete Restaurant"
                color="var(--color-red)"
                onClick={handleDeleteRestaurant}
              ></Button>
              <Button
                label="Update Restaurant"
                color="var(--color-green)"
                onClick={handleUpdateRestaurant}
              ></Button>
            </UserRoleHOC>
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
      {isDeleteRestaurantPopUpVisible && (
        <DeleteRestaurantPopUp onCancel={handleCancelDelete} />
      )}
      {isUpdateRestaurantPopUpVisible && (
        <PopUp
          onCancel={handleCancelRestaurant}
          UpdateForm={UpdateRestaurant}
        />
      )}
    </>
  );
};
