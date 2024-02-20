export class FetchDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FetchDataError";
  }
}

export const fetchDataFromApi = async (
  url: string,
  accessToken: string | null,
  methodType: string,
  body: unknown | null,
  errorMsg: string
) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    const options = {
      method: methodType,
      headers,
      body: body ? JSON.stringify(body) : null,
    };
    console.log(url);
    console.log(options);
    const response = await fetch(url, options);
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new FetchDataError(`${errorMsg}: ${errorData.message}`);
    }

    const data = await response.json();

    return data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
