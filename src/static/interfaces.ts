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

export interface LocationData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
