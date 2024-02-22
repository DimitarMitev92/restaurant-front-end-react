export interface Meal {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Meal;
  quantity: number;
}