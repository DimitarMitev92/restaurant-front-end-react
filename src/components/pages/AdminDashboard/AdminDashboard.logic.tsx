import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateCategory } from "../../Forms/CreateCategory/CreateCategory";
import { CreateLocation } from "../../Forms/CreateLocation/CreateLocation";
import { CreateMeal } from "../../Forms/CreateMeal/CreateMeal";
import { CreateMenu } from "../../Forms/CreateMenu/CreateMenu";
import { CreatePackage } from "../../Forms/CreatePackage/CreatePackage";
import { CreateRestaurant } from "../../Forms/CreateRestaurant/CreateRestaurant";


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
    {
      label: "Create Meal",
      formName: "createMeal",
      path: "/admin-dashboard/create-meal",
    },
  ];

  const renderForm = () => {
    switch (activeForm) {
      case "createRestaurant":
        return <CreateRestaurant onSubmit={(data) => console.log(data)} />;
      case "createPackage":
        return <CreatePackage onSubmit={(data) => console.log(data)} />;
      case "createMenu":
        return <CreateMenu onSubmit={(data) => console.log(data)} />;
      case "createLocation":
        return <CreateLocation onSubmit={(data) => console.log(data)} />;
      case "createCategory":
        return <CreateCategory onSubmit={(data) => console.log(data)} />;
      case "createMeal":
        return <CreateMeal onSubmit={(data) => console.log(data)} />;
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
