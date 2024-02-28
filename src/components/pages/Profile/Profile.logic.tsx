import { useState } from "react";
import { useNavigate } from "react-router";

export const useProfileLogic = () => {
  const [activeForm, setActiveForm] = useState<string>("");
  const navigate = useNavigate();

  const forms = [
    {
      label: "Change Password",
      formName: "changePassword",
      path: "/profile/change-password",
    },
    {
      label: "Create Address",
      formName: "createAddress",
      path: "/profile/create-address",
    },
    {
      label: "User Addresses",
      formName: "userAddresses",
      path: "/profile/user-addresses",
    },
    {
      label: "Orders History",
      formName: "ordersHistory",
      path: "/profile/orders-history",
    },
  ];

  const handleButtonClick = (formName: string, path: string) => {
    setActiveForm(formName);
    navigate(path);
  };

  return { handleButtonClick, forms, activeForm };
};
