import { useNavigate } from "react-router";
import { CreatePackageFormProps } from "../../../static/interfaces";
import { Wrapper } from "../SignIn/SignInForm.style";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createPackageValidationSchema } from "../../../static/form-validations";
import { packageService } from "../../../services/packageService";
import { mainRoute } from "../../../static/endpoints";

export const CreatePackage: React.FC<CreatePackageFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  const inputsCreatePackageData = [
    {
      htmlFor: "type",
      labelTitle: "Package:",
      type: "text",
      name: "type",
      placeholder: "Enter package...",
    },
    {
      htmlFor: "price",
      labelTitle: "Price:",
      type: "number",
      name: "price",
      placeholder: "Enter price...",
    },
  ];

  return (
    <Wrapper>
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
          console.log(values);
          const category = await packageService.createPackage(values);
          onSubmit && onSubmit(category);
          navigate(mainRoute.MAIN);
        }}
        buttonText="Create"
      />
    </Wrapper>
  );
};
