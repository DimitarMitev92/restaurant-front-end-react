import { DeleteCategoryMessageForm } from "../pages/AdminDashboard/DisplayAndDelete/Category/DeleteCategoryMessageForm";
import { CancelButtonPopup, PopUpContainer, PopUpOverlay } from "./PopUp.style";

interface DeleteCategoryPopUpProps {
  onCancel: () => void;
  categoryId: string;
}

export const DeleteCategoryPopUp: React.FC<DeleteCategoryPopUpProps> = ({
  onCancel,
  categoryId,
}) => {
  return (
    <>
      <PopUpOverlay />
      <PopUpContainer>
        <CancelButtonPopup
          onClick={() => {
            onCancel();
          }}
        >
          X
        </CancelButtonPopup>
        <DeleteCategoryMessageForm deletedId={categoryId} />
      </PopUpContainer>
    </>
  );
};
