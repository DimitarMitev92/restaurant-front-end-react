import React, { useState } from "react";
import { useFormik } from "formik";
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
import SubmitFormButton from "../../ui-elements/SubmitFormButton/submitFormButton";
import { FormValues, ReusableProps } from "./ReusableForm.static";

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
