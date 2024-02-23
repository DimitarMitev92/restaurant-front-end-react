import { useAuth } from "../../context/AuthProvider";
import {
  AddButton,
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
import { useState } from "react";
import PopUp from "../PopUp/PopUp";
import { usePopupContext } from "../../context/PopupContext";

export const Meal: React.FC<IMealProps> = ({ meal }) => {
  const { user } = useAuth();
  const { id } = useParams();

  const { isPopUpVisible, showPopUp, hidePopUp } = usePopupContext();

  const navigate = useNavigate();

  const handlePopUp = () => {
    showPopUp();
    navigate(`${routes.RESTAURANTS}/${id}/update/${meal.id}`);
  };

  const handleCancel = () => {
    hidePopUp();
  };

  let adminBtns;
  if (user?.user.rights === "ADMIN") {
    adminBtns = (
      <>
        <RemoveButton>
          <IconImage src={trashIcon} />
        </RemoveButton>
        <EditButton onClick={() => handlePopUp()}>
          <IconImage src={editIcon} />
        </EditButton>
      </>
    );
  }

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
            {user?.user.rights && adminBtns}
            <AddButton>+</AddButton>
          </BtnWrapper>
        </NameAndAddBtn>
        <InfoAndPicture>
          <Info>{meal.description}</Info>
          <MealPicture>
            <Img src="https://restaurant-two.s3.eu-north-1.amazonaws.com/1708357534060-kaouther-djouada-hcEDfkiVmMI-unsplash.jpg"></Img>
          </MealPicture>
        </InfoAndPicture>
        <Price>{meal.price} USD</Price>
      </MealCard>
      {isPopUpVisible && <PopUp onCancel={handleCancel} />}
    </>
  );
};
