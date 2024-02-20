import RestaurantCard from "./RestaurantsCard/RestaurantCard";
import { Restaurant } from "./Restaurants.static";
import { CardsContainer, StyledContainer } from "./Restaurants.style";
import { useRestaurants } from "../../../hooks/useRestaurants";
import { PulseLoader } from "react-spinners";
import EmptyList from "../../EmptyList/EmptyList";

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
            <PulseLoader color="#4caf50" size={12} />
          ) : error ? (
            <p>Error loading restaurants.</p>
          ) : restaurants.length > 0 ? (
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
