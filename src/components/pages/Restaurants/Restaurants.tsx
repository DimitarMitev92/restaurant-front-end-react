import RestaurantCard from "./RestaurantsCard/RestaurantCard";
import { Restaurant } from "./Restaurants.static";
import {
  CardsContainer,
  HeaderWithInputContainer,
  InputContainer,
  StyledContainer,
} from "./Restaurants.style";
import { PulseLoader } from "react-spinners";
import EmptyList from "../../EmptyList/EmptyList";
import UnifiedInput from "../../ui-elements/Input/input";
import { useRestaurantsPageLogic } from "./Restaurants.logic";
import { useAuth } from "../../../context/AuthProvider";
import { useRestaurantsByLocationId } from "../../../hooks/useRestaurantsByLocation";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";

const Restaurants = () => {
  const {
    options,
    restaurants: allRestaurants,
    isLoading,
    error,
    handleChange,
    selectedLocation,
  } = useRestaurantsPageLogic();

  const { user } = useAuth();

  const effectiveLocationId = user?.user.locationId || selectedLocation;
  const {
    restaurantsByLocation: restaurantsByUserLocation,
    loading: loadingByUserLocation,
    error: errorByUserLocation,
  } = useRestaurantsByLocationId(effectiveLocationId);

  const displayRestaurants = user ? restaurantsByUserLocation : allRestaurants;
  const displayLoading = user ? loadingByUserLocation : isLoading;
  const displayError = user ? errorByUserLocation : error;

  return (
    <>
      <StyledContainer>
        <HeaderWithInputContainer>
          <h2>Restaurants</h2>
          {!user && (
            <InputContainer>
              <UnifiedInput
                type="select"
                onChange={handleChange}
                value={selectedLocation}
                placeholder="Select location"
                name="location"
                options={options || []}
              />
            </InputContainer>
          )}
        </HeaderWithInputContainer>
        <CardsContainer>
          {displayLoading ? (
            <PulseLoader color="var(--color-green)" size={12} />
          ) : displayError ? (
            <p>{displayError}</p>
          ) : displayRestaurants && displayRestaurants.length > 0 ? (
            displayRestaurants.map((restaurant: Restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <EmptyList message="No restaurants available" />
          )}
        </CardsContainer>
        <ScrollToTopButton target="top" text="Scroll To Top" />
      </StyledContainer>
    </>
  );
};

export default Restaurants;
