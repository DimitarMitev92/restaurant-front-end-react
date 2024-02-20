import { useNavigate } from "react-router";
import { CreateCategoryFormProps } from "../../../static/interfaces";
import { Wrapper } from "../SignIn/SignInForm.style";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createCategoryValidationSchema } from "../../../static/form-validations";
import { mainRoute } from "../../../static/endpoints";
import { categoryService } from "../../../services/categoryService";

export const CreateCategory: React.FC<CreateCategoryFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  const inputsCreateCategoryData = [
    {
      htmlFor: "type",
      labelTitle: "Category:",
      type: "text",
      name: "type",
      placeholder: "Enter category...",
    },
  ];

  return (
    <Wrapper>
      <ReusableForm
        formHeading="Create category"
        inputsData={inputsCreateCategoryData}
        initialValues={{
          type: "",
          error: "",
        }}
        validationSchema={createCategoryValidationSchema}
        onSubmit={async (values) => {
          console.log(values);
          const category = await categoryService.createCategory(values);
          onSubmit && onSubmit(category);
          navigate(mainRoute.MAIN);
        }}
        buttonText="Create"
      />
    </Wrapper>
  );
};
