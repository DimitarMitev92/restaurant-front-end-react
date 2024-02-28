export interface SwitchButtonProps {
  $active: boolean;
}

export interface DeliverySwitchProps {
  deliveryMode: boolean;
  handleSwitchClick: (mode: boolean) => void;
}
