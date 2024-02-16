import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainProps } from "./Main.static";

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
