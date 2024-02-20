import { endpointAPI, method } from "../static/endpoints";
import {
  CreateCategoryFormData,
  UpdateCategoryFormData,
} from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

const accessToken = sessionStorage.getItem("access_token");

export const categoryService = {
  fetchCategories: async () => {
    try {
      const categories = await fetchDataFromApi(
        endpointAPI.CATEGORY,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching categories"
      );
      return categories;
    } catch (error) {
      console.error("Error fetching categories");
      throw error;
    }
  },

  createCategory: async (categoryData: CreateCategoryFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const category = await fetchDataFromApi(
        `${endpointAPI.CATEGORY}/create`,
        accessToken ? accessToken : null,
        method.POST,
        categoryData,
        "Error during category creation"
      );
      return category;
    } catch (error) {
      console.error("Error during category creation:", error);
      throw error;
    }
  },
  updateCategory: async (
    categoryId: string,
    categoryData: UpdateCategoryFormData
  ) => {
    try {
      const category = await fetchDataFromApi(
        `${endpointAPI.CATEGORY}/${categoryId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        categoryData,
        "Error during category update"
      );
      return category;
    } catch (error) {
      console.error("Error during category update:", error);
      throw error;
    }
  },
  fetchCategoryById: async (categoryId: string) => {
    try {
      const category = await fetchDataFromApi(
        `${endpointAPI.CATEGORY}/${categoryId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this category "
      );
      return category;
    } catch (error) {
      console.error("Error fetching this category :", error);
      throw error;
    }
  },
};
