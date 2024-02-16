import { RequestOptions, UserDataFromApi } from "../static/interfaces";
import { FetchDataError } from "./fetchDataFromApi";

export const signService = async (
  url: string,
  options: RequestOptions
): Promise<UserDataFromApi> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new FetchDataError(`${errorData.message}`);
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`An unexpected error occurred: ${error.message}`);
    } else {
      throw new Error(`An unexpected error occurred`);
    }
  }
};
