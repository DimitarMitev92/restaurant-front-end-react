import { useState } from "react";
import { useNavigate } from "react-router";
import { ChangePassword } from "../../Forms/ChangePassword/ChangePassword";
import { CreateAddress } from "../../Forms/CreateAddress/CreateAddress";
import { OrdersHistory } from "./OrdersHistory/OrdersHistory";
import { UserAddresses } from "./UserAddresses/UserAddresses";

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

  const renderForm = () => {
    switch (activeForm) {
      case "changePassword":
        return <ChangePassword onSubmit={(data) => console.log(data)} />;
      case "createAddress":
        return <CreateAddress onSubmit={(data) => console.log(data)} />;
      default:
      case "userAddresses":
        return <UserAddresses />;
      case "ordersHistory":
        return <OrdersHistory />;
        return null;
    }
  };

  const handleButtonClick = (formName: string, path: string) => {
    setActiveForm(formName);
    navigate(path);
  };

  return { handleButtonClick, forms, activeForm, renderForm };
};
