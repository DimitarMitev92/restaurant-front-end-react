import { useLocation, useNavigate } from "react-router-dom";
import { CancelButtonPopup, PopUpContainer } from "./PopUp.style";
import DeleteRestaurantMessageForm from "../Forms/DeleteRestaurantMessageForm/DeleteRestaurantMessageForm";

interface DeleteRestaurantPopUpProps {
  onCancel: () => void;
}

const DeleteRestaurantPopUp: React.FC<DeleteRestaurantPopUpProps> = ({
  onCancel,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const deletedId = pathSegments[pathSegments.length - 1];

  return (
    <PopUpContainer>
      <CancelButtonPopup
        onClick={() => {
          onCancel();
          navigate(-1);
        }}
      >
        X
      </CancelButtonPopup>
      <DeleteRestaurantMessageForm deletedId={deletedId} />
    </PopUpContainer>
  );
};

export default DeleteRestaurantPopUp;
