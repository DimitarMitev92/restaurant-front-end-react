import { auth, mainRoute } from "../services/endPoints";

export const routes = {
  main: mainRoute.MAIN,
  auth: auth.AUTH,
  register: auth.REGISTER,
  login: auth.LOGIN,
  logout: auth.LOGOUT,
  adminDashboard: auth.ADMIN_DASHBOARD,
  restaurants: mainRoute.RESTAURANTS,
};
