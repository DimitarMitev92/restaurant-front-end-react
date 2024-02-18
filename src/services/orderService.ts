import { endpointAPI, method } from "../static/endpoints";
import { CreateOrderFormData, UpdateOrderFormData } from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

const accessToken = sessionStorage.getItem("access_token");

export const orderService = {
  fetchOrders: async () => {
    try {
      const orders = await fetchDataFromApi(
        endpointAPI.ORDER,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching orders"
      );
      return orders;
    } catch (error) {
      console.error("Error fetching orders");
      throw error;
    }
  },

  createOrder: async (orderData: CreateOrderFormData) => {
    try {
      const order = await fetchDataFromApi(
        `${endpointAPI.ORDER}/create`,
        accessToken ? accessToken : null,
        method.POST,
        orderData,
        "Error during order creation"
      );
      return order;
    } catch (error) {
      console.error("Error during order creation:", error);
      throw error;
    }
  },
  updateOrder: async (orderId: string, orderData: UpdateOrderFormData) => {
    try {
      const order = await fetchDataFromApi(
        `${endpointAPI.ORDER}/${orderId}`,
        accessToken ? accessToken : null,
        method.PATCH,
        orderData,
        "Error during order update"
      );
      return order;
    } catch (error) {
      console.error("Error during order update:", error);
      throw error;
    }
  },
  fetchOrderById: async (orderId: string) => {
    try {
      const meal = await fetchDataFromApi(
        `${endpointAPI.ORDER}/${orderId}`,
        accessToken ? accessToken : null,
        method.GET,
        null,
        "Error fetching this order"
      );
      return meal;
    } catch (error) {
      console.error("Error fetching this order :", error);
      throw error;
    }
  },
};
