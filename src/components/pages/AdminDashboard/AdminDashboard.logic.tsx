import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateCategory } from "../../Forms/CreateCategory/CreateCategory";
import { CreateLocation } from "../../Forms/CreateLocation/CreateLocation";
import { CreateMenu } from "../../Forms/CreateMenu/CreateMenu";
import { CreatePackage } from "../../Forms/CreatePackage/CreatePackage";
import { CreateRestaurant } from "../../Forms/CreateRestaurant/CreateRestaurant";
import { CreateMenuType } from "../../Forms/CreateMenuType/CreateMenuType";

export const useAdminDashboardLogic = () => {
  const [activeForm, setActiveForm] = useState<string>("");
  const navigate = useNavigate();

  const forms = [
    {
      label: "Create Package",
      formName: "createPackage",
      path: "/admin-dashboard/create-package",
    },
    {
      label: "Create Restaurant",
      formName: "createRestaurant",
      path: "/admin-dashboard/create-restaurant",
    },
    {
      label: "Create Menu Type",
      formName: "createMenuType",
      path: "/admin-dashboard/create-menu-type",
    },
    {
      label: "Create Menu",
      formName: "createMenu",
      path: "/admin-dashboard/create-menu",
    },
    {
      label: "Create Location",
      formName: "createLocation",
      path: "/admin-dashboard/create-location",
    },
    {
      label: "Create Category",
      formName: "createCategory",
      path: "/admin-dashboard/create-category",
    },
  ];

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
