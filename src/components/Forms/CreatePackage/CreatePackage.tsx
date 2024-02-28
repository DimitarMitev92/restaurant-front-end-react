import { useNavigate } from "react-router";
import { CreatePackageFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createPackageValidationSchema } from "../../../static/form-validations";
import { packageService } from "../../../services/packageService";
import { mainRoute } from "../../../static/endpoints";
import { inputsCreatePackageData } from "./CreatePackage.static";

export const CreatePackage: React.FC<CreatePackageFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <ReusableForm
      formHeading="Create package"
      inputsData={inputsCreatePackageData}
      initialValues={{
        type: "",
        price: "",
        error: "",
      }}
      validationSchema={createPackageValidationSchema}
      onSubmit={async (values) => {
        const category = await packageService.createPackage(values);
        onSubmit && onSubmit(category);
        navigate(mainRoute.MAIN);
      }}
      buttonText="Create"
    />
  );
};
