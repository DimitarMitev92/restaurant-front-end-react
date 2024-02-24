import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createAddressValidationSchema } from "../../../static/form-validations";
import { addressService } from "../../../services/addressService";
import { CreateAddressFormProps } from "../../../static/interfaces";

export const CreateAddress: React.FC<CreateAddressFormProps> = ({
  onSubmit,
}) => {
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
      }}
      buttonText={"Create"}
    />
  );
};
