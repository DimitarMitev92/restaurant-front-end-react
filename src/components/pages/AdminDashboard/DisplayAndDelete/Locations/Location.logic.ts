import { useEffect, useState } from "react";
import { LocationDataApi } from "../../../../../static/interfaces";
import { locationService } from "../../../../../services/locationService";

export const useLocationLogic = (onDelete: (arg0: string) => void) => {
  const [locations, setLocations] = useState<LocationDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);

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
  }, [triggerDelete]);

  const handleDeleteLocation = async (locationId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this location?"
      );

      if (isConfirmed) {
        await locationService.deleteLocationById(locationId);
        setTriggerDelete((prev) => !prev);
        onDelete(locationId);
      }
    } catch (error) {
      console.error("Error deleting location:", error);
    }
  };

  return {
    locations,
    isLoading,
    handleDeleteLocation,
  };
};
