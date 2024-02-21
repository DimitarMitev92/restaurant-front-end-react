import { useState, ChangeEvent } from "react";
import { useLocations } from "../../../hooks/useLocations";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { useRestaurantsByLocationId } from "../../../hooks/useRestaurantsByLocation";
import { Location } from "../Landing/LandingHero/LandingHero.static";

export const useRestaurantsPageLogic = () => {
  const { locations } = useLocations();
  const [selectedLocation, setSelectedLocation] = useState<string>("");

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

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setSelectedLocation(value);
  };

  const options = locations?.map((location: Location) => ({
    label: location.name,
    value: location.id,
  }));

  return {
    options,
    restaurants,
    isLoading,
    error,
    handleChange,
    selectedLocation,
  };
};
