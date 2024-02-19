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
import {
  FormDiv,
  FormHeading,
  Input,
  Label,
  Select,
  Option,
  ErrorDiv,
  Wrapper,
} from "../SignIn/SignInForm.style";

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
        console.log(userDataFromApi);
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
      <FormDiv onSubmit={formik.handleSubmit}>
        <FormHeading>Sign up</FormHeading>
        {/* FIRST NAME */}
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <ErrorDiv>{formik.errors.firstName}</ErrorDiv>
        )}

        {/* LAST NAME */}
        <Label htmlFor="lastName">Last Name:</Label>
        <Input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <ErrorDiv>{formik.errors.lastName}</ErrorDiv>
        )}

        {/* EMAIL */}
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorDiv>{formik.errors.email}</ErrorDiv>
        )}

        {/* LOCATION */}
        <Label htmlFor="locationId">Location:</Label>
        <Select
          name="locationId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationId}
        >
          <Option value="" disabled>
            Select location
          </Option>
          {Array.isArray(locations) &&
            locations.length !== 0 &&
            locations.map((location: LocationData) => (
              <Option key={location.id} value={location.id}>
                {location.name}
              </Option>
            ))}
        </Select>
        {formik.touched.locationId && formik.errors.locationId && (
          <ErrorDiv>{formik.errors.locationId}</ErrorDiv>
        )}

        {/* PASSWORD */}
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          name="password"
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
          Sign Up
        </button>
      </FormDiv>
    </Wrapper>
  );
};
