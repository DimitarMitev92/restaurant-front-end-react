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

export const changePasswordValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email.").required("Email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .max(20, "Password cannot be more than 20 characters long.")
    .required("Password is required"),
  newPassword: Yup.string()
    .min(6, "New password must be at least 6 characters long.")
    .max(20, "New password cannot be more than 20 characters long.")
    .required("New password is required"),
  comparePassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .min(6, "New password must be at least 6 characters long.")
    .max(20, "New password cannot be more than 20 characters long.")
    .required("New password is required"),
});

export const createRestaurantValidationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  locationId: Yup.string().uuid().required("Location is required."),
  imageUrl: Yup.string().required("Image url is required."),
  openHour: Yup.string().required("Open hour is required."),
  closeHour: Yup.string().required("Close hour is required."),
});

export const createMealValidationSchema = Yup.object({
  name: Yup.string().min(3).required("Name is required."),
  picture: Yup.string().url().required("Image URL is required."),
  description: Yup.string().min(10).required("Description is required."),
  startDate: Yup.string().required("Start date is required."),
  endDate: Yup.string().required("End date is required."),
  startHour: Yup.string().required("Start hour is required."),
  endHour: Yup.string().required("End hour is required."),
  price: Yup.number()
    .positive("Price must be a positive number.")
    .required("Price is required."),
  weight: Yup.number()
    .positive("Weight must be a positive number.")
    .required("Weight is required."),
  menuId: Yup.string().uuid().required("Menu is required."),
  categoryId: Yup.string().uuid().required("Category is required."),
  packageId: Yup.string().uuid().required("Package is required."),
});

export const createLocationValidationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
});

export const createCategoryValidationSchema = Yup.object({
  type: Yup.string().required("Type is required."),
});

export const createPackageValidationSchema = Yup.object({
  type: Yup.string().required("Type is required."),
  price: Yup.number()
    .positive("Price must be a positive number.")
    .required("Price is required."),
});

export const createMenuValidationSchema = Yup.object({
  type: Yup.string().required("Type is required."),
  restaurantId: Yup.string().uuid().required("Restaurant is required."),
});

export const createAddressValidationSchema = Yup.object({
  address: Yup.string().required("Address is required."),
});
