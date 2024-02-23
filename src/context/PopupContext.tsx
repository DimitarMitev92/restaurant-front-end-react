import React, { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextProps {
  isPopUpVisible: boolean;
  showPopUp: () => void;
  hidePopUp: () => void;
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
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const showPopUp = () => {
    setIsPopUpVisible(true);
  };

  const hidePopUp = () => {
    setIsPopUpVisible(false);
  };

  const contextValues: PopupContextProps = {
    isPopUpVisible,
    showPopUp,
    hidePopUp,
  };

  return (
    <PopupContext.Provider value={contextValues}>
      {children}
    </PopupContext.Provider>
  );
};

// const { isPopUpVisible, showPopUp, hidePopUp } = usePopupContext();
