export const forms = [
  {
    label: "Create Package",
    formName: "createPackage",
    path: "/admin-dashboard/create-package",
  },
  {
    label: "Create Restaurant",
    formName: "createRestaurant",
    path: "/admin-dashboard/create-restaurant",
  },
  {
    label: "Create Menu Type",
    formName: "createMenuType",
    path: "/admin-dashboard/create-menu-type",
  },
  {
    label: "Create Menu",
    formName: "createMenu",
    path: "/admin-dashboard/create-menu",
  },
  {
    label: "Create Location",
    formName: "createLocation",
    path: "/admin-dashboard/create-location",
  },
  {
    label: "Create Category",
    formName: "createCategory",
    path: "/admin-dashboard/create-category",
  },
];
export interface Form {
  label: string;
  formName: string;
  path: string;
}

export const showDataForDelete = [
  {
    label: "Package",
    formName: "deletePackage",
    path: "/admin-dashboard/delete-package",
  },
  {
    label: "Menu Type",
    formName: "deleteMenuType",
    path: "/admin-dashboard/delete-menu-type",
  },
  {
    label: "Location",
    formName: "deleteLocation",
    path: "/admin-dashboard/delete-location",
  },
  {
    label: "Category",
    formName: "deleteCategory",
    path: "/admin-dashboard/delete-category",
  },
];

export interface PackagesProps {
  onDelete: (packageId: string) => void;
}

export interface CategoriesProps {
  onDelete: (categoryId: string) => void;
}

export interface MenuTypesProps {
  onDelete: (menuTypeId: string) => void;
}

export interface LocationsProps {
  onDelete: (locationId: string) => void;
}