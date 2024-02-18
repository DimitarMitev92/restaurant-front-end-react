import { endpointAPI, method } from "../static/endpoints";
import { CreateRestaurantFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

const accessToken = sessionStorage.getItem("access_token");

export const restaurantService = {
  fetchRestaurants: async () => {
    try {
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

  createRestaurant: async (restaurantData: CreateRestaurantFormData) => {
    try {
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
