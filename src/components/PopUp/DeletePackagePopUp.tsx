import { CancelButtonPopup, PopUpContainer, PopUpOverlay } from "./PopUp.style";
import { DeletePackageMessageForm } from "../pages/AdminDashboard/DisplayAndDelete/Package/DeletePackageMessageForm";

interface DeletePackagePopUpProps {
  onCancel: () => void;
  packageId: string;
}

export const DeletePackagePopUp: React.FC<DeletePackagePopUpProps> = ({
  onCancel,
  packageId,
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
        <DeletePackageMessageForm deletedId={packageId} />
      </PopUpContainer>
    </>
  );
};
