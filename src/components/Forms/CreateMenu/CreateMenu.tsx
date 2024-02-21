import { useNavigate } from "react-router";
import {
  CreateMenuFormProps,
  RestaurantData,
} from "../../../static/interfaces";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMenuValidationSchema } from "../../../static/form-validations";
import { menuService } from "../../../services/menuService";
import { mainRoute } from "../../../static/endpoints";

export const CreateMenu: React.FC<CreateMenuFormProps> = ({ onSubmit }) => {
  const { restaurants = [] } = useRestaurants();
  const navigate = useNavigate();

  const inputsCreateMenuData = [
    {
      htmlFor: "type",
      labelTitle: "Type:",
      type: "text",
      name: "type",
      placeholder: "Enter your type...",
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
        type: "",
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
