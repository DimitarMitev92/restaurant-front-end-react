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
  };

  return (
    <PopupContext.Provider value={contextValues}>
      {children}
    </PopupContext.Provider>
  );
};

// const {   isUpdateMealPopUpVisible,showUpdateMealPopUp,hideUpdateMealPopUp,isUpdateMenuPopUpVisible,showUpdateMenuPopUp, hideUpdateMenuPopUp, } = usePopupContext();
