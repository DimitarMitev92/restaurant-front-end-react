import { SwipeableProps } from "react-swipeable";
import { UnifiedInputProps } from "../ui-elements/input";

export interface SwitchButtonProps {
  active: boolean;
}

export type SwipeEvent = SwipeableProps['onSwiped'];

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
