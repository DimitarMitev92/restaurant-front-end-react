import { useEffect, useState } from "react";
import { endpointAPI, method } from "../../../static/endpoints";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";
import { CreateMealFormData } from "../../../static/interfaces";

export const useUpdateMealLogic = (updatedId: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const [currentMeal, setCurrentMeal] = useState<CreateMealFormData | null>(
    null
  );

  const [errorFromServer, setErrorFromServer] = useState(null);

  useEffect(() => {
    const fetchCurrentMeal = async () => {
      const url = `${endpointAPI.MEAL}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        setIsLoading(true);
        const fetchedMeal = await fetchDataFromApi(
          url,
          accessToken,
          method.GET,
          null,
          "Error fetching meal"
        );

        const startDate = new Date(fetchedMeal.startDate);
        startDate.setDate(startDate.getDate());
        fetchedMeal.startDate = startDate.toISOString().split("T")[0];

        const endDate = new Date(fetchedMeal.endDate);
        endDate.setDate(endDate.getDate());
        fetchedMeal.endDate = endDate.toISOString().split("T")[0];

        setCurrentMeal(fetchedMeal);
      } catch (error) {
        console.error("Error fetching meal:", error);
        setErrorFromServer(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentMeal();
  }, [updatedId]);

  return {
    isLoading,
    currentMeal,
    errorFromServer,
  };
};
