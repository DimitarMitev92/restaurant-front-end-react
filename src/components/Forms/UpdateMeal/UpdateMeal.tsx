import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "../../../hooks/useCategories";
import { usePackages } from "../../../hooks/usePackages";
import {
  CategoryData,
  CreateMealFormData,
  CreateMealFormProps,
  Menu,
  PackageData,
} from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMealValidationSchema } from "../../../static/form-validations";
import { mealService } from "../../../services/mealService";
import { endpointAPI, mainRoute, method } from "../../../static/endpoints";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";
import ErrorMessage from "../../ui-elements/errorMessage";
import { useMenusByRestaurant } from "../../../hooks/useMenusByRestaurant";
import { inputsCreateMealData } from "./UpdateMeal.static";

export const UpdateMeal: React.FC<CreateMealFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams();

  const { menusByRestaurant = [] } = useMenusByRestaurant(id!);
  const { categories = [] } = useCategories();
  const { packages = [] } = usePackages();

  const navigate = useNavigate();

  const [currentMeal, setCurrentMeal] = useState<CreateMealFormData | null>(
    null
  );

  const [errorFromServer, setErrorFromServer] = useState(null);

  const inputsCreateMealDataWithMenuCatPack = [
    ...inputsCreateMealData,
    {
      htmlFor: "menuId",
      labelTitle: "Menu:",
      type: "select",
      name: "menuId",
      placeholder: "Select menu",
      options: menusByRestaurant.map((menu: Menu) => ({
        value: menu.id,
        label: menu.menutypevalue,
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
      inputsData={inputsCreateMealDataWithMenuCatPack}
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
