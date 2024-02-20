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

export interface DecodedToken {
  exp: number;
  firstName: string;
  lastName: string;
  email: string;
  locationId: string;
  rights: string;
}

export interface UserDataFromApi {
  user: {
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

export interface CreateMenuFormData {
  type?: string;
  restaurantId: string;
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
