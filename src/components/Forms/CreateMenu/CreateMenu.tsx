import { useNavigate } from "react-router";
import {
  CreateMenuFormProps,
  MenuTypeData,
  RestaurantData,
} from "../../../static/interfaces";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMenuValidationSchema } from "../../../static/form-validations";
import { menuService } from "../../../services/menuService";
import { mainRoute } from "../../../static/endpoints";
import { useMenuTypes } from "../../../hooks/useMenuTypes";

export const CreateMenu: React.FC<CreateMenuFormProps> = ({ onSubmit }) => {
  const { restaurants = [] } = useRestaurants();
  const { menuTypes = [] } = useMenuTypes();
  const navigate = useNavigate();

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

  return (
    <ReusableForm
      formHeading="Create menu"
      inputsData={inputsCreateMenuData}
      initialValues={{
        menuTypeId: "",
        restaurantId: "",
        error: "",
      }}
      validationSchema={createMenuValidationSchema}
      onSubmit={async (values) => {
        const restaurant = await menuService.createMenu(values);
        onSubmit && onSubmit(restaurant);
        navigate(mainRoute.MAIN);
      }}
      buttonText="Create"
    />
  );
};
