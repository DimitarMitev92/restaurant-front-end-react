import { BillPrintComponent } from "./Bill/BillPrint";
import { CartButton } from "../Cart/Cart.style";
import { ButtonDiv, StyledModal } from "./Bill/BillPrint.style";
import { PrintPreviewModalProps } from "./Bill/BillPrint.static";
import { useOrderContext } from "../../context/OrderProvider";
import UnifiedInput from "../ui-elements/Input/input";
import { useModal } from "./Modal.logic";

export const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({
  isOpen,
  onClose,
  componentRef,
  onDownload,
  onConfirmOrder,
}) => {
  const {
    meals,
    totalPrice,
    deliveryMode,
    selectedAddressId,
    additionalNoteForOrder,
    addAdditionalNoteForOrder,
  } = useOrderContext();

  const { onChangeAdditionalNoteOrder } = useModal(addAdditionalNoteForOrder);

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
      <UnifiedInput
        type="text"
        name="additionalNoteOrder"
        value={additionalNoteForOrder}
        onChange={(e) => onChangeAdditionalNoteOrder(e)}
        placeholder="Additional note for order..."
      />
      <ButtonDiv>
        <CartButton onClick={onConfirmOrder}>Confirm Order</CartButton>
        <CartButton onClick={onDownload}>Download PDF</CartButton>
        <CartButton onClick={onClose}>Close</CartButton>
      </ButtonDiv>
    </StyledModal>
  );
};
