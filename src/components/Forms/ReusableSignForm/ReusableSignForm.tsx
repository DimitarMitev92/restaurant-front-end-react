import React from "react";
import { useFormik } from "formik";
import SubmitFormButton from "../../ui-elements/submitFormButton";
import { FormDiv, FormHeading } from "../SignIn/SignInForm.style";
import InputLabel from "../../ui-elements/inputLabel";
import UnifiedInput from "../../ui-elements/input";
import ErrorMessage from "../../ui-elements/errorMessage";

interface ReusableSignFormProps {
  formHeading: string;
  inputsData: {
    options?:
      | {
          value: string;
          label: string;
        }[]
      | undefined;
    htmlFor: string;
    labelTitle: string;
    type: string;
    name: string;
    placeholder: string;
  }[];
  initialValues: {
    firstName?: string;
    lastName?: string;
    locationId?: string;
    email: string;
    password: string;
    error: string;
  };
  validationSchema: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => Promise<void>;
  buttonText: string;
}

interface FormValues {
  email: string;
  password: string;
  error: string;
  [key: string]: string;
}

export const ReusableSignForm: React.FC<ReusableSignFormProps> = ({
  formHeading,
  inputsData,
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
}) => {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        await onSubmit(values);
        resetForm();
      } catch (error) {
        console.error("Form submission error:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An expected error occurred.";
        setFieldError("error", errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <FormDiv onSubmit={formik.handleSubmit}>
      <FormHeading>{formHeading}</FormHeading>

      {inputsData.map((input) => (
        <React.Fragment key={input.name}>
          <InputLabel htmlFor={input.htmlFor} children={input.labelTitle} />
          <UnifiedInput
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[input.name]}
            options={input.options}
          />
          {formik.touched[input.name] &&
            formik.errors[input.name] !== undefined && (
              <ErrorMessage error={formik.errors[input.name] as string} />
            )}
        </React.Fragment>
      ))}

      {formik.errors.error && <ErrorMessage error={formik.errors.error} />}
      <SubmitFormButton
        type="submit"
        disabled={formik.isSubmitting}
        label={buttonText}
      />
    </FormDiv>
  );
};
