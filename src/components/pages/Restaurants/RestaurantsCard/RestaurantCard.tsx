import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RestaurantCardContainer, RestaurantCardContent, RestaurantCardTitle, RestaurantImage } from './Restaurant.style';
import { RestaurantCardProps } from '../Restaurants.static';


const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <RestaurantCardContainer onClick={handleClick}>
      <RestaurantCardContent onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <RestaurantCardTitle>{restaurant.name}</RestaurantCardTitle>
        {isHovered && (
          <div>
            <p>Working hours:</p>
            <p>Open {restaurant.openHour} - Close {restaurant.closeHour}</p>
          </div>
        )}
      </RestaurantCardContent>
      <RestaurantImage
        src="/src/images/pexels-photo-376464.jpeg"
        alt="Restaurant Image"
      />
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;


