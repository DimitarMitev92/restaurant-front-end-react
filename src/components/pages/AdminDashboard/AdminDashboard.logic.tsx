import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateCategory } from "../../Forms/CreateCategory/CreateCategory";
import { CreateLocation } from "../../Forms/CreateLocation/CreateLocation";
import { CreateMenu } from "../../Forms/CreateMenu/CreateMenu";
import { CreatePackage } from "../../Forms/CreatePackage/CreatePackage";
import { CreateRestaurant } from "../../Forms/CreateRestaurant/CreateRestaurant";
import { CreateMenuType } from "../../Forms/CreateMenuType/CreateMenuType";
import { forms } from "./AdminDashboard.static";
export const useAdminDashboardLogic = () => {
  const [activeForm, setActiveForm] = useState<string>("");
  const navigate = useNavigate();

  const renderForm = () => {
    switch (activeForm) {
      case "createRestaurant":
        return <CreateRestaurant onSubmit={(data) => console.log(data)} />;
      case "createPackage":
        return <CreatePackage onSubmit={(data) => console.log(data)} />;
      case "createMenuType":
        return <CreateMenuType onSubmit={(data) => console.log(data)} />;
      case "createMenu":
        return <CreateMenu onSubmit={(data) => console.log(data)} />;
      case "createLocation":
        return <CreateLocation onSubmit={(data) => console.log(data)} />;
      case "createCategory":
        return <CreateCategory onSubmit={(data) => console.log(data)} />;
      default:
        return null;
    }
  };

  const handleButtonClick = (formName: string, path: string) => {
    setActiveForm(formName);
    navigate(path);
  };

  return { handleButtonClick, forms, activeForm, renderForm };
};
