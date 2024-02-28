import { useNavigate, useParams } from "react-router-dom";
import {
  CreateRestaurantFormData,
  CreateRestaurantFormProps,
  LocationData,
} from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { useEffect, useState } from "react";
import { endpointAPI, mainRoute, method } from "../../../static/endpoints";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";
import { createRestaurantValidationSchema } from "../../../static/form-validations";
import ErrorMessage from "../../ui-elements/errorMessage";
import { useLocations } from "../../../hooks/useLocations";
import { restaurantService } from "../../../services/restaurantService";
import { inputsCreateRestaurantData } from "./UpdateRestaurant.static";

export const UpdateRestaurant: React.FC<CreateRestaurantFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams<string>();

  const { locations } = useLocations();
  const navigate = useNavigate();

  const [currentRestaurant, setCurrentRestaurant] =
    useState<CreateRestaurantFormData | null>(null);

  const [errorFromServer, setErrorFromServer] = useState(null);

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

  useEffect(() => {
    const fetchCurrentRestaurant = async () => {
      const url = `${endpointAPI.RESTAURANT}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        const fetchedRestaurant = await fetchDataFromApi(
          url,
          accessToken,
          method.GET,
          null,
          "Error fetching restaurant"
        );

        setCurrentRestaurant(fetchedRestaurant);
      } catch (error: unknown) {
        console.error("Error fetching restaurant:", error);
        setErrorFromServer(error.message);
      }
    };
    fetchCurrentRestaurant();
  }, [updatedId]);

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
        const menu = await restaurantService.updateRestaurants(
          updatedId,
          values
        );
        onSubmit && onSubmit(menu);
        navigate(`${mainRoute.RESTAURANTS}/${id}`);
      }}
      buttonText="Update"
    />
  ) : (
    errorFromServer && <ErrorMessage error={errorFromServer} />
  );
};
