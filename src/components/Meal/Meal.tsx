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

export const Meal: React.FC<IMealProps> = ({ meal }) => {
  const { user } = useAuth();

  let adminBtns;
  if (user?.user.rights === "ADMIN") {
    adminBtns = (
      <>
        <RemoveButton>
          <IconImage src={trashIcon} />
        </RemoveButton>
        <EditButton>
          <IconImage src={editIcon} />
        </EditButton>
      </>
    );
  }

  return (
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
  );
};
