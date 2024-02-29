import { useEffect, useState } from "react";
import { endpointAPI, method } from "../../../static/endpoints";
import { CreateMenuFormData } from "../../../static/interfaces";
import { fetchDataFromApi } from "../../../services/fetchDataFromApi";

export const useUpdateMenu = (updatedId: unknown) => {
  const [isLoading, setIsLoading] = useState(false);

  const [currentMenu, setCurrentMenu] = useState<CreateMenuFormData | null>(
    null
  );

  const [errorFromServer, setErrorFromServer] = useState(null);

  useEffect(() => {
    const fetchCurrentMenu = async () => {
      const url = `${endpointAPI.MENU}/${updatedId}`;
      const accessToken = sessionStorage.getItem("access_token");
      try {
        setIsLoading(true);
        const fetchedMenu = await fetchDataFromApi(
          url,
          accessToken,
          method.GET,
          null,
          "Error fetching menu"
        );

        setCurrentMenu(fetchedMenu);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setErrorFromServer(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentMenu();
  }, [updatedId]);

  return {
    isLoading,
    currentMenu,
    errorFromServer,
  };
};
