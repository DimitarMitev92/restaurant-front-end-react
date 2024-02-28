import { BillPrintComponent } from "./BillPrint";
import { CartButton } from "../Cart/Cart.style";
import { ButtonDiv, StyledModal } from "./BillPrint.style";
import { PrintPreviewModalProps } from "./BillPrint.static";
import { useOrderContext } from "../../context/OrderProvider";
import UnifiedInput from "../ui-elements/Input/input";

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

  const onChangeAdditionalNoteOrder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = (e.target as HTMLInputElement).value;
    addAdditionalNoteForOrder(value);
  };

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
