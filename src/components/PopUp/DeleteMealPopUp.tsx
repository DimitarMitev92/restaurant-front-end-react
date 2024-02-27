import { useLocation, useNavigate } from "react-router-dom";
import { CancelButtonPopup, PopUpContainer, PopUpOverlay } from "./PopUp.style";
import DeleteMealMessageForm from "../Forms/DeleteMealMessageForm/DeleteMealMessageForm";

const DeleteMealPopUp = ({ onCancel, deleteMessage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const deletedId = pathSegments[pathSegments.length - 1];

  return (
    <>
      <PopUpOverlay />
      <PopUpContainer>
        <CancelButtonPopup
          onClick={() => {
            onCancel();
            navigate(-1);
          }}
        >
          X
        </CancelButtonPopup>
        <DeleteMealMessageForm deletedId={deletedId} />
      </PopUpContainer>
    </>
  );
};

export default DeleteMealPopUp;
