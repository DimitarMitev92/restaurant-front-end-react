import React from "react";
import { useLocations } from "../../../hooks/useLocations";
import {
  CreateRestaurantFormProps,
  LocationData,
} from "../../../static/interfaces";
import { createRestaurantValidationSchema } from "../../../static/form-validations";
import { restaurantService } from "../../../services/restaurantService";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { inputsCreateRestaurantData } from "./CreateRestaurant.static";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateRestaurant: React.FC<CreateRestaurantFormProps> = ({
  onSubmit,
}) => {
  const { locations = [] } = useLocations();

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
        try {
          const restaurant = await restaurantService.createRestaurant(values);
          onSubmit && onSubmit(restaurant);
        } catch (error) {
          console.error("Failed to create restaurant:", error);
          toast.error(`Failed to create restaurant: ${error.message}`);
        }
      }}
      buttonText="Create"
    />
  );
};
