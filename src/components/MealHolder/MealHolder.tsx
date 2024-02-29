import { MealHolderProps } from "../../static/interfaces";
import { MenuName } from "../Menu/Menu.styles";
import { Meal } from "./Meal/Meal";
import {
  AdminButtons,
  MealsWrapper,
  StyledAddMealButton,
  StyledEditButton,
  StyledRemoveButton,
} from "./Meal/Meal.style";
import { usePopupContext } from "../../context/PopupContext";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../routes/routes.static";
import PopUp from "../PopUp/PopUp";
import { UpdateMenu } from "../Forms/UpdateMenu/UpdateMenu";
import PopUpCreate from "../PopUp/CreatePopUp";
import { CreateMeal } from "../Forms/CreateMeal/CreateMeal";
import UserRoleHOC from "../UserRoleHOC/UserRoleHOC";
import DeletePopUp from "../PopUp/DeleteMenuPopUp";
import DeleteMessageForm from "../Forms/DeleteMessageForm/DeleteMessageForm";

export const MealHolder: React.FC<MealHolderProps> = ({ menu }) => {
  const { id } = useParams();

  const {
    isUpdateMenuPopUpVisible,
    showUpdateMenuPopUp,
    hideUpdateMenuPopUp,
    showAddMealPopUp,
    hideAddMealPopUp,
    isAddMealPopUpVisible,
    isDeleteMenuPopUpVisible,
    hideDeleteMenuPopUp,
    showDeleteMenuPopUp,
  } = usePopupContext();

  const navigate = useNavigate();

  const handlePopUp = () => {
    showUpdateMenuPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${menu.id}`);
  };

  const handleCancel = () => {
    hideUpdateMenuPopUp();
  };
  const handleCancelCreate = () => {
    hideAddMealPopUp();
  };

  const handleAddMeal = () => {
    showAddMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/create/${menu.id}`);
  };

  const handleDeleteMenu = () => {
    showDeleteMenuPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/delete/${menu.id}`);
  };

  const handleCancelDelete = () => {
    hideDeleteMenuPopUp();
  };

  return (
    <>
      <MealsWrapper>
        <MenuName>
          {menu.type}
          <UserRoleHOC>
            <AdminButtons>
              <StyledAddMealButton
                onClick={() => handleAddMeal()}
              ></StyledAddMealButton>
              <StyledEditButton
                onClick={() => handlePopUp()}
              ></StyledEditButton>
              <StyledRemoveButton
                onClick={() => handleDeleteMenu()}
              ></StyledRemoveButton>
            </AdminButtons>
          </UserRoleHOC>
        </MenuName>

        {menu.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} menuId={menu.id} />;
        })}
      </MealsWrapper>
      {isUpdateMenuPopUpVisible && (
        <PopUp onCancel={handleCancel} UpdateForm={UpdateMenu} />
      )}
      {isAddMealPopUpVisible && (
        <PopUpCreate onCancel={handleCancelCreate} CreateForm={CreateMeal} />
      )}
      {isDeleteMenuPopUpVisible && (
        <DeletePopUp
          onCancel={handleCancelDelete}
          deleteMessage={DeleteMessageForm}
        />
      )}
    </>
  );
};
