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
import UnifiedInput from "../../ui-elements/input";
import { useRestaurantsPageLogic } from "./Restaurants.logic";

const Restaurants = () => {
  const {
    options,
    restaurants,
    isLoading,
    error,
    handleChange,
    selectedLocation,
  } = useRestaurantsPageLogic();

  return (
    <>
      <StyledContainer>
        <HeaderWithInputContainer>
          <h2>Restaurants</h2>
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
        </HeaderWithInputContainer>
        <CardsContainer>
          {isLoading ? (
            <PulseLoader color="var(--color-green)" size={12} />
          ) : error ? (
            <p>{error}</p>
          ) : restaurants && restaurants.length > 0 ? (
            restaurants.map((restaurant: Restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <EmptyList message="No restaurants available" />
          )}
        </CardsContainer>
      </StyledContainer>
    </>
  );
};

export default Restaurants;
