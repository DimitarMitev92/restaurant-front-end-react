import { useNavigate, useParams } from "react-router";
import { useCategories } from "../../../hooks/useCategories";
import { usePackages } from "../../../hooks/usePackages";
import {
  CategoryData,
  Meal,
  PackageData,
  ServerError,
} from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { mainRoute } from "../../../static/endpoints";
import { createMealValidationSchema } from "../../../static/form-validations";
import { mealService } from "../../../services/mealService";
import { inputsCreateMealData } from "./CreateMeal.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateMeal: React.FC<{
  menuId: string;
  onSubmit: (meal: Meal) => void;
}> = ({ menuId, onSubmit }) => {
  const { categories = [] } = useCategories();
  const { packages = [] } = usePackages();
  const navigate = useNavigate();
  const { id: restaurantId } = useParams();

  const inputsCreateMealDataWithCatAndPack = [
    ...inputsCreateMealData,
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

  return (
    <ReusableForm
      formHeading="Create Meal"
      inputsData={inputsCreateMealDataWithCatAndPack}
      initialValues={{
        name: "",
        picture: "",
        description: "",
        startDate: "",
        endDate: "",
        startHour: "",
        endHour: "",
        price: "",
        weight: "",
        menuId: menuId || "",
        categoryId: "",
        packageId: "",
        error: "",
      }}
      validationSchema={createMealValidationSchema}
      onSubmit={async (values) => {
        try {
          const meal = await mealService.createMeal(values);
          onSubmit && onSubmit(meal);
          navigate(`${mainRoute.RESTAURANTS}/${restaurantId}`);
        } catch (error: ServerError) {
          console.error("Failed to create meal:", error);
          toast.error(`Failed to create meal: ${error.message}`);
        }
      }}
      buttonText="Create"
    />
  );
};
