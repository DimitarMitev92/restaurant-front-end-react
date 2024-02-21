import { RequestOptions, UserDataFromApiRefactor } from "../static/interfaces";
import { FetchDataError } from "./fetchDataFromApi";

export const signService = async (
  url: string,
  options: RequestOptions
): Promise<UserDataFromApiRefactor> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new FetchDataError(`${errorData.message}`);
    }

    const responseData = await response.json();

    const refactorData = {
      user: {
        id: responseData.user.id,
        firstName: responseData.user.firstName,
        lastName: responseData.user.lastName,
        email: responseData.user.email,
        locationId: responseData.user.locationId,
        rights: responseData.user.rights,
        accessToken: responseData.access_token,
      },
    };

    return refactorData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`An unexpected error occurred: ${error.message}`);
    } else {
      throw new Error(`An unexpected error occurred`);
    }
  }
};
