import React, { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextProps {
  isUpdateMealPopUpVisible: boolean;
  showUpdateMealPopUp: () => void;
  hideUpdateMealPopUp: () => void;
  isUpdateMenuPopUpVisible: boolean;
  showUpdateMenuPopUp: () => void;
  hideUpdateMenuPopUp: () => void;
  isAddMealPopUpVisible: boolean;
  showAddMealPopUp: () => void;
  hideAddMealPopUp: () => void;
  isDeleteMenuPopUpVisible: boolean;
  showDeleteMenuPopUp: () => void;
  hideDeleteMenuPopUp: () => void;
  isDeleteMealPopUpVisible: boolean;
  showDeleteMealPopUp: () => void;
  hideDeleteMealPopUp: () => void;
  isUpdateRestaurantPopUpVisible: boolean;
  showUpdateRestaurantPopUp: () => void;
  hideUpdateRestaurantPopUp: () => void;
  isDeleteRestaurantPopUpVisible: boolean;
  showDeleteRestaurantPopUp: () => void;
  hideDeleteRestaurantPopUp: () => void;
  isDeletePackagePopUpVisible: boolean;
  showDeletePackagePopUp: () => void;
  hideDeletePackagePopUp: () => void;
  isDeleteLocationPopUpVisible: boolean;
  showDeleteLocationPopUp: () => void;
  hideDeleteLocationPopUp: () => void;
  isDeleteCategoryPopUpVisible: boolean;
  showDeleteCategoryPopUp: () => void;
  hideDeleteCategoryPopUp: () => void;
  isDeleteMenuTypePopUpVisible: boolean;
  showDeleteMenuTypePopUp: () => void;
  hideDeleteMenuTypePopUp: () => void;
}

const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopupContext must be used within a PopupProvider");
  }
  return context;
};

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [isUpdateMealPopUpVisible, setIsUpdateMealPopUpVisible] =
    useState(false);

  const [isUpdateMenuPopUpVisible, setIsUpdateMenuPopUpVisible] =
    useState(false);
  const [isAddMealPopUpVisible, setIsAddMealPopUpVisible] = useState(false);
  const [isDeleteMenuPopUpVisible, setIsDeleteMenuPopUpVisible] =
    useState(false);
  const [isDeleteMealPopUpVisible, setIsDeleteMealPopUpVisible] =
    useState(false);
  const [isDeleteRestaurantPopUpVisible, setIsDeleteRestaurantPopUpVisible] =
    useState(false);

  const [isUpdateRestaurantPopUpVisible, setIsUpdateRestaurantPopUpVisible] =
    useState(false);
    const [isDeletePackagePopUpVisible, setIsDeletePackagePopUpVisible] =
    useState(false);
    const [isDeleteLocationPopUpVisible, setIsDeleteLocationPopUpVisible] =
    useState(false);
    const [isDeleteCategoryPopUpVisible, setIsDeleteCategoryPopUpVisible] =
    useState(false);
    const [isDeleteMenuTypePopUpVisible, setIsDeleteMenuTypePopUpVisible] =
    useState(false);

  const showUpdateMealPopUp = () => {
    setIsUpdateMealPopUpVisible(true);
  };

  const hideUpdateMealPopUp = () => {
    setIsUpdateMealPopUpVisible(false);
  };

  const showUpdateMenuPopUp = () => {
    setIsUpdateMenuPopUpVisible(true);
  };

  const hideUpdateMenuPopUp = () => {
    setIsUpdateMenuPopUpVisible(false);
  };
  const showAddMealPopUp = () => setIsAddMealPopUpVisible(true);
  const hideAddMealPopUp = () => setIsAddMealPopUpVisible(false);
  const showDeleteMenuPopUp = () => setIsDeleteMenuPopUpVisible(true);
  const hideDeleteMenuPopUp = () => setIsDeleteMenuPopUpVisible(false);
  const showDeleteMealPopUp = () => setIsDeleteMealPopUpVisible(true);
  const hideDeleteMealPopUp = () => setIsDeleteMealPopUpVisible(false);
  const showDeleteRestaurantPopUp = () =>
    setIsDeleteRestaurantPopUpVisible(true);
  const hideDeleteRestaurantPopUp = () =>
    setIsDeleteRestaurantPopUpVisible(false);

  const showUpdateRestaurantPopUp = () => {
    setIsUpdateRestaurantPopUpVisible(true);
  };

  const hideUpdateRestaurantPopUp = () => {
    setIsUpdateRestaurantPopUpVisible(false);
  };

  const showDeletePackagePopUp = () => setIsDeletePackagePopUpVisible(true);
  const hideDeletePackagePopUp = () => setIsDeletePackagePopUpVisible(false);

  const showDeleteCategoryPopUp = () => setIsDeleteCategoryPopUpVisible(true);
  const hideDeleteCategoryPopUp = () => setIsDeleteCategoryPopUpVisible(false);

  const showDeleteLocationPopUp = () => setIsDeleteLocationPopUpVisible(true);
  const hideDeleteLocationPopUp = () => setIsDeleteLocationPopUpVisible(false);

  const showDeleteMenuTypePopUp = () => setIsDeleteMenuTypePopUpVisible(true);
  const hideDeleteMenuTypePopUp = () => setIsDeleteMenuTypePopUpVisible(false);
  const contextValues: PopupContextProps = {
    isUpdateMealPopUpVisible,
    showUpdateMealPopUp,
    hideUpdateMealPopUp,
    isUpdateMenuPopUpVisible,
    showUpdateMenuPopUp,
    hideUpdateMenuPopUp,
    isAddMealPopUpVisible,
    showAddMealPopUp,
    hideAddMealPopUp,
    isDeleteMenuPopUpVisible,
    showDeleteMenuPopUp,
    hideDeleteMenuPopUp,
    isDeleteMealPopUpVisible,
    showDeleteMealPopUp,
    hideDeleteMealPopUp,
    isDeleteRestaurantPopUpVisible,
    showDeleteRestaurantPopUp,
    hideDeleteRestaurantPopUp,
    isUpdateRestaurantPopUpVisible,
    showUpdateRestaurantPopUp,
    hideUpdateRestaurantPopUp,
    isDeletePackagePopUpVisible,
    showDeletePackagePopUp,
    hideDeletePackagePopUp,
    isDeleteCategoryPopUpVisible,
    showDeleteCategoryPopUp,
    hideDeleteCategoryPopUp,
    isDeleteLocationPopUpVisible,
    showDeleteLocationPopUp,
    hideDeleteLocationPopUp,
    isDeleteMenuTypePopUpVisible,
    showDeleteMenuTypePopUp,
    hideDeleteMenuTypePopUp,
  };

  return (
    <PopupContext.Provider value={contextValues}>
      {children}
    </PopupContext.Provider>
  );
};

// const {   isUpdateMealPopUpVisible,showUpdateMealPopUp,hideUpdateMealPopUp,isUpdateMenuPopUpVisible,showUpdateMenuPopUp, hideUpdateMenuPopUp, } = usePopupContext();
