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
import { routes } from "../../../../routes/routes.static";

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${routes.RESTAURANTS}/${restaurant.id}`);
  };

  const openHourFormatted = restaurant?.openHour.slice(0, 5);
  const closeHourFormatted = restaurant?.closeHour.slice(0, 5);

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
          Open {openHourFormatted} - Close {closeHourFormatted}
        </p>
      </WorkingHoursOverlay>
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;
