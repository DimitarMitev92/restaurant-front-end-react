import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createAddressValidationSchema } from "../../../static/form-validations";
import { addressService } from "../../../services/addressService";
import { CreateAddressFormProps } from "../../../static/interfaces";
import { useNavigate } from "react-router";
import { inputsCreateAddressData } from "./CreateAddress.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateAddress: React.FC<CreateAddressFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

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
        try {
          await addressService.createAddress(values);
          onSubmit && onSubmit(values);
          navigate("/profile/user-addresses");
        } catch (error) {
          console.error("Failed to create address:", error);
          toast.error(`Failed to create address: ${error.message}`);
        }
      }}
      buttonText={"Create"}
    />
  );
};
