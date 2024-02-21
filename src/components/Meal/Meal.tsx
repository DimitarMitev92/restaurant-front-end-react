import { useAuth } from "../../context/AuthProvider";
import {
  AddButton,
  BtnWrapper,
  EditButton,
  Img,
  Info,
  InfoAndPicture,
  MealCard,
  MealPicture,
  NameAndAddBtn,
  Price,
  RemoveButton,
} from "./Meal.style";

export const Meal = (props) => {
  console.log(props);

  const { user } = useAuth();

  console.log(user?.user.rights);

  let adminBtns;
  if (user?.user.rights === "ADMIN") {
    adminBtns = (
      <>
        <RemoveButton>R</RemoveButton>
        <EditButton>E</EditButton>
      </>
    );
  }

  return (
    <MealCard>
      <NameAndAddBtn>
        <div>
          {props.meal.name}
          <span>-</span>
          <span>{props.meal.weight}g</span>
        </div>
        <BtnWrapper>
          {user?.user.rights && adminBtns}
          <AddButton>+</AddButton>
        </BtnWrapper>
      </NameAndAddBtn>
      <InfoAndPicture>
        <Info>{props.meal.description}</Info>
        <MealPicture>
          <Img src="https://restaurant-two.s3.eu-north-1.amazonaws.com/1708357534060-kaouther-djouada-hcEDfkiVmMI-unsplash.jpg"></Img>
        </MealPicture>
      </InfoAndPicture>
      <Price>{props.meal.price} USD</Price>
    </MealCard>
  );
};
