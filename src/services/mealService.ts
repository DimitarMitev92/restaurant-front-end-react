import { endpointAPI, method } from "../static/endpoints";
import { CreateMealFormData, UpdateMealFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const mealService = {
  fetchMeals: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const meals = await fetchDataFromApi(
        endpointAPI.MEAL,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching meals"
      );
      return meals;
    } catch (error) {
      console.error("Error fetching meals");
      throw error;
    }
  },

  createMeal: async (mealData: CreateMealFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const meal = await fetchDataFromApi(
        `${endpointAPI.MEAL}/create`,
        accessToken ? accessToken : null,
        method.POST,
        mealData,
        "Error during meal creation"
      );
      return meal;
    } catch (error) {
      console.error("Error during meal creation:", error);
      throw error;
    }
  },
  updateMeal: async (mealId: string, mealData: UpdateMealFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const meal = await fetchDataFromApi(
        `${endpointAPI.MEAL}/${mealId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        mealData,
        "Error during meal update"
      );
      return meal;
    } catch (error) {
      console.error("Error during meal update:", error);
      throw error;
    }
  },
  fetchMealById: async (mealId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const meal = await fetchDataFromApi(
        `${endpointAPI.MEAL}/${mealId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this meal"
      );
      return meal;
    } catch (error) {
      console.error("Error fetching this meal :", error);
      throw error;
    }
  },
};
