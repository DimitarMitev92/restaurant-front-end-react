import React, { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextProps {
  isUpdateMealPopUpVisible: boolean;
  showUpdateMealPopUp: () => void;
  hideUpdateMealPopUp: () => void;
  isUpdateMenuPopUpVisible: boolean;
  showUpdateMenuPopUp: () => void;
  hideUpdateMenuPopUp: () => void;
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

  const contextValues: PopupContextProps = {
    isUpdateMealPopUpVisible,
    showUpdateMealPopUp,
    hideUpdateMealPopUp,
    isUpdateMenuPopUpVisible,
    showUpdateMenuPopUp,
    hideUpdateMenuPopUp,
  };

  return (
    <PopupContext.Provider value={contextValues}>
      {children}
    </PopupContext.Provider>
  );
};

// const {   isUpdateMealPopUpVisible,showUpdateMealPopUp,hideUpdateMealPopUp,isUpdateMenuPopUpVisible,showUpdateMenuPopUp, hideUpdateMenuPopUp, } = usePopupContext();
