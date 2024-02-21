import { useNavigate } from "react-router";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createAddressValidationSchema } from "../../../static/form-validations";
import { mainRoute } from "../../../static/endpoints";
import { addressService } from "../../../services/addressService";

export const CreateAddress = () => {
  const navigate = useNavigate();

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
        navigate(mainRoute.MAIN);
      }}
      buttonText={"Create"}
    />
  );
};
