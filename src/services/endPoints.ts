import { PORT } from "../constants/constants";

//ENDPOINT OF BACKEND !!!
export const endpoint = {
  RESTAURANTS: `http://localhost:${PORT}/restaurant`,
};

// ROUTES FOR FRONTEND !!!
export const mainRoute = {
  MAIN: "/",
  RESTAURANTS: "/restaurants",
  NOT_FOUND: "*",
};

// ROUTES FOR FRONTEND !!!
export const auth = {
  AUTH: "/auth",
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  ADMIN_DASHBOARD: "/auth/admin-dashboard",
};
