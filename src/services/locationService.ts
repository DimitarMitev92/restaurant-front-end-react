import { endpointAPI, method } from "../static/endpoints";
import { CreateLocationFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const locationService = {
  fetchLocations: async () => {
    try {
      const locations = await fetchDataFromApi(
        endpointAPI.LOCATION,
        null,
        method.GET,
        null,
        "Error fetching location"
      );
      return locations;
    } catch (error) {
      console.error("Error fetching locations:", error);
      throw error;
    }
  },

  createLocation: async (locationData: CreateLocationFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const location = await fetchDataFromApi(
        `${endpointAPI.LOCATION}/create`,
        accessToken ? accessToken : null,
        method.POST,
        locationData,
        "Error during location creation"
      );
      return location;
    } catch (error) {
      console.error("Error during location creation:", error);
      throw error;
    }
  },
};
