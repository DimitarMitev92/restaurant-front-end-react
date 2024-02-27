import { endpointAPI, method } from "../static/endpoints";
import { CreateMenuFormData, UpdateMenuFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const menuService = {
  fetchMenus: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const menus = await fetchDataFromApi(
        endpointAPI.MENU,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching menus"
      );

      return menus;
    } catch (error) {
      console.error("Error fetching menus");
      throw error;
    }
  },

  createMenu: async (menuData: CreateMenuFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const menu = await fetchDataFromApi(
        `${endpointAPI.MENU}/create`,
        accessToken ? accessToken : null,
        method.POST,
        menuData,
        "Error during menu creation"
      );
      return menu;
    } catch (error) {
      console.error("Error during menu creation:", error);
      throw error;
    }
  },
  updateMenu: async (menuId: string, menuData: UpdateMenuFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const menu = await fetchDataFromApi(
        `${endpointAPI.MENU}/${menuId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        menuData,
        "Error during menu update"
      );
      return menu;
    } catch (error) {
      console.error("Error during menu update:", error);
      throw error;
    }
  },
  fetchMenuById: async (menuId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const menu = await fetchDataFromApi(
        `${endpointAPI.MENU}/${menuId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this menu "
      );
      return menu;
    } catch (error) {
      console.error("Error fetching  this menu :", error);
      throw error;
    }
  },

  fetchMenusByRestaurantId: async (restaurantId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const menu = await fetchDataFromApi(
        `${endpointAPI.MENU}/restaurant/${restaurantId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this menu "
      );
      return menu;
    } catch (error) {
      console.error("Error fetching  this menu :", error);
      throw error;
    }
  },
  fetchRestaurantIdByMenuId: async (menuId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const restaurantId = await fetchDataFromApi(
        `${endpointAPI.MENU}/fetch-restaurant/${menuId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching restaurants by menu  ID"
      );
      return restaurantId;
    } catch (error) {
      console.error("Error fetching restaurants by menu ID.", error);
      throw error;
    }
  },
  deleteMenuById: async (menuId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const menu = await fetchDataFromApi(
        `${endpointAPI.MENU}/${menuId}/soft`,
        accessToken ? accessToken : null,
        method.DELETE,
        null,
        "Error deleting menu by  ID"
      );
      return menu;
    } catch (error) {
      console.error("Error deleting menu  by menu ID.", error);
      throw error;
    }
  },
};
