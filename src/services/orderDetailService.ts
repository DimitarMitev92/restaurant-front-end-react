import { endpointAPI, method } from "../static/endpoints";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const orderDetailService = {
  fetchOrderDetails: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const orderDetails = await fetchDataFromApi(
        endpointAPI.ORDER_DETAIL,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching order details"
      );
      return orderDetails;
    } catch (error) {
      console.error("Error fetching order details");
      throw error;
    }
  },

  fetchOrderDetailById: async (orderDetailId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

      const meal = await fetchDataFromApi(
        `${endpointAPI.ORDER_DETAIL}/${orderDetailId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this order detail"
      );
      return meal;
    } catch (error) {
      console.error("Error fetching this order detail :", error);
      throw error;
    }
  },
};
