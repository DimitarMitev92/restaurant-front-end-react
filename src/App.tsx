import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/MainLayout/Main/Main";
import { Landing } from "./components/pages/Landing/Landing";
import { useState } from "react";
import { UserDataFromApi } from "./static/interfaces";
import { UserContext } from "./context/UserContext";
import { routes } from "./routes/routes.static";
import { SignIn } from "./components/pages/SignIn/SignIn";
import { SignUp } from "./components/pages/SignUp/SignUp";
import PrivateRoutes from "./guards/PrivateRoutes";
import { AdminRoute } from "./guards/AdminRoutes";
import { AdminDashboard } from "./components/pages/AdminDashboard/AdminDashboard";
import { Logout } from "./components/Logout/Logout";
import { Restaurants } from "./components/pages/Restaurants/Restaurants";

function App() {
  const [user, setUser] = useState<UserDataFromApi | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
              />
              <Route path={routes.LOGOUT} element={<Logout />} />
            </Route>
            {/* MUST ADD ADDITIONAL ROUTES  */}
          </Routes>
        </Main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
