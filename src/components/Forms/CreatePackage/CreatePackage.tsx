import { useNavigate } from "react-router";
import { CreatePackageFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createPackageValidationSchema } from "../../../static/form-validations";
import { packageService } from "../../../services/packageService";
import { inputsCreatePackageData } from "./CreatePackage.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        try {
          const category = await packageService.createPackage(values);
          onSubmit && onSubmit(category);
        } catch (error) {
          console.error("Failed to create package:", error);
          toast.error(`Failed to create package: ${error.message}`);
        }
      }}
      buttonText="Create"
    />
  );
};
