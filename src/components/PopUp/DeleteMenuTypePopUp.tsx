import { DeleteMenuTypeMessageForm } from "../pages/AdminDashboard/DisplayAndDelete/MenuType/DeleteMenuTypeMessageForm";
import { CancelButtonPopup, PopUpContainer, PopUpOverlay } from "./PopUp.style";

interface DeleteMenuTypePopUpProps {
  onCancel: () => void;
  menuTypeId: string;
}

export const DeleteMenuTypePopUp: React.FC<DeleteMenuTypePopUpProps> = ({
  onCancel,
  menuTypeId,
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
        <DeleteMenuTypeMessageForm deletedId={menuTypeId} />
      </PopUpContainer>
    </>
  );
};
