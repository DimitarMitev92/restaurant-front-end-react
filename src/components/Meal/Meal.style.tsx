import styled from "styled-components";

export const MealCard = styled.section`
  height: 18rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: larger;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  max-width: 840px;
  max-height: 280px;
`;

export const MealsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2.5rem;
`;

export const NameAndAddBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoAndPicture = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  gap: 1.5rem;
`;

export const Info = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
`;

export const MealPicture = styled.div`
  width: 40%;
  height: 100%;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const AddButton = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: #9f9f9f;
  height: 2.55rem;
  width: 2.55rem;
  text-align: center;
  font-size: 2rem;
  color: #050505;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }

  &:active {
    background-color: #1c841c;
  }
`;

export const EditButton = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: #9f9f9f;
  height: 2.4rem;
  width: 2.4rem;
  text-align: center;
  font-size: 2rem;
  color: #050505;

  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }

  &:active {
    background-color: #ffee00;
  }
`;

export const RemoveButton = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: #9f9f9f;
  height: 2.4rem;
  width: 2.4rem;
  text-align: center;
  font-size: 2rem;
  color: #050505;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }

  &:active {
    background-color: #ff0000;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const Price = styled.div``;

export const IconImage = styled.img``;
