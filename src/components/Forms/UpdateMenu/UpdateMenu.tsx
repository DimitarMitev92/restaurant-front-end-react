import { useNavigate, useParams } from "react-router-dom";
import {
  CreateMenuFormData,
  CreateMenuFormProps,
  MenuTypeData,
  RestaurantData,
} from "../../../static/interfaces";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { useMenuTypes } from "../../../hooks/useMenuTypes";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { useEffect, useState } from "react";
import { endpointAPI, mainRoute, method } from "../../../static/endpoints";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";
import { createMenuValidationSchema } from "../../../static/form-validations";
import { menuService } from "../../../services/menuService";
import ErrorMessage from "../../ui-elements/errorMessage";

export const UpdateMenu: React.FC<CreateMenuFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams();

  const { restaurants = [] } = useRestaurants();
  const { menuTypes = [] } = useMenuTypes();
  const navigate = useNavigate();

  const [currentMenu, setCurrentMenu] = useState<CreateMenuFormData | null>(
    null
  );

  const [error, setError] = useState<string | null>(null);

  const inputsCreateMenuData = [
    {
      htmlFor: "menuTypeId",
      labelTitle: "menu Type:",
      type: "select",
      name: "menuTypeId",
      placeholder: "Select menu type",
      options: menuTypes.map((menuType: MenuTypeData) => ({
        value: menuType.id,
        label: menuType.type,
      })),
    },
    {
      htmlFor: "restaurantId",
      labelTitle: "Restaurant",
      type: "select",
      name: "restaurantId",
      placeholder: "Select restaurant",
      options: restaurants.map((restaurant: RestaurantData) => ({
        value: restaurant.id,
        label: restaurant.name,
      })),
    },
  ];

  useEffect(() => {
    const fetchCurrentMenu = async () => {
      const url = `${endpointAPI.MENU}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        const fetchedMenu = await fetchDataFromApi(
          url,
          accessToken,
          method.GET,
          null,
          "Error fetching menu"
        );

        setCurrentMenu(fetchedMenu);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setError(error.message);
      }
    };
    fetchCurrentMenu();
  }, [updatedId]);

  return currentMenu ? (
    <ReusableForm
      formHeading="Update menu"
      inputsData={inputsCreateMenuData}
      initialValues={{
        ...currentMenu,
        error: "",
      }}
      validationSchema={createMenuValidationSchema}
      onSubmit={async (values) => {
        const menu = await menuService.updateMenu(updatedId, values);
        onSubmit && onSubmit(menu);
        navigate(`${mainRoute.RESTAURANTS}/${id}`);
      }}
      buttonText="Update"
    />
  ) : (
    <ErrorMessage error={error} />
  );
};
