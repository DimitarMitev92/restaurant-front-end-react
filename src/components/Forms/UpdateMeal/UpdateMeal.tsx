import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "../../../hooks/useCategories";
import { useMenus } from "../../../hooks/useMenus";
import { usePackages } from "../../../hooks/usePackages";
import {
  CategoryData,
  CreateMealFormData,
  CreateMealFormProps,
  MenuData,
  PackageData,
} from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMealValidationSchema } from "../../../static/form-validations";
import { mealService } from "../../../services/mealService";
import { endpointAPI, mainRoute, method } from "../../../static/endpoints";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";
import ErrorMessage from "../../ui-elements/errorMessage";

export const UpdateMeal: React.FC<CreateMealFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams();

  const { menus = [] } = useMenus();
  const { categories = [] } = useCategories();
  const { packages = [] } = usePackages();

  const navigate = useNavigate();

  const [currentMeal, setCurrentMeal] = useState<CreateMealFormData | null>(
    null
  );

  const [errorFromServer, setErrorFromServer] = useState(null);

  const inputsCreateMealData = [
    {
      htmlFor: "name",
      labelTitle: "Name:",
      type: "text",
      name: "name",
      placeholder: "Enter your name...",
    },
    {
      htmlFor: "picture",
      labelTitle: "Image url:",
      type: "text",
      name: "picture",
      placeholder: "Enter your image url...",
    },
    {
      htmlFor: "description",
      labelTitle: "Description:",
      type: "text",
      name: "description",
      placeholder: "Enter your description...",
    },
    {
      htmlFor: "startDate",
      labelTitle: "Start date:",
      type: "date",
      name: "startDate",
      placeholder: "Enter your start date...",
    },
    {
      htmlFor: "endDate",
      labelTitle: "End date:",
      type: "date",
      name: "endDate",
      placeholder: "Enter your end date...",
    },
    {
      htmlFor: "startHour",
      labelTitle: "Start hour:",
      type: "time",
      name: "startHour",
      placeholder: "Enter your start hour...",
    },
    {
      htmlFor: "endHour",
      labelTitle: "End hour:",
      type: "time",
      name: "endHour",
      placeholder: "Enter your end hour...",
    },
    {
      htmlFor: "price",
      labelTitle: "Price:",
      type: "number",
      name: "price",
      placeholder: "Enter price...",
    },
    {
      htmlFor: "weight",
      labelTitle: "Weight:",
      type: "number",
      name: "weight",
      placeholder: "Enter weight...",
    },
    {
      htmlFor: "menuId",
      labelTitle: "Menu:",
      type: "select",
      name: "menuId",
      placeholder: "Select menu",
      options: menus.map((menu: MenuData) => ({
        value: menu.id,
        label: menu.menuTypeValue,
      })),
    },
    {
      htmlFor: "categoryId",
      labelTitle: "Category:",
      type: "select",
      name: "categoryId",
      placeholder: "Select category",
      options: categories.map((category: CategoryData) => ({
        value: category.id,
        label: category.type,
      })),
    },
    {
      htmlFor: "packageId",
      labelTitle: "Package:",
      type: "select",
      name: "packageId",
      placeholder: "Select package",
      options: packages.map((packageData: PackageData) => ({
        value: packageData.id,
        label: packageData.type,
      })),
    },
  ];

  useEffect(() => {
    const fetchCurrentMeal = async () => {
      const url = `${endpointAPI.MEAL}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        const fetchedMeal = await fetchDataFromApi(
          url,
          accessToken,
          method.GET,
          null,
          "Error fetching meal"
        );

        const startDate = new Date(fetchedMeal.startDate);
        startDate.setDate(startDate.getDate());
        fetchedMeal.startDate = startDate.toISOString().split("T")[0];

        const endDate = new Date(fetchedMeal.endDate);
        endDate.setDate(endDate.getDate());
        fetchedMeal.endDate = endDate.toISOString().split("T")[0];

        setCurrentMeal(fetchedMeal);
      } catch (error) {
        console.error("Error fetching meal:", error);
        setErrorFromServer(error.message);
      }
    };
    fetchCurrentMeal();
  }, [updatedId]);

  return currentMeal ? (
    <ReusableForm
      formHeading="Update meal"
      inputsData={inputsCreateMealData}
      initialValues={{
        ...currentMeal,
        error: "",
      }}
      validationSchema={createMealValidationSchema}
      onSubmit={async (values) => {
        values.startDate = new Date(values.startDate)
          .toISOString()
          .split("T")[0];
        values.endDate = new Date(values.endDate).toISOString().split("T")[0];

        const meal = await mealService.updateMeal(updatedId, values);
        onSubmit && onSubmit(meal);
        navigate(`${mainRoute.RESTAURANTS}/${id}`);
      }}
      buttonText="Update"
    />
  ) : (
    errorFromServer && <ErrorMessage error={errorFromServer} />
  );
};
