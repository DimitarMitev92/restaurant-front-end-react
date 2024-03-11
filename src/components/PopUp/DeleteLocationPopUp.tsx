import { DeleteLocationMessageForm } from "../pages/AdminDashboard/DisplayAndDelete/Locations/DeleteLocationMessageForm";
import { CancelButtonPopup, PopUpContainer, PopUpOverlay } from "./PopUp.style";

interface DeleteLocationPopUpProps {
  onCancel: () => void;
  locationId: string;
}

export const DeleteLocationPopUp: React.FC<DeleteLocationPopUpProps> = ({
  onCancel,
  locationId,
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
        <DeleteLocationMessageForm deletedId={locationId} />
      </PopUpContainer>
    </>
  );
};
