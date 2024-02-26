import { ReactNode } from "react";

export interface CartItem {
  product: {
    name: string;
    price: number;
  };
  quantity: number;
}

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
  cartItems: CartItem[];
  totalPrice: number;
}

