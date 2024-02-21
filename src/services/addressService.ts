import { jwtDecode } from "jwt-decode";
import { endpointAPI, method } from "../static/endpoints";
import {
  CreateAddressFormData,
  UpdateAddressFormData,
} from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const addressService = {
  fetchAddresses: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const addresses = await fetchDataFromApi(
        endpointAPI.ADDRESS,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching addresses"
      );
      return addresses;
    } catch (error) {
      console.error(`Error fetching addresses`);
      throw error;
    }
  },

  createAddress: async (addressData: CreateAddressFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        const address = await fetchDataFromApi(
          `${endpointAPI.ADDRESS}/create`,
          accessToken ? accessToken : null,
          method.POST,
          { ...addressData, userId: decodedToken.sub },
          "Error during address creation"
        );
        return address;
      }
    } catch (error) {
      console.error("Error during address creation:", error);
      throw error;
    }
  },

  updateAddress: async (
    addressId: string,
    addressData: UpdateAddressFormData
  ) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const address = await fetchDataFromApi(
        `${endpointAPI.ADDRESS}/${addressId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        addressData,
        "Error during address update"
      );
      return address;
    } catch (error) {
      console.error("Error during address update:", error);
      throw error;
    }
  },

  fetchAddressesByUserId: async (userId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      if (accessToken) {
        const addresses = await fetchDataFromApi(
          `${endpointAPI.ADDRESS}/user/${userId}`,
          accessToken ? accessToken : null,
          method.GET,
          null,
          "Error fetching addresses by user id"
        );
        return addresses;
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      throw error;
    }
  },
};
