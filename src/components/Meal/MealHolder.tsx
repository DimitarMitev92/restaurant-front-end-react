import { useAuth } from "../../context/AuthProvider";
import { rightsUser } from "../../static/endpoints";
import { MealHolderProps } from "../../static/interfaces";
import { MenuName } from "../Menu/Menu.styles";
import { Meal } from "./Meal";
import {
  AdminButtons,
  EditButton,
  IconImage,
  MealsWrapper,
  RemoveButton,
} from "./Meal.style";

import trashIcon from "../../assets/trash-xmark.png";
import editIcon from "../../assets/edit.png";
import { usePopupContext } from "../../context/PopupContext";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../routes/routes.static";
import PopUp from "../PopUp/PopUp";
import { UpdateMeal } from "../Forms/UpdateMeal/UpdateMeal";
import { UpdateMenu } from "../Forms/UpdateMenu/UpdateMenu";

export const MealHolder: React.FC<MealHolderProps> = ({ menu }) => {
  const { user } = useAuth();

  const { id } = useParams();

  const { isUpdateMenuPopUpVisible, showUpdateMenuPopUp, hideUpdateMenuPopUp } =
    usePopupContext();

  const navigate = useNavigate();

  const handlePopUp = () => {
    showUpdateMenuPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${menu.id}`);
  };

  const handleCancel = () => {
    hideUpdateMenuPopUp();
  };

  let adminBtns;
  if (user?.user.rights === rightsUser.ADMIN) {
    adminBtns = (
      <AdminButtons>
        <EditButton onClick={() => handlePopUp()}>
          <IconImage src={editIcon} />
        </EditButton>
        <RemoveButton>
          <IconImage src={trashIcon} />
        </RemoveButton>
      </AdminButtons>
    );
  }

  return (
    <>
      <MealsWrapper>
        <MenuName>
          {menu.type} {user?.user.rights && adminBtns}
        </MenuName>

        {menu.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </MealsWrapper>
      {isUpdateMenuPopUpVisible && (
        <PopUp onCancel={handleCancel} UpdateForm={UpdateMenu} />
      )}
    </>
  );
};
