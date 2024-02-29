import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "../../../hooks/useCategories";
import { usePackages } from "../../../hooks/usePackages";
import {
  CategoryData,
  CreateMealFormProps,
  Menu,
  PackageData,
} from "../../../static/interfaces";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { createMealValidationSchema } from "../../../static/form-validations";
import { mealService } from "../../../services/mealService";
import { mainRoute } from "../../../static/endpoints";
import ErrorMessage from "../../ui-elements/ErrorMessage/errorMessage";
import { useMenusByRestaurant } from "../../../hooks/useMenusByRestaurant";
import { inputsCreateMealData } from "./UpdateMeal.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";
import { useUpdateMealLogic } from "./UpdateMeal.logic";

export const UpdateMeal: React.FC<CreateMealFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { id } = useParams();

  const { menusByRestaurant = [] } = useMenusByRestaurant(id!);
  const { categories = [] } = useCategories();
  const { packages = [] } = usePackages();

  const navigate = useNavigate();

  const { isLoading, currentMeal, errorFromServer } =
    useUpdateMealLogic(updatedId);

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

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

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
        try {
          values.startDate = new Date(values.startDate)
            .toISOString()
            .split("T")[0];
          values.endDate = new Date(values.endDate).toISOString().split("T")[0];

          const meal = await mealService.updateMeal(updatedId, values);
          onSubmit && onSubmit(meal);
          navigate(`${mainRoute.RESTAURANTS}/${id}`);
        } catch (error) {
          console.error("Failed to update meal:", error);
          toast.error(`Failed to update meal: ${error.message}`);
        }
      }}
      buttonText="Update"
    />
  ) : (
    errorFromServer && <ErrorMessage error={errorFromServer} />
  );
};
