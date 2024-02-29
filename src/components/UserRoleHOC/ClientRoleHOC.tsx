import { ReactNode } from "react";
import { useAuth } from "../../context/AuthProvider";

export interface ClientRoleHOCProps {
  children: ReactNode;
}

const ClientRoleHOC: React.FC<ClientRoleHOCProps> = ({ children }) => {
  const { user } = useAuth();
  const canUserViewForm =
    user?.user.rights === "CLIENT" || user?.user.rights === "ADMIN";
  return canUserViewForm ? <>{children}</> : null;
};

export default ClientRoleHOC;
