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

export const signInValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email.").required("Email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .max(20, "Password cannot be more than 20 characters long.")
    .required("Password is required."),
});

export const createRestaurantValidationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  locationId: Yup.string().uuid().required("Location is required."),
  imageUrl: Yup.string().required("Image url is required."),
  openHour: Yup.string().required("Open hour is required."),
  closeHour: Yup.string().required("Close hour is required."),
});

export const createLocationValidationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
});

export const createCategoryValidationSchema = Yup.object({
  type: Yup.string().required("Type is required."),
});

export const createPackageValidationSchema = Yup.object({
  type: Yup.string().required("Type is required."),
  price: Yup.number().required("Price is required."),
});

export const createMenuValidationSchema = Yup.object({
  type: Yup.string().required("Type is required."),
  restaurantId: Yup.string().uuid().required("Restaurant is required."),
});
