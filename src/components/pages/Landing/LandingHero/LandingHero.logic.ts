import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useLocations } from "../../../../hooks/useLocations";
import { Location } from "./LandingHero.static";
import { useRestaurants } from "../../../../hooks/useRestaurants";
import { useRestaurantsByLocationId } from "../../../../hooks/useRestaurantsByLocation";
import { LocationData } from "../../../../static/interfaces";

export const useLandingHeroLogic = (
  selectedLocation: string,
  setSelectedLocation: Dispatch<SetStateAction<string>>
) => {
  const { locations } = useLocations();

  const {
    restaurants: allRestaurants,
    loading: loadingAll,
    error: errorAll,
  } = useRestaurants();

  const {
    restaurantsByLocation,
    loading: loadingByLocation,
    error: errorByLocation,
  } = useRestaurantsByLocationId(selectedLocation);

  const isLoading = selectedLocation ? loadingByLocation : loadingAll;
  const error = selectedLocation ? errorByLocation : errorAll;
  const restaurants = selectedLocation ? restaurantsByLocation : allRestaurants;

  const options = locations?.map((location: Location) => ({
    label: location.name,
    value: location.id,
  }));
  const selectedLocationName = locations?.find(
    (location: LocationData) => location.id === selectedLocation
  )?.name;

  const handleLocationChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const value = (e.target as HTMLSelectElement).value;
    setSelectedLocation(value);
  };

  return {
    locations,
    error,
    selectedLocation,
    setSelectedLocation,
    handleLocationChange,
    selectedLocationName,
    options,
    isLoading,
    restaurants,
  };
};
