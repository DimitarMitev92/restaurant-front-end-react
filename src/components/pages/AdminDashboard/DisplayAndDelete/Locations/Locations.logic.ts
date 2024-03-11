import { useEffect, useState } from "react";
import { LocationDataApi } from "../../../../../static/interfaces";
import { locationService } from "../../../../../services/locationService";
import { usePopupContext } from "../../../../../context/PopupContext";

export const useLocations = () => {
  const [locations, setLocations] = useState<LocationDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isDeleteLocationPopUpVisible,
    showDeleteLocationPopUp,
    hideDeleteLocationPopUp,
  } = usePopupContext();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setIsLoading(true);
        const locations = await locationService.fetchLocations();
        setLocations(locations);
      } catch (error) {
        setLocations([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocations();
  }, [isDeleteLocationPopUpVisible]);

  const handleDeleteLocation = () => {
    showDeleteLocationPopUp();
  };

  const handleCancelDelete = () => {
    hideDeleteLocationPopUp();
  };

  return {
    locations,
    isLoading,
    handleDeleteLocation,
    handleCancelDelete,
  };
};
