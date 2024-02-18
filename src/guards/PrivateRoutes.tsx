import { Navigate, Outlet } from "react-router-dom";
import { mainRoute } from "../static/endpoints";
import { useAuth } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const { user } = useAuth();
  return user?.user.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to={mainRoute.SIGN_IN} />
  );
};

export default PrivateRoutes;
