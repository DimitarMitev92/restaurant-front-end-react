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
  onSubmit: (CreateRestaurantFormDataFormData: SignInFormData) => void;
}

export interface CreateRestaurantFormData {
  name: string;
  locationId: string;
  openHour: string;
  closeHour: string;
}

export interface CreateRestaurantFormValues {
  name: string;
  locationId: string;
  openHour: string;
  closeHour: string;
  error?: string;
}
