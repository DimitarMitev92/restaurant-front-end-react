import { useFormik } from "formik";
import {
  LocationData,
  SignUpFormProps,
  SignUpFormValues,
} from "../../../static/interfaces";
import { signUpValidationSchema } from "../../../static/form-validations";
import { signService } from "../../../services/signService";
import {
  endpointAPI,
  headers,
  mainRoute,
  method,
} from "../../../static/endpoints";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSesionStorage";
import { useLocations } from "../../../hooks/useLocations";
import { useAuth } from "../../../context/AuthProvider";
import { FormDiv, FormHeading, ImageSignUp, Wrapper } from "./SignUpForm.style";

import imageSignUp from "../../../assets/sign-up.avif";
import InputLabel from "../../ui-elements/inputLabel";
import UnifiedInput from "../../ui-elements/input";
import ErrorMessage from "../../ui-elements/errorMessage";
import SubmitFormButton from "../../ui-elements/submitFormButton";

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      locationId: "",
      password: "",
      error: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        const url = endpointAPI.SIGN_UP;
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
        console.error("Sign-up error:", error);
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
      <ImageSignUp src={imageSignUp} alt="image-sign-up" />
      <FormDiv onSubmit={formik.handleSubmit}>
        <FormHeading>Sign up</FormHeading>
        {/* FIRST NAME */}
        <InputLabel htmlFor="firstName">First Name:</InputLabel>
        <UnifiedInput
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <ErrorMessage error={formik.errors.firstName} />
        )}

        {/* LAST NAME */}
        <InputLabel htmlFor="lastName">Last Name:</InputLabel>
        <UnifiedInput
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <ErrorMessage error={formik.errors.lastName} />
        )}

        {/* EMAIL */}
        <InputLabel htmlFor="email">Email:</InputLabel>
        <UnifiedInput
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage error={formik.errors.email} />
        )}

        {/* LOCATION */}
        <InputLabel htmlFor="locationId">Location:</InputLabel>
        <UnifiedInput
          type="select"
          name="locationId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationId}
          options={locations.map((location: LocationData) => ({
            value: location.id,
            label: location.name,
          }))}
          placeholder="Select location"
        />
        {formik.touched.locationId && formik.errors.locationId && (
          <ErrorMessage error={formik.errors.locationId} />
        )}

        {/* PASSWORD */}
        <InputLabel htmlFor="password">Password:</InputLabel>
        <UnifiedInput
          type="password"
          name="password"
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
          label="Sign Up"
        />
      </FormDiv>
    </Wrapper>
  );
};
