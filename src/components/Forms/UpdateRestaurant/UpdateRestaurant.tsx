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
      inputsData={inputsCreateRestaurantData}
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
