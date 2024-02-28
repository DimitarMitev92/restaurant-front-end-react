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
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { inputsCreateRestaurantData } from "./CreateRestaurant.static";

export const CreateRestaurant: React.FC<CreateRestaurantFormProps> = ({
  onSubmit,
}) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();

  const inputsCreateRestaurantDataWithLocation = [
    ...inputsCreateRestaurantData,
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
  ];

  return (
    <ReusableForm
      formHeading="Create restaurant"
      inputsData={inputsCreateRestaurantDataWithLocation}
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
  );
};
