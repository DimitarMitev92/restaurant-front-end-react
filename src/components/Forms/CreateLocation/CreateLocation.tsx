import React from "react";
import { CreateLocationFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createLocationValidationSchema } from "../../../static/form-validations";
import { locationService } from "../../../services/locationService";
import { inputsCreateLocationData } from "./CreateLocation.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateLocation: React.FC<CreateLocationFormProps> = ({
  onSubmit,
}) => {
  return (
    <ReusableForm
      formHeading="Create location"
      inputsData={inputsCreateLocationData}
      initialValues={{
        name: "",
        error: "",
      }}
      validationSchema={createLocationValidationSchema}
      onSubmit={async (values) => {
        try {
          const location = await locationService.createLocation(values);
          onSubmit && onSubmit(location);
        } catch (error) {
          console.error("Failed to create location:", error);
          toast.error(`Failed to create location: ${error.message}`);
        }
      }}
      buttonText="Create"
    />
  );
};
