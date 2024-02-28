import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/MainLayout/Main/Main";
import { Landing } from "./components/pages/Landing/Landing";
import { routes } from "./routes/routes.static";
import { SignIn } from "./components/pages/SignIn/SignIn";
import { SignUp } from "./components/pages/SignUp/SignUp";
import PrivateRoutes from "./guards/PrivateRoutes";
import { AdminRoute } from "./guards/AdminRoutes";
import { AdminDashboard } from "./components/pages/AdminDashboard/AdminDashboard";
import { Logout } from "./components/Logout/Logout";
import { AuthProvider } from "./context/AuthProvider";
import Restaurants from "./components/pages/Restaurants/Restaurants";
import { Profile } from "./components/pages/Profile/Profile";
import { PopupProvider } from "./context/PopupContext";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import { OrderProvider } from "./context/OrderProvider";
import { Restaurant } from "./components/pages/Restaurant/Restaurant";
import { ChangePassword } from "./components/Forms/ChangePassword/ChangePassword";
import { CreateAddress } from "./components/Forms/CreateAddress/CreateAddress";
import { UserAddresses } from "./components/pages/Profile/UserAddresses/UserAddresses";
import { OrdersHistory } from "./components/pages/Profile/OrdersHistory/OrdersHistory";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <PopupProvider>
          <BrowserRouter>
            <Main>
              <Routes>
                <Route
                  path={routes.MAIN}
                  element={<Landing children={undefined} />}
                ></Route>
                <Route path={routes.SIGN_IN} element={<SignIn />} />
                <Route path={routes.SIGN_UP} element={<SignUp />} />
                <Route path={routes.RESTAURANTS} element={<Restaurants />} />
                <Route
                  path={routes.RESTAURANTS_ALL_PATHS}
                  element={<Restaurant />}
                />
                <Route element={<PrivateRoutes />}>
                  <Route
                    path={routes.ADMIN_DASHBOARD}
                    element={<AdminRoute element={<AdminDashboard />} />}
                  >
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_PACKAGE}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_RESTAURANT}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_MENU_TYPE}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_MENU}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_LOCATION}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_CATEGORY}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_CREATE_MEAL}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                      <Route
                      path={routes.ADMIN_DASHBOARD_DELETE_LOCATION}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                      <Route
                      path={routes.ADMIN_DASHBOARD_DELETE_PACKAGE}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_DELETE_RESTAURANT}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_DELETE_MENU_TYPE}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path={routes.ADMIN_DASHBOARD_DELETE_MENU}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                  </Route>
                  <Route
                      path={routes.ADMIN_DASHBOARD_DELETE_CATEGORY}
                      element={<AdminRoute element={<AdminDashboard />} />}
                    />
                  <Route path={routes.PROFILE} element={<Profile />}>
                    <Route
                      path={routes.PROFILE_CHANGE_PASSWORD}
                      element={<ChangePassword />}
                    />
                    <Route
                      path={routes.PROFILE_CREATE_ADDRESS}
                      element={<CreateAddress />}
                    />
                    <Route
                      path={routes.PROFILE_USER_ADDRESSES}
                      element={<UserAddresses />}
                    />
                    <Route
                      path={routes.PROFILE_ORDERS_HISTORY}
                      element={<OrdersHistory />}
                    />
                  </Route>
                  <Route path={routes.LOGOUT} element={<Logout />} />
                </Route>
                <Route
                  path={routes.NOT_FOUND}
                  element={<NotFoundPage />}
                ></Route>
              </Routes>
            </Main>
            <ToastContainer />
          </BrowserRouter>
        </PopupProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
