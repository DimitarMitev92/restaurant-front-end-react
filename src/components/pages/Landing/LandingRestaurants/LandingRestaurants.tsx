import {
  CardsContainer,
  RestaurantsWrapper,
  Title,
  TitleWithLinkContainer,
  StyledLink,
} from "./LandingRestaurants.style";
import RestaurantCard from "../../Restaurants/RestaurantsCard/RestaurantCard";
import { Restaurant } from "../../Restaurants/Restaurants.static";
import { PulseLoader } from "react-spinners";
import EmptyList from "../../../EmptyList/EmptyList";
import { useLandingRestaurantsLogic } from "./LandingRestaurants.logic";

export const LandingRestaurants = ({ selectedLocation = "" }) => {
  const {
    restaurants = [],
    isLoading,
    error,
  } = useLandingRestaurantsLogic(selectedLocation);

  return (
    <RestaurantsWrapper>
      <TitleWithLinkContainer>
        <Title>Most Popular Restaurants</Title>
        <StyledLink to={"restaurants"}>View All Restaurants</StyledLink>
      </TitleWithLinkContainer>
      <CardsContainer>
        {isLoading && <PulseLoader color="var(--color-green)" size={12} />}
        {error && <p>Error fetching restaurants</p>}
        {!isLoading &&
          !error &&
          (restaurants?.length > 0 ? (
            (restaurants || [])
              .slice(0, 5)
              .map((restaurant: Restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
          ) : (
            <EmptyList message="No restaurants available" />
          ))}
      </CardsContainer>
    </RestaurantsWrapper>
  );
};
