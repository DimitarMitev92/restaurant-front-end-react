import { endpointAPI, method } from "../static/endpoints";
import { CreateRestaurantFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const restaurantService = {
  fetchRestaurants: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurants = await fetchDataFromApi(
        endpointAPI.RESTAURANT,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching restaurants"
      );
      return restaurants;
    } catch (error) {
      console.error("Error fetching restaurants.");
      throw error;
    }
  },

  fetchMealsByRestaurantId: async (id: string | undefined) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurants = await fetchDataFromApi(
        `${endpointAPI.RESTAURANT}/${id}/meals`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching meals by restaurant id"
      );
      return restaurants;
    } catch (error) {
      console.error("Error fetching meals by restaurant id.");
      throw error;
    }
  },

  createRestaurant: async (restaurantData: CreateRestaurantFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurant = await fetchDataFromApi(
        `${endpointAPI.RESTAURANT}/create`,
        accessToken ? accessToken : null,
        method.POST,
        restaurantData,
        "Error during restaurant creation"
      );
      return restaurant;
    } catch (error) {
      console.error("Error during restaurant creation:", error);
      throw error;
    }
  },
};
