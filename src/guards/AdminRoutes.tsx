import React, { useContext, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { mainRoute } from "../static/endpoints";

interface PrivateRoutesProps {
  element: ReactElement;
}

export const AdminRoute: React.FC<PrivateRoutesProps> = ({
  element,
  ...props
}) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={mainRoute.SIGN_IN} replace />;
  }

  if (user.user.rights !== "ADMIN") {
    return <Navigate to={mainRoute.MAIN} replace />;
  }

  return React.cloneElement(element, { ...props });
};
