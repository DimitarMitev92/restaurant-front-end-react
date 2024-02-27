import { useNavigate } from "react-router-dom";
import { CancelButtonPopup, PopUpContainer, PopUpOverlay } from "./PopUp.style";

const PopUpCreate = ({ onCancel, CreateForm }) => {
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/");
  const menuId = pathSegments[pathSegments.length - 1];

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
        <CreateForm menuId={menuId} />
      </PopUpContainer>
    </>
  );
};

export default PopUpCreate;
