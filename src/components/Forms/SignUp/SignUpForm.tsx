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
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useLocations } from "../../../hooks/useLocations";

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useContext(UserContext);

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
        setItem("access_token", JSON.stringify(userDataFromApi.access_token));
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* FIRST NAME */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}

        {/* LAST NAME */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}

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

        {/* LOCATION */}
        <label htmlFor="locationId">Location:</label>
        <select
          name="locationId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationId}
        >
          <option value="" disabled>
            Select location
          </option>
          {Array.isArray(locations) &&
            locations.length !== 0 &&
            locations.map((location: LocationData) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
        </select>
        {formik.touched.locationId && formik.errors.locationId && (
          <div>{formik.errors.locationId}</div>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};
