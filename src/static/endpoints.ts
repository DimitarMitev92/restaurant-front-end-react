import { PORT } from "../constants/constants";

export const endpointAPI = {
  USER: `http://localhost:${PORT}/user`,
  SIGN_IN: `http://localhost:${PORT}/auth/sign-in`,
  SIGN_UP: `http://localhost:${PORT}/auth/sign-up`,
  CHANGE_PASSWORD: `http://localhost:${PORT}/auth/change-password`,
  RESTAURANT: `http://localhost:${PORT}/restaurant`,
  MENU: `http://localhost:${PORT}/menu`,
  MENU_TYPE: `http://localhost:${PORT}/menu-type`,
  MEAL: `http://localhost:${PORT}/meal`,
  ORDER: `http://localhost:${PORT}/order`,
  ORDER_DETAIL: `http://localhost:${PORT}/order-detail`,
  CATEGORY: `http://localhost:${PORT}/category`,
  LOCATION: `http://localhost:${PORT}/location`,
  PACKAGE: `http://localhost:${PORT}/package`,
  ADDRESS: `http://localhost:${PORT}/address`,
};

export const mainRoute = {
  MAIN: "/",
  ABOUT_US: "/#about-us",
  MOST_ORDERED: "/#most-ordered",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  LOGOUT: "/auth/logout",
  ADMIN_DASHBOARD: "/admin-dashboard",
  ADMIN_DASHBOARD_CREATE_PACKAGE: "/admin-dashboard/create-package",
  ADMIN_DASHBOARD_CREATE_RESTAURANT: "/admin-dashboard/create-restaurant",
  ADMIN_DASHBOARD_CREATE_MENU_TYPE: "/admin-dashboard/create-menu-type",
  ADMIN_DASHBOARD_CREATE_MENU: "/admin-dashboard/create-menu",
  ADMIN_DASHBOARD_CREATE_LOCATION: "/admin-dashboard/create-location",
  ADMIN_DASHBOARD_CREATE_CATEGORY: "/admin-dashboard/create-category",
  ADMIN_DASHBOARD_CREATE_MEAL: "/admin-dashboard/create-meal",
  RESTAURANTS: "/restaurants",
  RESTAURANTS_ALL_PATHS: "/restaurants/:id/*",
  RESTAURANTS_UPDATE: "/restaurants/:id",
  MENU: "/menu",
  MENU_UPDATE: "/menu/:id",
  MEAL: "/meal",
  MEAL_UPDATE: "/meal/:id",
  ORDER: "/order",
  ORDER_UPDATE: "/order/:id",
  CATEGORY: "/category",
  LOCATION: "/location",
  PACKAGE: "/package",
  PROFILE: "/profile",
  PROFILE_CHANGE_PASSWORD: "/profile/change-password",
  PROFILE_CREATE_ADDRESS: "/profile/create-address",
  PROFILE_USER_ADDRESSES: "/profile/user-addresses",
  PROFILE_ORDERS_HISTORY: "/profile/orders-history",
  NOT_FOUND: "*",
};

export const method = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const rightsUser = {
  ADMIN: "ADMIN",
  CLIENT: "CLIENT",
};

export const clearFilter = {
  all: "ALL",
};

export const headers = {
  CONTENT_TYPE_APP_JSON: { "Content-Type": "application/json" },
};
