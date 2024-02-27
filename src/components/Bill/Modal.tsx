import { BillPrintComponent } from "./BillPrint";
import { CartButton } from "../Cart/Cart.style";
import { ButtonDiv, StyledModal } from "./BillPrint.style";
import { PrintPreviewModalProps } from "./BillPrint.static";
import { useOrderContext } from "../../context/OrderProvider";

export const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({
  isOpen,
  onClose,
  componentRef,
  onDownload,
  onConfirmOrder,
}) => {
  const { meals, totalPrice, deliveryMode, selectedAddressId } =
    useOrderContext();

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <BillPrintComponent
        ref={componentRef}
        isOpen={isOpen}
        onRequestClose={onClose}
        meals={meals}
        totalPrice={totalPrice}
        deliveryMode={deliveryMode}
        selectedAddressId={selectedAddressId}
      />
      <ButtonDiv>
        <CartButton onClick={onConfirmOrder}>Confirm Order</CartButton>
        <CartButton onClick={onDownload}>Download PDF</CartButton>
        <CartButton onClick={onClose}>Close</CartButton>
      </ButtonDiv>
    </StyledModal>
  );
};
