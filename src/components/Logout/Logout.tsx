import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../hooks/useSesionStorage";
import { useEffect } from "react";
import { mainRoute } from "../../static/endpoints";
import { useAuth } from "../../context/AuthProvider";

export const Logout = () => {
  const navigate = useNavigate();

  const { removeItem } = useSessionStorage();

  const { setUser } = useAuth();

  useEffect(() => {
    setUser(null);
    removeItem("access_token");
    navigate(`${mainRoute.SIGN_IN}`);
  }, []);

  return <div></div>;
};
