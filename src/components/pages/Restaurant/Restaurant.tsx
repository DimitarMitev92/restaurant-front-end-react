import { useNavigate, useParams } from "react-router-dom";
import { usePopupContext } from "../../../context/PopupContext";
import { useEffect, useState } from "react";
import { IRestaurantsDetails, Menu } from "../../../static/interfaces";
import { clearFilter } from "../../../static/endpoints";
import { mealService } from "../../../services/mealService";
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
import { routes } from "../../../routes/routes.static";
import DeleteRestaurantPopUp from "../../PopUp/DeleteRestaurantPopUp";

export const Restaurant = () => {
  const {
    isUpdateMealPopUpVisible,
    isUpdateMenuPopUpVisible,
    isAddMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    isDeleteMealPopUpVisible,
    isDeleteRestaurantPopUpVisible,
    showDeleteRestaurantPopUp,
    hideDeleteRestaurantPopUp,
  } = usePopupContext();

  const { id } = useParams();
  const navigate = useNavigate();

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
  }, [
    id,
    isUpdateMealPopUpVisible,
    isUpdateMenuPopUpVisible,
    isAddMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    isDeleteMealPopUpVisible,
    isDeleteRestaurantPopUpVisible,
  ]);

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  const handleDeleteRestaurant = () => {
    showDeleteRestaurantPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/delete/${id}`);
  };

  const handleCancelDelete = () => {
    hideDeleteRestaurantPopUp();
  };
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
        <DeleteRestaurantPopUp
          onCancel={handleCancelDelete}
          // deleteMessage={DeleteRestaurantMessageForm}
        />
      )}
    </>
  );
};
