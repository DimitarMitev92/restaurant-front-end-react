import { ReactNode } from "react";
import { IMeal } from "../../../static/interfaces";

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onRequestClose: () => void;
}

export interface PrintPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  componentRef: React.Ref<HTMLDivElement>;
  onDownload: () => void;
  onConfirmOrder: () => void;
}

export interface BillPrintComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  meals: IMeal[];
  totalPrice: number;
  deliveryMode: boolean;
  selectedAddressId: string;
}
