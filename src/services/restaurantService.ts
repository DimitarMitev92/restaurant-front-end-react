import { endpointAPI, method } from "../static/endpoints";
import { CreateRestaurantFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

const user = sessionStorage.getItem("user");

export const restaurantService = {
  fetchRestaurants: async () => {
    try {
      if (user) {
        const restaurants = await fetchDataFromApi(
          endpointAPI.RESTAURANT,
          JSON.parse(user),
          method.GET,
          null,
          "Error fetching restaurants"
        );
        return restaurants;
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching restaurans.");
      throw error;
    }
  },

  createRestaurant: async (restaurantData: CreateRestaurantFormData) => {
    try {
      if (user) {
        const restaurant = await fetchDataFromApi(
          `${endpointAPI.RESTAURANT}/create`,
          JSON.parse(user),
          method.POST,
          restaurantData,
          "Error during restaurant creation"
        );
        return restaurant;
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error("Error during restaurant creation:", error);
      throw error;
    }
  },
};
