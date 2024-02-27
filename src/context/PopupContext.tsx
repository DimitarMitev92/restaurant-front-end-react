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
  isDeleteRestaurantPopUpVisible: boolean;
  showDeleteRestaurantPopUp: () => void;
  hideDeleteRestaurantPopUp: () => void;
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
  const showDeleteRestaurantPopUp = () => setIsDeleteRestaurantPopUpVisible(true);
  const hideDeleteRestaurantPopUp = () => setIsDeleteRestaurantPopUpVisible(false);



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
  };

  return (
    <PopupContext.Provider value={contextValues}>
      {children}
    </PopupContext.Provider>
  );
};

// const {   isUpdateMealPopUpVisible,showUpdateMealPopUp,hideUpdateMealPopUp,isUpdateMenuPopUpVisible,showUpdateMenuPopUp, hideUpdateMenuPopUp, } = usePopupContext();
