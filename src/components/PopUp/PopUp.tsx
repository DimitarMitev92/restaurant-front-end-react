import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CreateMeal } from "../Forms/CreateMeal/CreateMeal";
import { CancelButtonPopup, PopUpContainer } from "./PopUp.style";
import { routes } from "../../routes/routes.static";

const PopUp = ({ onCancel }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();

  const pathSegments = location.pathname.split("/");

  const updatedId = pathSegments[pathSegments.length - 1];

  return (
    <PopUpContainer>
      <CancelButtonPopup
        onClick={() => {
          onCancel();
          navigate(routes.RESTAURANTS_UPDATE.replace(":id", id));
        }}
      >
        X
      </CancelButtonPopup>
      {updatedId}
    </PopUpContainer>
  );
};

export default PopUp;
