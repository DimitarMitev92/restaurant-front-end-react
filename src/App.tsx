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
import { Profile } from "./components/Profile/Profile";



function App() {
  return (
    <AuthProvider>
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
              </Route>
              />
              <Route path={routes.PROFILE} element={<Profile />} />
              <Route path={routes.LOGOUT} element={<Logout />} />
            </Route>
            {/* MUST ADD ADDITIONAL ROUTES  */}
          </Routes>
        </Main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
