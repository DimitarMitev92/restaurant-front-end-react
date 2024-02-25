import { useNavigate, useParams } from "react-router";
import { useCategories } from "../../../hooks/useCategories";
import { usePackages } from "../../../hooks/usePackages";
import { CategoryData, Meal, PackageData } from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { mainRoute } from "../../../static/endpoints";
import { createMealValidationSchema } from "../../../static/form-validations";
import { mealService } from "../../../services/mealService";

export const CreateMeal: React.FC<{
  menuId: string;
  onSubmit: (meal: Meal) => void;
}> = ({ menuId, onSubmit }) => {
  const { categories = [] } = useCategories();
  const { packages = [] } = usePackages();
  const navigate = useNavigate();
  const { id: restaurantId } = useParams();
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
      inputsData={inputsCreateMealData}
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
        } catch (error) {
          console.error("Failed to create meal:", error);
        }
      }}
      buttonText="Create"
    />
  );
};
