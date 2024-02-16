import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { mainRoute } from "../static/endpoints";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);
  return user?.access_token ? <Outlet /> : <Navigate to={mainRoute.SIGN_IN} />;
};

export default PrivateRoutes;
