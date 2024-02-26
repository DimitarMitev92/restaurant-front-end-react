import { BillPrintComponent } from "./BillPrint";
import { CartButton } from "../Cart/Cart.style";
import { ButtonDiv, StyledModal } from "./BillPrint.style";
import { PrintPreviewModalProps } from "./BillPrint.static";

export const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({
  isOpen,
  onClose,
  componentRef,
  onDownload,
  onConfirmOrder,
}) => {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <BillPrintComponent
        ref={componentRef}
        isOpen={isOpen}
        onRequestClose={onClose}
        cartItems={[]}
        totalPrice={0}
      />
      <ButtonDiv>
        <CartButton onClick={onConfirmOrder}>Confirm Order</CartButton>
        <CartButton onClick={onDownload}>Download PDF</CartButton>
        <CartButton onClick={onClose}>Close</CartButton>
      </ButtonDiv>
    </StyledModal>
  );
};
