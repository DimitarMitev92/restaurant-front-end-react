import { useNavigate } from "react-router";
import { CreateMenuTypeFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMenuTypeValidationSchema } from "../../../static/form-validations";
import { mainRoute } from "../../../static/endpoints";
import { menuTypeService } from "../../../services/menuTypeService";
import { inputsMenuTypeData } from "./CreateMenuType.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateMenuType: React.FC<CreateMenuTypeFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <ReusableForm
      formHeading={"Create menu type"}
      inputsData={inputsMenuTypeData}
      initialValues={{
        type: "",
        error: "",
      }}
      validationSchema={createMenuTypeValidationSchema}
      onSubmit={async (values) => {
        try {
          const menuType = await menuTypeService.createMenuType(values);
          onSubmit && onSubmit(menuType);
        } catch (error) {
          console.error("Failed to create menu type:", error);
          toast.error(`Failed to create menu type: ${error.message}`);
        }
      }}
      buttonText={"Create"}
    />
  );
};
