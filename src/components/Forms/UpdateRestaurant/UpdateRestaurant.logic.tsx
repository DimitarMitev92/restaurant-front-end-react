import { useEffect, useState } from "react";
import { endpointAPI, method } from "../../../static/endpoints";
import { CreateRestaurantFormData } from "../../../static/interfaces";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";

export const useUpdateRestaurant = (updatedId: string) => {
  const [currentRestaurant, setCurrentRestaurant] =
    useState<CreateRestaurantFormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errorFromServer, setErrorFromServer] = useState(null);
  useEffect(() => {
    const fetchCurrentRestaurant = async () => {
      const url = `${endpointAPI.RESTAURANT}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentRestaurant();
  }, [updatedId]);

  return {
    currentRestaurant,
    isLoading,
    errorFromServer,
  };
};
