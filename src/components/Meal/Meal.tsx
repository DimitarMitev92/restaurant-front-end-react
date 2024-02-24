import { useAuth } from "../../context/AuthProvider";
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
import { rightsUser } from "../../static/endpoints";
import { UpdateMeal } from "../Forms/UpdateMeal/UpdateMeal";

export const Meal: React.FC<IMealProps> = ({ meal }) => {
  const { user } = useAuth();
  const { id } = useParams();

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

  const addHandler = () => {
    console.log("clicked");
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
            {user?.user.rights && adminBtns}
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
