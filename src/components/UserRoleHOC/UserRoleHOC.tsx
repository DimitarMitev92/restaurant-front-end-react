import React, { ReactNode } from "react";
import { useAuth } from "../../context/AuthProvider";

export interface UserRoleHOCProps {
  children: ReactNode;
}

const UserRoleHOC: React.FC<UserRoleHOCProps> = ({ children }) => {
  const { user } = useAuth();
  const canUserViewForm = user?.user.rights === "CLIENT" || user?.user.rights === "ADMIN";
  return canUserViewForm ? <>{children}</> : null;
};

export default UserRoleHOC;
