import { useState } from "react";
import { useNavigate } from "react-router";
import { forms } from "./Profile.static";

export const useProfileLogic = () => {
  const [activeForm, setActiveForm] = useState<string>("");
  const navigate = useNavigate();

  const handleButtonClick = (formName: string, path: string) => {
    setActiveForm(formName);
    navigate(path);
  };

  return { handleButtonClick, forms, activeForm };
};
