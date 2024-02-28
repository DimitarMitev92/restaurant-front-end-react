import { OrderData } from "../components/pages/Profile/OrdersHistory/OrdersHistory.static";
import { endpointAPI, method } from "../static/endpoints";
import {
  CreateOrderFormData,
  Order,
  OrderDetails,
  UpdateOrderFormData,
} from "../static/interfaces";
import { fetchDataFromApi } from "./fetchDataFromApi";

export const orderService = {
  fetchOrders: async () => {
    try {
      const accessToken = sessionStorage.getItem("access_token");

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
      const accessToken = sessionStorage.getItem("access_token");

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
      const accessToken = sessionStorage.getItem("access_token");

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
      const accessToken = sessionStorage.getItem("access_token");

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
  findAllOrdersByClientId: async (clientId: string) => {
    try {
      const accessToken = sessionStorage.getItem("access_token");
      if (accessToken) {
        const orders = await fetchDataFromApi(
          `${endpointAPI.ORDER}/client/${clientId}`,
          accessToken,
          method.GET,
          null,
          "Error fetching orders"
        );

        const orderDetails = await Promise.all(
          orders.map(async (order: Order) => {
            const orderDetails = await fetchDataFromApi(
              `${endpointAPI.ORDER_DETAIL}/order/${order.id}`,
              accessToken,
              method.GET,
              null,
              "Error fetching order details"
            );

            const restaurant = await fetchDataFromApi(
              `${endpointAPI.RESTAURANT}/${order.restaurantId}`,
              accessToken,
              method.GET,
              null,
              "Error fetching restaurant"
            );

            return {
              ...order,
              restaurant: restaurant,
              meals: orderDetails.map((orderDetailMeal: OrderDetails) => ({
                ...orderDetailMeal,
                meal: null, // Placeholder for meal data
              })),
            };
          })
        );

        for (const orderDetail of orderDetails) {
          for (const orderDetailMeal of orderDetail.meals) {
            const mealData = await fetchDataFromApi(
              `${endpointAPI.MEAL}/${orderDetailMeal.mealId}`,
              accessToken,
              method.GET,
              null,
              "Error fetching meal"
            );

            const mealIndex = orderDetail.meals.findIndex(
              (detail: OrderData) => detail.id === orderDetailMeal.id
            );

            if (mealIndex !== -1) {
              orderDetail.meals[mealIndex] = {
                ...orderDetailMeal,
                meal: mealData,
              };
            }
          }
        }
        return orderDetails;
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },
};
