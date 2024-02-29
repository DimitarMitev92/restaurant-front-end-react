import { useNavigate, useParams } from "react-router-dom";
import {
  CreateRestaurantFormProps,
  LocationData,
} from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { mainRoute } from "../../../static/endpoints";
import { createRestaurantValidationSchema } from "../../../static/form-validations";
import ErrorMessage from "../../ui-elements/ErrorMessage/errorMessage";
import { useLocations } from "../../../hooks/useLocations";
import { restaurantService } from "../../../services/restaurantService";
import { inputsCreateRestaurantData } from "./UpdateRestaurant.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";
import { useUpdateRestaurant } from "./UpdateRestaurant.logic";

export const UpdateRestaurant: React.FC<CreateRestaurantFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams<string>();

  const { locations } = useLocations();
  const navigate = useNavigate();

  const { currentRestaurant, isLoading, errorFromServer } =
    useUpdateRestaurant(updatedId);

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

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

  return currentRestaurant ? (
    <ReusableForm
      formHeading="Update restaurant"
      inputsData={inputsCreateRestaurantDataWithLocation}
      initialValues={{
        ...currentRestaurant,
        error: "",
      }}
      validationSchema={createRestaurantValidationSchema}
      onSubmit={async (values) => {
        try {
          const menu = await restaurantService.updateRestaurants(
            updatedId,
            values
          );
          onSubmit && onSubmit(menu);
          navigate(`${mainRoute.RESTAURANTS}/${id}`);
        } catch (error) {
          console.error("Failed to update restaurant:", error);
          toast.error(`Failed to update restaurant: ${error.message}`);
        }
      }}
      buttonText="Update"
    />
  ) : (
    errorFromServer && <ErrorMessage error={errorFromServer} />
  );
};
