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
import {
  ErrorDiv,
  FormDiv,
  FormHeading,
  Input,
  Label,
  Wrapper,
} from "./SignInForm.style";

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
      <FormDiv onSubmit={formik.handleSubmit}>
        <FormHeading>Sign in</FormHeading>
        {/* EMAIL */}
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          placeholder="Please enter your email..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorDiv>{formik.errors.email}</ErrorDiv>
        )}

        {/* PASSWORD */}
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          name="password"
          placeholder="Please enter your password..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorDiv>{formik.errors.password}</ErrorDiv>
        )}

        {formik.errors.error && (
          <ErrorDiv style={{ color: "red" }}>{formik.errors.error}</ErrorDiv>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          Sign In
        </button>
      </FormDiv>
    </Wrapper>
  );
};
