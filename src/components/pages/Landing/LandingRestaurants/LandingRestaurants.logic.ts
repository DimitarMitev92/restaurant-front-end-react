import { useRestaurants } from "../../../../hooks/useRestaurants";
import { useRestaurantsByLocationId } from "../../../../hooks/useRestaurantsByLocation";

export const useLandingRestaurantsLogic = (selectedLocation: string) => {
  const {
    restaurants: allRestaurants,
    loading: loadingAll,
    error: errorAll,
  } = useRestaurants();

  const {
    restaurantsByLocation: restaurantsByLocation,
    loading: loadingByLocation,
    error: errorByLocation,
  } = useRestaurantsByLocationId(selectedLocation);


  const isLoading = selectedLocation ? loadingByLocation : loadingAll;
  const error = selectedLocation ? errorByLocation : errorAll;
  const restaurants = selectedLocation ? restaurantsByLocation : allRestaurants;

  return {
    restaurants,
    isLoading,
    error,
  };
};
