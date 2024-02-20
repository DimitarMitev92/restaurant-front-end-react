import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardImageContainer,
  RestaurantCardContainer,
  RestaurantCardContent,
  RestaurantCardTitle,
  RestaurantImage,
  WorkingHoursOverlay,
} from "./RestaurantCard.style";
import { RestaurantCardProps } from "../Restaurants.static";

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <RestaurantCardContainer
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RestaurantCardContent>
        <RestaurantCardTitle>{restaurant.name}</RestaurantCardTitle>
      </RestaurantCardContent>
      <CardImageContainer>
        <RestaurantImage src={restaurant.imageUrl} alt="Restaurant Image" />
      </CardImageContainer>
      <WorkingHoursOverlay
        style={{
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? "visible" : "hidden",
        }}
      >
        <p>Working hours:</p>
        <p>
          Open {restaurant.openHour} - Close {restaurant.closeHour}
        </p>
      </WorkingHoursOverlay>
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;