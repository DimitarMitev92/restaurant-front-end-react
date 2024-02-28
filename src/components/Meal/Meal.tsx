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
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../routes/routes.static";
import PopUp from "../PopUp/PopUp";
import { usePopupContext } from "../../context/PopupContext";
import { UpdateMeal } from "../Forms/UpdateMeal/UpdateMeal";
import UserRoleHOC from "../UserRoleHOC/UserRoleHOC";
import { useOrderContext } from "../../context/OrderProvider";
import DeleteMealPopUp from "../PopUp/DeleteMealPopUp";
import DeleteMealMessageForm from "../Forms/DeleteMealMessageForm/DeleteMealMessageForm";

export const Meal: React.FC<IMealProps> = ({ meal, menuId }) => {
  const { id } = useParams();

  const { addMealToBasket } = useOrderContext();

  const {
    isUpdateMealPopUpVisible,
    showUpdateMealPopUp,
    hideUpdateMealPopUp,
    hideDeleteMealPopUp,
    showDeleteMealPopUp,
    isDeleteMealPopUpVisible,
  } = usePopupContext();

  const navigate = useNavigate();

  const handlePopUp = () => {
    showUpdateMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${meal.id}`);
  };

  const handleCancel = () => {
    hideUpdateMealPopUp();
  };

  const addHandler = () => {
    addMealToBasket([meal], menuId);
  };

  const handleDeleteMeal = () => {
    showDeleteMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/delete/${meal.id}`);
  };

  const handleCancelDelete = () => {
    hideDeleteMealPopUp();
  };

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
            <UserRoleHOC>
              <AdminButtons>
              <StyledAddCircle onClick={addHandler}></StyledAddCircle>
                <StyledEditButton
                  onClick={() => handlePopUp()}
                ></StyledEditButton>
                <StyledRemoveButton
                  onClick={() => handleDeleteMeal()}
                ></StyledRemoveButton>
              </AdminButtons>
            </UserRoleHOC>
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
