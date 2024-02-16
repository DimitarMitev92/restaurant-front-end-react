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
