import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../hooks/useSesionStorage";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { mainRoute } from "../../static/endpoints";

export const Logout = () => {
  const navigate = useNavigate();

  const { removeItem } = useSessionStorage();

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(null);
    removeItem("user");
    navigate(`${mainRoute.SIGN_IN}`);
  }, []);

  return <div></div>;
};
