import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  locationId: Yup.string().uuid().required("Location is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .max(20, "Password cannot be more than 20 characters long.")
    .required("Password is required."),
});
