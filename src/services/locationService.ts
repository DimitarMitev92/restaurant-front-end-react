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
  fetchLocationById: async (locationId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const location = await fetchDataFromApi(
        `${endpointAPI.LOCATION}/${locationId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this location "
      );
      return location;
    } catch (error) {
      console.error("Error fetching this location :", error);
      throw error;
    }
  },
  deleteLocationById: async (locationId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const location = await fetchDataFromApi(
        `${endpointAPI.LOCATION}/${locationId}/soft`,
        accessToken ? accessToken : null,
        method.DELETE,
        null,
        "Error deleting relocation by  ID"
      );
      return location;
    } catch (error) {
      console.error("Error deleting location by location ID.", error);
      throw error;
    }
  },
};
