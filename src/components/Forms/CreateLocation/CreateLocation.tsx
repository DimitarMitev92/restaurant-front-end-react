import React from "react";
import { useNavigate } from "react-router";
import { CreateLocationFormProps } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createLocationValidationSchema } from "../../../static/form-validations";
import { locationService } from "../../../services/locationService";
import { mainRoute } from "../../../static/endpoints";
import { inputsCreateLocationData } from "./CreateLocation.static";

export const CreateLocation: React.FC<CreateLocationFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

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
        const location = await locationService.createLocation(values);
        onSubmit && onSubmit(location);
        navigate(mainRoute.MAIN);
      }}
      buttonText="Create"
    />
  );
};
