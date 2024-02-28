import { useNavigate, useParams } from "react-router-dom";
import {
  CreateMenuFormData,
  CreateMenuFormProps,
  MenuTypeData,
} from "../../../static/interfaces";
import { useMenuTypes } from "../../../hooks/useMenuTypes";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { useEffect, useState } from "react";
import { endpointAPI, mainRoute, method } from "../../../static/endpoints";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";
import { createMenuValidationSchema } from "../../../static/form-validations";
import { menuService } from "../../../services/menuService";
import ErrorMessage from "../../ui-elements/ErrorMessage/errorMessage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateMenu: React.FC<CreateMenuFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams();

  const { menuTypes = [] } = useMenuTypes();
  const navigate = useNavigate();

  const [currentMenu, setCurrentMenu] = useState<CreateMenuFormData | null>(
    null
  );

  const [errorFromServer, setErrorFromServer] = useState(null);

  const inputsCreateMenuData = [
    {
      htmlFor: "menuTypeId",
      labelTitle: "menu Type:",
      type: "select",
      name: "menuTypeId",
      placeholder: "Select menu type",
      options: menuTypes.map((menuType: MenuTypeData) => ({
        value: menuType.id,
        label: menuType.type,
      })),
    },
  ];

  useEffect(() => {
    const fetchCurrentMenu = async () => {
      const url = `${endpointAPI.MENU}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        const fetchedMenu = await fetchDataFromApi(
          url,
          accessToken,
          method.GET,
          null,
          "Error fetching menu"
        );

        setCurrentMenu(fetchedMenu);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setErrorFromServer(error);
      }
    };
    fetchCurrentMenu();
  }, [updatedId]);

  return currentMenu ? (
    <ReusableForm
      formHeading="Update menu"
      inputsData={inputsCreateMenuData}
      initialValues={{
        ...currentMenu,
        error: "",
      }}
      validationSchema={createMenuValidationSchema}
      onSubmit={async (values) => {
        try {
          const menu = await menuService.updateMenu(updatedId, values);
          onSubmit && onSubmit(menu);
          navigate(`${mainRoute.RESTAURANTS}/${id}`);
        } catch (error) {
          console.error("Failed to update menu:", error);
          toast.error(`Failed to update menu: ${error.message}`);
        }
      }}
      buttonText="Update"
    />
  ) : (
    errorFromServer && <ErrorMessage error={errorFromServer} />
  );
};
