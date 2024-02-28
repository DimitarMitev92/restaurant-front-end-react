import React, { useState } from "react";
import { useFormik } from "formik";
import SubmitFormButton from "../../ui-elements/SubmitFormButton/submitFormButton";
import InputLabel from "../../ui-elements/InputLabel/inputLabel";
import UnifiedInput from "../../ui-elements/Input/input";
import ErrorMessage from "../../ui-elements/ErrorMessage/errorMessage";
import {
  EyeIcon,
  FormDiv,
  FormHeading,
  PasswordWrapper,
} from "./ReusableForm.style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usePopupContext } from "../../../context/PopupContext";

interface ReusableProps {
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
    name?: string;
    type?: string;
    price?: string;
    weight?: string;
    imageUrl?: string;
    picture?: string;
    description?: string;
    openHour?: string;
    closeHour?: string;
    startHour?: string;
    endHour?: string;
    startDate?: string;
    endDate?: string;
    firstName?: string;
    lastName?: string;
    locationId?: string;
    restaurantId?: string;
    menuTypeId?: string;
    menuId?: string;
    categoryId?: string;
    packageId?: string;
    address?: string;
    email?: string;
    password?: string;
    newPassword?: string;
    comparePassword?: string;
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

export const ReusableForm: React.FC<ReusableProps> = ({
  formHeading,
  inputsData,
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
}) => {
  const {
    hideUpdateMenuPopUp,
    hideUpdateMealPopUp,
    hideAddMealPopUp,
    hideUpdateRestaurantPopUp,
  } = usePopupContext();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        await onSubmit(values);
        resetForm();
        hideUpdateMenuPopUp();
        hideUpdateMealPopUp();
        hideAddMealPopUp();
        hideUpdateRestaurantPopUp();
      } catch (error) {
        console.error("Form submission error:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An expected error occurred.";
        setFieldError("error", errorMessage);
        setSubmitting(false);
        hideUpdateMenuPopUp();
        hideUpdateMealPopUp();
        hideAddMealPopUp();
        hideUpdateRestaurantPopUp();
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <FormDiv onSubmit={formik.handleSubmit}>
      <FormHeading>{formHeading}</FormHeading>

      {inputsData.map((input) => (
        <React.Fragment key={input.name}>
          <InputLabel htmlFor={input.htmlFor} children={input.labelTitle} />
          {input.type === "password" ? (
            <PasswordWrapper>
              <UnifiedInput
                type={passwordVisible ? "text" : "password"}
                name={input.name}
                placeholder={input.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[input.name]}
                options={input.options}
              />
              {passwordVisible ? (
                <EyeIcon>
                  <FaEyeSlash onClick={togglePasswordVisibility} />
                </EyeIcon>
              ) : (
                <EyeIcon>
                  <FaEye onClick={togglePasswordVisibility} />
                </EyeIcon>
              )}
            </PasswordWrapper>
          ) : (
            <UnifiedInput
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[input.name]}
              options={input.options}
            />
          )}
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
