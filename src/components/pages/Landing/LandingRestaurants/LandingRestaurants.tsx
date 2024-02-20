import {
  CardsContainer,
  RestaurantsWrapper,
  Title,
  TitleWithLinkContainer,
  StyledLink,
} from "./LandingRestaurants.style";
import RestaurantCard from "../../Restaurants/RestaurantsCard/RestaurantCard";
import { useRestaurants } from "../../../../hooks/useRestaurants";
import { Restaurant } from "../../Restaurants/Restaurants.static";
import { PulseLoader } from "react-spinners";

export const LandingRestaurants = () => {
  const { restaurants, loading, error } = useRestaurants();

  return (
    <RestaurantsWrapper>
      <TitleWithLinkContainer>
        <Title>Most Popular Restaurants</Title>

        <StyledLink to={"restaurants"}>View All Restaurants</StyledLink>
      </TitleWithLinkContainer>
      <CardsContainer>
        {loading && <PulseLoader color="#4caf50" size={12} />}
        {error && <p>Error fetching locations.</p>}
        {!loading &&
          !error &&
          restaurants?.map((restaurant: Restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </CardsContainer>
    </RestaurantsWrapper>
  );
};
