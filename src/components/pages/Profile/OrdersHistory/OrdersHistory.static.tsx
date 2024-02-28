export interface OrderHistoryRestaurant {
  closeHour: string;
  createdAt: string;
  deletedAt: null;
  id: string;
  imageUrl: string;
  locationId: string;
  name: string;
  openHour: string;
  updatedAt: string;
}

export interface OrderHistoryMeal {
  additionalNote: string;
  count: number;
  createdAt: string;
  deletedAt: null;
  id: string;
  meal: {
    categoryId: string;
    createdAt: string;
    deletedAt: null;
    description: string;
    endDate: string;
    endHour: string;
    id: string;
    menuId: string;
    name: string;
    packageId: string;
    picture: string;
    price: number;
    startDate: string;
    startHour: string;
    updatedAt: string;
    weight: number;
  };
  mealId: string;
  orderId: string;
  totalPrice: number;
  updatedAt: string;
}

export interface OrderData {
  id: string;
  additionalInfo: string;
  clientId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  meals: {
    additionalNote: string;
    count: number;
    createdAt: string;
    deletedAt: null;
    id: string;
    meal: OrderHistoryMeal[];
  };
  pickMethod: string;
  restaurant: OrderHistoryRestaurant;
  restaurantId: string;
}
