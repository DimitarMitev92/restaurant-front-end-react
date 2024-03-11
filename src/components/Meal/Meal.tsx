import {
  AdminButtons,
  BtnWrapper,
  Img,
  Info,
  InfoAndPicture,
  MealCard,
  MealPicture,
  NameAndAddBtn,
  Price,
  StyledAddCircle,
  StyledEditButton,
  StyledRemoveButton,
} from "./Meal.style";

import { IMealProps } from "../../static/interfaces";
import PopUp from "../PopUp/PopUp";
import { usePopupContext } from "../../context/PopupContext";
import { UpdateMeal } from "../Forms/UpdateMeal/UpdateMeal";
import UserRoleHOC from "../UserRoleHOC/UserRoleHOC";
import ClientRoleHOC from "../UserRoleHOC/ClientRoleHOC";
import DeleteMealPopUp from "../PopUp/DeleteMealPopUp";
import DeleteMealMessageForm from "../Forms/DeleteForms/DeleteMealMessageForm/DeleteMealMessageForm";
import { useMeal } from "./Meal.logic";

export const Meal: React.FC<IMealProps> = ({ meal, menuId }) => {
  const {
    isUpdateMealPopUpVisible,
    showUpdateMealPopUp,
    hideUpdateMealPopUp,
    hideDeleteMealPopUp,
    showDeleteMealPopUp,
    isDeleteMealPopUpVisible,
  } = usePopupContext();

  const {
    handlePopUp,
    handleCancel,
    addHandler,
    handleDeleteMeal,
    handleCancelDelete,
  } = useMeal(
    meal,
    menuId,
    showUpdateMealPopUp,
    hideUpdateMealPopUp,
    showDeleteMealPopUp,
    hideDeleteMealPopUp
  );

  return (
    <>
      <MealCard>
        <NameAndAddBtn>
          <div>
            {meal.name}
            <span>-</span>
            <span>{meal.weight}g</span>
          </div>
          <BtnWrapper>
            <AdminButtons>
              <ClientRoleHOC>
                <StyledAddCircle onClick={addHandler}></StyledAddCircle>
              </ClientRoleHOC>
              <UserRoleHOC>
                <StyledEditButton
                  onClick={() => handlePopUp()}
                ></StyledEditButton>
                <StyledRemoveButton
                  onClick={() => handleDeleteMeal()}
                ></StyledRemoveButton>
              </UserRoleHOC>
            </AdminButtons>
          </BtnWrapper>
        </NameAndAddBtn>
        <InfoAndPicture>
          <Info>{meal.description}</Info>
          <MealPicture>
            <Img src={meal.picture}></Img>
          </MealPicture>
        </InfoAndPicture>
        <Price>{meal.price} USD</Price>
      </MealCard>
      {isUpdateMealPopUpVisible && (
        <PopUp onCancel={handleCancel} UpdateForm={UpdateMeal} />
      )}
      {isDeleteMealPopUpVisible && (
        <DeleteMealPopUp
          onCancel={handleCancelDelete}
          deleteMessage={DeleteMealMessageForm}
        />
      )}
    </>
  );
};
