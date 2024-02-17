import { endpointAPI, method } from "../static/endpoints";
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
};
