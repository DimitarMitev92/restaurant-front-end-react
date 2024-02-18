import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { mainRoute } from "../static/endpoints";
import { useAuth } from "../context/AuthProvider";

interface PrivateRoutesProps {
  element: ReactElement;
}

export const AdminRoute: React.FC<PrivateRoutesProps> = ({
  element,
  ...props
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={mainRoute.SIGN_IN} replace />;
  }

  if (user.user.rights !== "ADMIN") {
    return <Navigate to={mainRoute.MAIN} replace />;
  }

  return React.cloneElement(element, { ...props });
};
