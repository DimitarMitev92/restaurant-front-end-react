import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateCategory } from "../../Forms/CreateCategory/CreateCategory";
import { CreateLocation } from "../../Forms/CreateLocation/CreateLocation";
import { CreateMenu } from "../../Forms/CreateMenu/CreateMenu";
import { CreatePackage } from "../../Forms/CreatePackage/CreatePackage";
import { CreateRestaurant } from "../../Forms/CreateRestaurant/CreateRestaurant";
import { CreateMenuType } from "../../Forms/CreateMenuType/CreateMenuType";
import { Locations } from "./DisplayAndDelete/Locations";
import { Packages } from "./DisplayAndDelete/Package";
import { MenuTypes } from "./DisplayAndDelete/MenuType";
import { Categories } from "./DisplayAndDelete/Category";
import { forms, showDataForDelete } from "./AdminDashboard.static";
import { usePopupContext } from "../../../context/PopupContext";

export const useAdminDashboardLogic = () => {
  const [activeForm, setActiveForm] = useState<string>("");
  const navigate = useNavigate();
  const { 
    showDeletePackagePopUp, 
    showDeleteLocationPopUp, 
    showDeleteCategoryPopUp, 
    showDeleteMenuTypePopUp 
  } = usePopupContext();

  const handleDeleteLocation = (locationId: string) => {
    console.log(`Deleting location with ID ${locationId}`);
  };

  const handleDeletePackage = (packageId: string) => {
    console.log(`Deleting package with ID ${packageId}`);
  };

  const handleDeleteCategory = (categoryId: string) => {
    console.log(`Deleting category with ID ${categoryId}`);
  };

  const handleDeleteMenuType = (menuTypeId: string) => {
    console.log(`Deleting menu type with ID ${menuTypeId}`);
  };

  const renderForm = () => {
    switch (activeForm) {
      case "createRestaurant":
        return (
          <CreateRestaurant
            onSubmit={(data) => console.log(data)}
            updatedId={""}
          />
        );
      case "createPackage":
        return <CreatePackage onSubmit={(data) => console.log(data)} />;
      case "createMenuType":
        return <CreateMenuType onSubmit={(data) => console.log(data)} />;
      case "createMenu":
        return (
          <CreateMenu onSubmit={(data) => console.log(data)} updatedId={""} />
        );
      case "createLocation":
        return <CreateLocation onSubmit={(data) => console.log(data)} />;
      case "createCategory":
        return <CreateCategory onSubmit={(data) => console.log(data)} />;
        case "Package":
          return (
            <Packages 
              onDelete={() => {
                showDeletePackagePopUp();
              }}
            />
          );
  
        case "Location":
          return (
            <Locations 
              onDelete={() => {
                showDeleteLocationPopUp();
              }}
            />
          );
  
        case "Category":
          return (
            <Categories 
              onDelete={() => {
                showDeleteCategoryPopUp();
              }}
            />
          );
  
        case "Menu Type":
          return (
            <MenuTypes 
              onDelete={() => {
                showDeleteMenuTypePopUp();
              }}
            />
          );
      default:
        return null;
    }
  };

  const handleButtonClick = (formName: string, path: string) => {
    setActiveForm(formName);
    if (["Location", "Category", "Menu Type", "Package"].includes(formName)) {
      navigate(path);
    } else {
      navigate(path);
    }
  };

  return {
    activeForm,
    handleButtonClick,
    forms,
    renderForm,
    showDataForDelete,
    handleDeleteLocation,
    handleDeletePackage,
    handleDeleteCategory,
    handleDeleteMenuType,
  };
};
