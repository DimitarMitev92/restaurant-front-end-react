import { endpointAPI, method } from "../static/endpoints";
import {
  CreateRestaurantFormData,
  UpdateRestaurantFormData,
} from "../static/interfaces";
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

  fetchRestaurantsByLocationId: async (locationId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurants = await fetchDataFromApi(
        `${endpointAPI.RESTAURANT}/byLocationId/${locationId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching restaurants by location ID"
      );
      return restaurants;
    } catch (error) {
      console.error("Error fetching restaurants by location ID.", error);
      throw error;
    }
  },
  deleteRestaurantById: async (restaurantId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurant = await fetchDataFromApi(
        `${endpointAPI.RESTAURANT}/${restaurantId}/soft`,
        accessToken ? accessToken : null,
        method.DELETE,
        null,
        "Error deleting restaurant by  ID"
      );
      return restaurant;
    } catch (error) {
      console.error("Error deleting restaurant by restaurant  ID.", error);
      throw error;
    }
  },
  updateRestaurants: async (
    restaurantId: string,
    restaurantData: UpdateRestaurantFormData
  ) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const restaurant = await fetchDataFromApi(
        `${endpointAPI.RESTAURANT}/${restaurantId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        restaurantData,
        "Error during restaurant update"
      );
      return restaurant;
    } catch (error) {
      console.error("Error during restaurant update:", error);
      throw error;
    }
  },
  fetchRestaurantById: async (restaurantId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurant = await fetchDataFromApi(
        `${endpointAPI.RESTAURANT}/${restaurantId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching restaurant by  ID"
      );
      return restaurant;
      return restaurant;
    } catch (error) {
      console.error("Error fetching restaurant by Id.");
      throw error;
    }
  },
};
