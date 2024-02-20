import RestaurantCard from "./RestaurantsCard/RestaurantCard";
import { Restaurant } from "./Restaurants.static";
import { CardsContainer, StyledContainer } from "./Restaurants.style";
import { useRestaurants } from "../../../hooks/useRestaurants";

const Restaurants = () => {
  const { restaurants, loading, error } = useRestaurants();

  return (
    <>
      <StyledContainer>
        <header>
          <h2>Your Restaurants</h2>
          {/* <div>
            <Button onClick={handleCreateRestaurant}>Create New Restaurant</Button>
        </div> */}
        </header>
        <CardsContainer>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading restaurants.</p>
          ) : restaurants.length > 0 ? (
            restaurants.map((restaurant: Restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>No restaurants available.</p>
          )}
        </CardsContainer>
      </StyledContainer>
    </>
  );
};

export default Restaurants;
