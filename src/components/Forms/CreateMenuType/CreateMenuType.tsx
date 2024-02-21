import { useNavigate } from "react-router";
import { CreateMenuTypeFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMenuTypeValidationSchema } from "../../../static/form-validations";
import { mainRoute } from "../../../static/endpoints";
import { menuTypeService } from "../../../services/menuTypeService";

export const CreateMenuType: React.FC<CreateMenuTypeFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  const inputsMenuTypeData = [
    {
      htmlFor: "type",
      labelTitle: "Type:",
      type: "text",
      name: "type",
      placeholder: "Enter type...",
    },
  ];

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
        const menuType = await menuTypeService.createMenuType(values);
        onSubmit && onSubmit(menuType);
        navigate(mainRoute.MAIN);
      }}
      buttonText={"Create"}
    />
  );
};
