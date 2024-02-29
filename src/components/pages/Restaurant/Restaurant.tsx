import { Menu } from "../../../static/interfaces";
import { clearFilter } from "../../../static/endpoints";
import {
  AdminButtonsContainer,
  RestaurantNameContainer,
  RestaurantWrapper,
  WorkingHoursContainer,
} from "./Restaurant.style";
import {
  FilterBtnWrapper,
  FilterWrapper,
} from "../../Menu/MenuFIlter/MenuFIlter.style";
import { ClearAllFilter } from "../../Menu/MenuFIlter/ClearAllFilter";
import { MenuFilter } from "../../Menu/MenuFIlter/MenuFilter";
import { MealHolder } from "../../Meal/MealHolder";
import { ShoppingCart } from "../../Cart/Cart";
import UserRoleHOC from "../../UserRoleHOC/UserRoleHOC";
import DeleteRestaurantPopUp from "../../PopUp/DeleteRestaurantPopUp";
import { UpdateRestaurant } from "../../Forms/UpdateRestaurant/UpdateRestaurant";
import PopUp from "../../PopUp/PopUp";
import { useRestaurantLogic } from "./Restaurant.logic";
import { StyledEditButton, StyledRemoveButton } from "../../Meal/Meal.style";
import EmptyList from "../../EmptyList/EmptyList";
import { PulseLoader } from "react-spinners";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";

export const Restaurant = () => {
  const {
    isLoading,
    menus,
    filter,
    handleCancelDelete,
    handleCancelRestaurant,
    handleUpdateRestaurant,
    handleDeleteRestaurant,
    allMenus,
    isDeleteRestaurantPopUpVisible,
    isUpdateRestaurantPopUpVisible,
    restaurant,
    openHourFormatted,
    closeHourFormatted,
  } = useRestaurantLogic();

  const hasMenus = menus && menus.length > 0;
  return (
    <>
      {isLoading && <PulseLoader color="var(--color-green)" size={12} />}
      {!isLoading && (
        <RestaurantWrapper>
          <FilterWrapper>
            <RestaurantNameContainer>
              {restaurant?.name}
              <UserRoleHOC>
                <AdminButtonsContainer>
                  <StyledEditButton
                    onClick={handleUpdateRestaurant}
                  ></StyledEditButton>
                  <StyledRemoveButton
                    onClick={handleDeleteRestaurant}
                  ></StyledRemoveButton>
                </AdminButtonsContainer>
              </UserRoleHOC>
            </RestaurantNameContainer>
            <WorkingHoursContainer>
              Working hours: {openHourFormatted} - {closeHourFormatted}
            </WorkingHoursContainer>
            {hasMenus && (
              <FilterBtnWrapper>
                <ClearAllFilter type={clearFilter.all} filter={filter} />
                {allMenus?.map((menu: Menu) => (
                  <MenuFilter filter={filter} key={menu.id} menu={menu} />
                ))}
              </FilterBtnWrapper>
            )}

            {hasMenus ? (
              menus.map((menu: Menu) => (
                <MealHolder key={menu.id} menu={menu} />
              ))
            ) : (
              <EmptyList message="No menus found"></EmptyList>
            )}
          </FilterWrapper>
          <ShoppingCart />
        </RestaurantWrapper>
      )}

      {isDeleteRestaurantPopUpVisible && (
        <DeleteRestaurantPopUp onCancel={handleCancelDelete} />
      )}
      {isUpdateRestaurantPopUpVisible && (
        <PopUp
          onCancel={handleCancelRestaurant}
          UpdateForm={UpdateRestaurant}
        />
      )}
      <ScrollToTopButton target="top" text="Scroll To Top" />
    </>
  );
};
