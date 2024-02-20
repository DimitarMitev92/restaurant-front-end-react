import { PORT } from "../constants/constants";

export const endpointAPI = {
  USER: `http://localhost:${PORT}/user`,
  SIGN_IN: `http://localhost:${PORT}/auth/sign-in`,
  SIGN_UP: `http://localhost:${PORT}/auth/sign-up`,
  CHANGE_PASSWORD: `http://localhost:${PORT}/auth/change-password`,
  RESTAURANT: `http://localhost:${PORT}/restaurant`,
  MENU: `http://localhost:${PORT}/menu`,
  MEAL: `http://localhost:${PORT}/meal`,
  ORDER: `http://localhost:${PORT}/order`,
  ORDER_DETAIL: `http://localhost:${PORT}/?????`, // ASK WHY DON'T HAVE ORDER DETAIL CONTROLLER!!!
  CATEGORY: `http://localhost:${PORT}/category`,
  LOCATION: `http://localhost:${PORT}/location`,
  PACKAGE: `http://localhost:${PORT}/package`,
};

export const mainRoute = {
  MAIN: "/",
  ABOUT_US: "/#about-us",
  MOST_ORDERED: "/#most-ordered",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  LOGOUT: "/auth/logout",
  ADMIN_DASHBOARD: "/admin-dashboard",
  RESTAURANTS: "/restaurants",
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

export const headers = {
  CONTENT_TYPE_APP_JSON: { "Content-Type": "application/json" },
};
