export interface Restaurant {
  id: string;
  name: string;
  locationId: string;
  openHour: string;
  closeHour: string;
  imageUrl: string;
}

export interface RestaurantCardProps {
  restaurant: Restaurant;
}
