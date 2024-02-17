import React from "react";
import { useLocations } from "../../../hooks/useLocations";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import {
  CreateRestaurantFormProps,
  CreateRestaurantFormValues,
  LocationData,
} from "../../../static/interfaces";
import { createRestaurantValidationSchema } from "../../../static/form-validations";
import { restaurantService } from "../../../services/restaurantService";
import { mainRoute } from "../../../static/endpoints";

export const CreateRestaurant: React.FC<CreateRestaurantFormProps> = ({
  onSubmit,
}) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();

  const formik = useFormik<CreateRestaurantFormValues>({
    initialValues: {
      name: "",
      locationId: "",
      openHour: "",
      closeHour: "",
      error: "",
    },
    validationSchema: createRestaurantValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        console.log(values);
        const restaurant = await restaurantService.createRestaurant(values);
        onSubmit && onSubmit(restaurant);
        resetForm();
        navigate(mainRoute.RESTAURANTS);
      } catch (error) {
        console.error("Caught error in form submission:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        setFieldError("error", errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <h1>CREATE RESTAURANT FORM</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* NAME */}
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
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

        {/* OPEN HOUR */}
        <label htmlFor="password">Open:</label>
        <input
          type="time"
          name="openHour"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.openHour}
        />
        {formik.touched.openHour && formik.errors.openHour && (
          <div>{formik.errors.openHour}</div>
        )}

        {/* CLOSE HOUR */}
        <label htmlFor="password">Close:</label>
        <input
          type="time"
          name="closeHour"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.closeHour}
        />
        {formik.touched.closeHour && formik.errors.closeHour && (
          <div>{formik.errors.closeHour}</div>
        )}

        {formik.errors.error && (
          <div style={{ color: "red" }}>{formik.errors.error}</div>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          Create
        </button>
      </form>
    </div>
  );
};
