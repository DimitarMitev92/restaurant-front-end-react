import { endpointAPI, method } from "../static/endpoints";
import {
  CreatePackageFormData,
  UpdatePackageFormData,
} from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const packageService = {
  fetchPackages: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const packages = await fetchDataFromApi(
        endpointAPI.PACKAGE,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching packages"
      );
      return packages;
    } catch (error) {
      console.error("Error fetching packages");
      throw error;
    }
  },

  createPackage: async (packageData: CreatePackageFormData) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const pack = await fetchDataFromApi(
        `${endpointAPI.PACKAGE}/create`,
        accessToken ? accessToken : null,
        method.POST,
        packageData,
        "Error during package creation"
      );
      return pack;
    } catch (error) {
      console.error("Error during package creation:", error);
      throw error;
    }
  },
  updatePackage: async (
    packageId: string,
    packageData: UpdatePackageFormData
  ) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const pack = await fetchDataFromApi(
        `${endpointAPI.PACKAGE}/${packageId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        packageData,
        "Error during package update"
      );
      return pack;
    } catch (error) {
      console.error("Error during package update:", error);
      throw error;
    }
  },
  fetchPackageById: async (packageId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const pack = await fetchDataFromApi(
        `${endpointAPI.PACKAGE}/${packageId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this package "
      );
      return pack;
    } catch (error) {
      console.error("Error fetching this package :", error);
      throw error;
    }
  },
  deletePackagesById: async (packageId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      const pack = await fetchDataFromApi(
        `${endpointAPI.PACKAGE}/${packageId}/soft`,
        accessToken ? accessToken : null,
        method.DELETE,
        null,
        "Error deleting package by  ID"
      );
      return pack;
    } catch (error) {
      console.error("Error deleting package by package ID.", error);
      throw error;
    }
  },
};
