import { useNavigate, useParams } from "react-router-dom";
import { CreateMenuFormProps, MenuTypeData } from "../../../static/interfaces";
import { useMenuTypes } from "../../../hooks/useMenuTypes";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { mainRoute } from "../../../static/endpoints";
import { createMenuValidationSchema } from "../../../static/form-validations";
import { menuService } from "../../../services/menuService";
import ErrorMessage from "../../ui-elements/ErrorMessage/errorMessage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";
import { useUpdateMenu } from "./UpdateMenu.logic";

export const UpdateMenu: React.FC<CreateMenuFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams();

  const { menuTypes = [] } = useMenuTypes();
  const navigate = useNavigate();

  const { isLoading, currentMenu, errorFromServer } = useUpdateMenu(updatedId);

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

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

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
