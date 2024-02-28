import { SwipeableProps } from "react-swipeable";
import { UnifiedInputProps } from "../ui-elements/Input/input";

export interface SwitchButtonProps {
  active: boolean;
}

export type SwipeEvent = SwipeableProps["onSwiped"];

export interface DeliverySwitchProps {
  deliveryMode: boolean;
  handleSwitchClick: (mode: boolean) => void;
}

export interface Address {
  id: string;
  address: string;
  userId: string;
}

export interface ApiResponse {
  addresses: Address[];
  loading: boolean;
  error: boolean;
}

export interface CartInputProps extends UnifiedInputProps {
  label?: string;
}

export interface Meal {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Meal;
  quantity: number;
}

export interface AutoTableOptions {
  startY?: number;
  head?: Array<Array<string>>;
  body?: Array<Array<string | number>>;
  theme?: string;
  styles?: {
    fontSize?: number;
    headStyles?: {
      fillColor: string;
    };
  };
}
