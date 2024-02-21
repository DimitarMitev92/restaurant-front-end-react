import { SwipeableProps } from "react-swipeable";

export interface SwitchButtonProps {
  active: boolean;
}

export type SwipeEvent = SwipeableProps['onSwiped'];

export interface DeliverySwitchProps {
  deliveryMode: boolean;
  handleSwitchClick: (mode: boolean) => void;
}

