import { useNavigate } from "react-router";
import { CreateCategoryFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createCategoryValidationSchema } from "../../../static/form-validations";
import { mainRoute } from "../../../static/endpoints";
import { categoryService } from "../../../services/categoryService";
import { inputsCreateCategoryData } from "./CreateCategory.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateCategory: React.FC<CreateCategoryFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <ReusableForm
      formHeading="Create category"
      inputsData={inputsCreateCategoryData}
      initialValues={{
        type: "",
        error: "",
      }}
      validationSchema={createCategoryValidationSchema}
      onSubmit={async (values) => {
        try {
          const category = await categoryService.createCategory(values);
          onSubmit && onSubmit(category);
          navigate(mainRoute.MAIN);
        } catch (error) {
          console.error("Failed to create category:", error);
          toast.error(`Failed to create category: ${error.message}`);
        }
      }}
      buttonText="Create"
    />
  );
};
