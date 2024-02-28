import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createAddressValidationSchema } from "../../../static/form-validations";
import { addressService } from "../../../services/addressService";
import { CreateAddressFormProps } from "../../../static/interfaces";
import { useNavigate } from "react-router";

export const CreateAddress: React.FC<CreateAddressFormProps> = ({
  onSubmit,
}) => {

  const navigate = useNavigate()
  const inputsCreateAddressData = [
    {
      htmlFor: "address",
      labelTitle: "Address:",
      type: "text",
      name: "address",
      placeholder: "Enter your address",
    },
  ];

  return (
    <ReusableForm
      formHeading={"Create address"}
      inputsData={inputsCreateAddressData}
      initialValues={{
        address: "",
        error: "",
      }}
      validationSchema={createAddressValidationSchema}
      onSubmit={async (values) => {
        await addressService.createAddress(values);
        onSubmit && onSubmit(values);
        navigate('/profile/user-addresses')
      }}
      buttonText={"Create"}
    />
  );
};
