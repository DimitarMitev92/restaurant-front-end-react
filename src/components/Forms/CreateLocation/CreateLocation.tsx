import React from "react";
import { useNavigate } from "react-router";
import { CreateLocationFormProps } from "../../../static/interfaces";
import { Wrapper } from "../ReusableForm/ReusableForm.style";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createLocationValidationSchema } from "../../../static/form-validations";
import { locationService } from "../../../services/locationService";
import { mainRoute } from "../../../static/endpoints";

export const CreateLocation: React.FC<CreateLocationFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  const inputsCreateLocationData = [
    {
      htmlFor: "name",
      labelTitle: "Name:",
      type: "text",
      name: "name",
      placeholder: "Enter location...",
    },
  ];

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
