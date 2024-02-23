import { ReactNode } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: UserDataFromApiRefactor | null;
  setUser: React.Dispatch<React.SetStateAction<UserDataFromApiRefactor | null>>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface OrderProviderProps {
  children: ReactNode
}

export interface MealOrder {
  
}

export interface DecodedToken {
  sub: string;
  exp: number;
  firstName: string;
  lastName: string;
  email: string;
  locationId: string;
  rights: string;
}

export interface UserDataFromApi {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    locationId: string;
    rights: "ADMIN" | "CLIENT";
  };
  access_token: string;
}

export interface UserDataFromApiRefactor {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    locationId: string;
    rights: "ADMIN" | "CLIENT";
    accessToken: string;
  };
}

export interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: string;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  locationId: string;
  password: string;
}

export interface ChangePasswordFormProps {
  onSubmit: (ChangePasswordFormData: ChangePasswordFormData) => void;
}

export interface ChangePasswordFormValues {
  email: string;
  password: string;
  newPassword: string;
  comparePassword: string;
  error?: string;
}
export interface ChangePasswordFormData {
  email: string;
  password: string;
  newPassword: string;
  comparePassword: string;
}

export interface SignUpFormProps {
  onSubmit: (signUpFormData: SignUpFormData) => void;
}

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  locationId: string;
  password: string;
  error?: string;
}

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInFormProps {
  onSubmit: (signInFormData: SignInFormData) => void;
}

export interface SignInFormValues {
  email: string;
  password: string;
  error?: string;
}

export interface LocationData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface RestaurantData {
  id: string;
  name: string;
  locationId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface MenuTypeData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface MenuData {
  id: string;
  menuTypeId: string;
  menuTypeValue: string;
  restaurantId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CategoryData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface PackageData {
  id: string;
  type: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CreateRestaurantFormProps {
  onSubmit: (CreateRestaurantFormData: CreateRestaurantFormData) => void;
}

export interface CreateRestaurantFormData {
  name: string;
  locationId: string;
  imageUrl: string;
  openHour: string;
  closeHour: string;
}

export interface CreateRestaurantFormValues {
  name: string;
  locationId: string;
  imageUrl: string;
  openHour: string;
  closeHour: string;
  error?: string;
}

export interface CreateMealFormProps {
  updatedId?: string;
  onSubmit: (CreateMealFormData: CreateMealFormData) => void;
}

export interface CreateMealFormData {
  name: string;
  picture: string;
  description: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  price: number;
  weight: number;
  menuId: string;
  categoryId: string;
  packageId: string;
}

export interface CreateMealFormValues {
  name: string;
  picture: string;
  description: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  price: number;
  weight: number;
  menuId: string;
  categoryId: string;
  packageId: string;
  error?: string;
}

export interface CreateLocationFormProps {
  onSubmit: (CreateLocationFormData: CreateLocationFormData) => void;
}

export interface CreateLocationFormData {
  name: string;
}

export interface CreateLocationFormValues {
  name: string;
  error?: string;
}

export interface CreateCategoryFormProps {
  onSubmit: (CreateCategoryFormData: CreateCategoryFormData) => void;
}

export interface CreateCategoryFormData {
  type: string;
}

export interface CreateCategoryFormValues {
  type: string;
  error?: string;
}

export interface CreateMenuTypeFormProps {
  onSubmit: (CreateCategoryFormData: CreateCategoryFormData) => void;
}

export interface CreateMenuTypeFormData {
  type: string;
}

export interface UpdateMenuTypeFormData {
  type: string;
}

export interface CreateMenuTypeFormValues {
  type: string;
  error?: string;
}

export interface CreateAddressFormProps {
  onSubmit: (CreateAddressFormData: CreateAddressFormData) => void;
}

export interface CreateAddressFormData {
  address: string;
}

export interface UpdateAddressFormData {
  address: string;
}

export interface CreateAddressFormValues {
  address: string;
  error?: string;
}

export interface CreatePackageFormProps {
  onSubmit: (CreatePackageFormData: CreatePackageFormData) => void;
}

export interface CreatePackageFormData {
  type: string;
  price: number;
}

export interface CreatePackageFormValues {
  type: string;
  price: number;
  error?: string;
}

export interface CreateMenuFormProps {
  onSubmit: (CreateMenuFormData: CreateMenuFormData) => void;
}

export interface CreateMenuFormData {
  type: string;
  restaurantId: string;
}

export interface CreateMenuFormData {
  type: string;
  restaurantId: string;
  error?: string;
}

export interface UpdateMenuFormData {
  type?: string;
  restaurantId: string;
}

export interface CreatePackageFormData {
  type: string;
  price: number;
}
export interface UpdatePackageFormData {
  type?: string;
  price?: number;
}

export interface CreateCategoryFormData {
  type: string;
}
export interface UpdateCategoryFormData {
  type: string;
}

export interface CreateMealFormData {
  name: string;
  picture: string;
  description: string;
  additionalNote: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  price: number;
  weight: number;
  menuId: string;
  categoryId: string;
  packageId: string;
}

export interface UpdateMealFormData {
  id: string;
}
export interface Meal {
  mealId: string;
  count: number;
}
export interface CreateOrderFormData {
  clientId: string;
  restaurantId: string;
  pickMethod: string;
  additionalInfo?: string;
  meals: Meal[];
}

export interface UpdateOrderFormData {
  clientId?: string;
  restaurantId?: string;
  pickMethod?: string;
  additionalInfo?: string;
  meals?: Meal[];
}

export interface IMeal {
  id: string;
  name: string;
  description: string;
  additionalNote: string;
  picture: string;
  price: number;
  weight: number;
  startHour: string;
  endHour: string;
  startDate: string;
  endDate: string;
  categoryId: string;
  packegeId: string;
  mealId: string;
  count: number;
}

export interface IMealProps {
  meal: IMeal;
}

export interface IRestaurantsDetails {
  restaurant: string;
  type: string;
  menus: [
    {
      type: string;
      id: string;
      meals: IMeal[];
    }
  ];
}

export interface Menu {
  type: string;
  id: string;
  meals: IMeal[];
}

export interface MenuProps {
  filter: (type: string) => void;
  menu: Menu;
}

export interface ClearFilterProps {
  type: string;
  filter: (type: string) => void;
}

export interface MealHolderProps {
  menu: Menu;
}
