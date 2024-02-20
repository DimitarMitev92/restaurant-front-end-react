import React from "react";
import { useNavigate } from "react-router";
import { useSessionStorage } from "../../../hooks/useSesionStorage";
import { SignInFormProps, SignInFormValues } from "../../../static/interfaces";
import { signInValidationSchema } from "../../../static/form-validations";
import {
  endpointAPI,
  headers,
  mainRoute,
  method,
} from "../../../static/endpoints";
import { signService } from "../../../services/signService";
import { useFormik } from "formik";
import { useAuth } from "../../../context/AuthProvider";
import UnifiedInput from "../../ui-elements/input";
import InputLabel from "../../ui-elements/inputLabel";
import ErrorMessage from "../../ui-elements/errorMessage";
import { FormDiv, FormHeading, ImageSignIn, Wrapper } from "./SignInForm.style";

import imageSignIn from "../../../assets/sign-in.avif";
import SubmitFormButton from "../../ui-elements/submitFormButton";

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  const formik = useFormik<SignInFormValues>({
    initialValues: {
      email: "",
      password: "",
      error: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        const url = endpointAPI.SIGN_IN;
        const options = {
          method: method.POST,
          headers: headers.CONTENT_TYPE_APP_JSON,
          body: JSON.stringify(values),
        };
        const userDataFromApi = await signService(url, options);
        onSubmit && onSubmit(values);
        resetForm();
        setItem("access_token", userDataFromApi.user.accessToken);
        setUser(userDataFromApi);
        navigate(mainRoute.MAIN);
      } catch (error) {
        console.error("Sign-in error:", error);
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
    <Wrapper>
      <ImageSignIn src={imageSignIn} alt="image-sign-in" />
      <FormDiv onSubmit={formik.handleSubmit}>
        <FormHeading>Sign in</FormHeading>
        {/* EMAIL */}
        <InputLabel htmlFor="email">Email:</InputLabel>
        <UnifiedInput
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage error={formik.errors.email} />
        )}

        {/* PASSWORD */}
        <InputLabel htmlFor="password">Password:</InputLabel>
        <UnifiedInput
          type="password"
          name="password"
          placeholder="Enter your password..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage error={formik.errors.password} />
        )}

        {formik.errors.error && <ErrorMessage error={formik.errors.error} />}

        <SubmitFormButton
          type="submit"
          disabled={formik.isSubmitting}
          label="Sign In"
        ></SubmitFormButton>
      </FormDiv>
    </Wrapper>
  );
};
