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
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* EMAIL */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}

        {/* PASSWORD */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}

        {formik.errors.error && (
          <div style={{ color: "red" }}>{formik.errors.error}</div>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          Sign In
        </button>
      </form>
    </div>
  );
};
