import { MealHolderProps } from "../../static/interfaces";
import { MenuName } from "../Menu/Menu.styles";
import { Meal } from "./Meal";
import {
  AdminButtons,
  MealsWrapper,
  StyledAddMealButton,
  StyledEditButton,
  StyledRemoveButton,
} from "./Meal.style";
import { usePopupContext } from "../../context/PopupContext";
import PopUp from "../PopUp/PopUp";
import { UpdateMenu } from "../Forms/UpdateMenu/UpdateMenu";
import PopUpCreate from "../PopUp/CreatePopUp";
import { CreateMeal } from "../Forms/CreateMeal/CreateMeal";
import UserRoleHOC from "../UserRoleHOC/UserRoleHOC";
import DeletePopUp from "../PopUp/DeleteMenuPopUp";
import DeleteMessageForm from "../Forms/DeleteForms/DeleteMessageForm/DeleteMessageForm";
import { useMealHolder } from "./MealHolder.logic";

export const MealHolder: React.FC<MealHolderProps> = ({ menu }) => {
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

  const {
    handlePopUp,
    handleCancel,
    handleCancelCreate,
    handleAddMeal,
    handleDeleteMenu,
    handleCancelDelete,
  } = useMealHolder(
    menu,
    showUpdateMenuPopUp,
    hideUpdateMenuPopUp,
    showAddMealPopUp,
    hideAddMealPopUp,
    hideDeleteMenuPopUp,
    showDeleteMenuPopUp
  );

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
