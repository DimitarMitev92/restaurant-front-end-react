import { endpointAPI, method } from "../static/endpoints";
import {
  CreateMenuTypeFormData,
  UpdateMenuTypeFormData,
} from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const menuTypeService = {
  fetchMenuTypes: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const menuTypes = await fetchDataFromApi(
        endpointAPI.MENU_TYPE,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching menu types"
      );
      return menuTypes;
    } catch (error) {
      console.error("Error fetching menu types");
      throw error;
    }
  },

  createMenuType: async (menuTypeData: CreateMenuTypeFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const menuType = await fetchDataFromApi(
        `${endpointAPI.MENU_TYPE}/create`,
        accessToken ? accessToken : null,
        method.POST,
        menuTypeData,
        "Error during menu type creation"
      );
      return menuType;
    } catch (error) {
      console.error("Error during menu type creation:", error);
      throw error;
    }
  },

  updateMenuType: async (
    menuTypeId: string,
    menuTypeData: UpdateMenuTypeFormData
  ) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const menuType = await fetchDataFromApi(
        `${endpointAPI.MENU_TYPE}/${menuTypeId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        menuTypeData,
        "Error during menu type update"
      );
      return menuType;
    } catch (error) {
      console.error("Error during menu type update:", error);
      throw error;
    }
  },

  fetchMenuTypeById: async (menuTypeId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const menuType = await fetchDataFromApi(
        `${endpointAPI.MENU_TYPE}/${menuTypeId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching menu type"
      );
      return menuType;
    } catch (error) {
      console.error("Error fetching menu type:", error);
      throw error;
    }
  },
  deleteMenuTypeById: async (menuTypeId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const menuType = await fetchDataFromApi(
        `${endpointAPI.CATEGORY}/${menuTypeId}/soft`,
        accessToken ? accessToken : null,
        method.DELETE,
        null,
        "Error deleting menuType by ID"
      );
      return menuType;
    } catch (error) {
      console.error("Error deleting menuType by menuType ID.", error);
      throw error;
    }
  },
};
