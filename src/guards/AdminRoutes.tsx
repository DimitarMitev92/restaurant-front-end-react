import React, { useContext, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

interface PrivateRoutesProps {
  element: ReactElement;
}

export const OwnerRoute: React.FC<PrivateRoutesProps> = ({
  element,
  ...props
}) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={"/auth/login"} replace />;
  }

  if (user.user.rights !== "ADMIN") {
    return <Navigate to={"/"} replace />;
  }

  return React.cloneElement(element, { ...props });
};
