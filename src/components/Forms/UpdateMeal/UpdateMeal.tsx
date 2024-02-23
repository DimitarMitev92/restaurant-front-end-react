import { CreateMealFormProps } from "../../../static/interfaces";

export const UpdateMeal: React.FC<CreateMealFormProps> = ({
  updatedId,
  onSubmit,
}) => {
  const { menus = [] } = useMenus();
  const { categories = [] } = useCategories();
  const { packages = [] } = usePackages();

  const navigate = useNavigate();

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

  return (
    <ReusableForm
      formHeading="Create meal"
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
        menuId: "",
        categoryId: "",
        packageId: "",
        error: "",
      }}
      validationSchema={createMealValidationSchema}
      onSubmit={async (values) => {
        const meal = await mealService.createMeal(values);
        onSubmit && onSubmit(meal);
        navigate(mainRoute.MAIN);
      }}
      buttonText="Create"
    />
  );
};
