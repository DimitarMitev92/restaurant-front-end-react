import React from "react";
import { useLocations } from "../../../hooks/useLocations";
import { useNavigate } from "react-router";
import {
  CreateRestaurantFormProps,
  LocationData,
} from "../../../static/interfaces";
import { createRestaurantValidationSchema } from "../../../static/form-validations";
import { restaurantService } from "../../../services/restaurantService";
import { mainRoute } from "../../../static/endpoints";
import { Wrapper } from "../SignIn/SignInForm.style";
import { ReusableForm } from "../ReusableForm/ReusableForm";

export const CreateRestaurant: React.FC<CreateRestaurantFormProps> = ({
  onSubmit,
}) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();

  const inputsCreateRestaurantData = [
    {
      htmlFor: "name",
      labelTitle: "Name:",
      type: "text",
      name: "name",
      placeholder: "Enter your name...",
    },
    {
      htmlFor: "locationId",
      labelTitle: "Location:",
      type: "select",
      name: "locationId",
      placeholder: "Select location",
      options: locations.map((location: LocationData) => ({
        value: location.id,
        label: location.name,
      })),
    },
    {
      htmlFor: "imageUrl",
      labelTitle: "Image:",
      type: "text",
      name: "imageUrl",
      placeholder: "Enter image url...",
    },
    {
      htmlFor: "openHour",
      labelTitle: "Open hour:",
      type: "time",
      name: "openHour",
      placeholder: "Enter open hour...",
    },
    {
      htmlFor: "closeHour",
      labelTitle: "Close hour:",
      type: "time",
      name: "closeHour",
      placeholder: "Enter close hour...",
    },
  ];

  return (
    <Wrapper>
      <ReusableForm
        formHeading="Create restaurant"
        inputsData={inputsCreateRestaurantData}
        initialValues={{
          name: "",
          locationId: "",
          imageUrl: "",
          openHour: "",
          closeHour: "",
          error: "",
        }}
        validationSchema={createRestaurantValidationSchema}
        onSubmit={async (values) => {
          const restaurant = await restaurantService.createRestaurant(values);
          onSubmit && onSubmit(restaurant);
          navigate(mainRoute.MAIN);
        }}
        buttonText="Create"
      />
    </Wrapper>
  );
};
