import {
  AddButton,
  AdminButtons,
  BtnWrapper,
  EditButton,
  IconImage,
  Img,
  Info,
  InfoAndPicture,
  MealCard,
  MealPicture,
  NameAndAddBtn,
  Price,
  RemoveButton,
} from "./Meal.style";

import trashIcon from "../../assets/trash-xmark.png";
import editIcon from "../../assets/edit.png";
import { IMealProps } from "../../static/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../routes/routes.static";
import PopUp from "../PopUp/PopUp";
import { usePopupContext } from "../../context/PopupContext";
import { UpdateMeal } from "../Forms/UpdateMeal/UpdateMeal";
import UserRoleHOC from "../UserRoleHOC/UserRoleHOC";
import { useOrderContext } from "../../context/OrderProvider";

export const Meal: React.FC<IMealProps> = ({ meal}) => {
  const { id } = useParams();

  const { addMealToBasket } = useOrderContext();

  const { isUpdateMealPopUpVisible, showUpdateMealPopUp, hideUpdateMealPopUp } =
    usePopupContext();

  const navigate = useNavigate();

  const handlePopUp = () => {
    showUpdateMealPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${meal.id}`);
  };

  const handleCancel = () => {
    hideUpdateMealPopUp();
  };

  const addHandler = () => {
    addMealToBasket([meal]);
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
            <AddButton onClick={addHandler}>+</AddButton>
            <UserRoleHOC>
              <AdminButtons>
                <EditButton onClick={() => handlePopUp()}>
                  <IconImage src={editIcon} />
                </EditButton>
                <RemoveButton>
                  <IconImage src={trashIcon} />
                </RemoveButton>
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
    </>
  );
};
