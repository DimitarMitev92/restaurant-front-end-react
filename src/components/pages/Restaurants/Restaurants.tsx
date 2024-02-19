import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantsCard/RestaurantCard";
import { Restaurant } from "./Restaurants.static";
import { restaurantService } from "../../../services/restaurantService";
import { StyledContainer } from "./Restaurants.style";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchRestaurantsData = async () => {
      try {
        const data = await restaurantService.fetchRestaurants();
        setRestaurants(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants", error);
        setIsError(true);
      }
    };
    fetchRestaurantsData();
  }, []);

  // function handleCreateRestaurant() {
  //   // Under construction
  // }

  return (
    <>
     <StyledContainer>
      <header>
        <h2>Your Restaurants</h2>
        {/* <div>
            <Button onClick={handleCreateRestaurant}>Create New Restaurant</Button>
        </div> */}
      </header>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading restaurants.</p>
        ) : restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p>No restaurants available. Create a restaurant to get started!</p>
        )}
      </div>
      </StyledContainer>
    </>
  );
};

export default Restaurants;
