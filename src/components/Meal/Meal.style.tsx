import styled from "styled-components";

export const MealCard = styled.section`
  height: 18rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(color-white-smoke);
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
  background-color: var(--color-gray);
  height: 2.55rem;
  width: 2.55rem;
  text-align: center;
  font-size: 2rem;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    background-color: var(--color-white-smoke);
  }

  &:active {
    background-color: var(--color-dark-green);
  }
`;

export const EditButton = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: var(--color-grey);
  height: 2.4rem;
  width: 2.4rem;
  text-align: center;
  font-size: 2rem;
  color: var(--color-black);

  cursor: pointer;

  &:hover {
    background-color: var(--color-white-smoke);
  }

  &:active {
    background-color: var(--color-yellow);
  }
`;

export const RemoveButton = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: var(--color-grey);
  height: 2.4rem;
  width: 2.4rem;
  text-align: center;
  font-size: 2rem;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    background-color: var(--color-white-smoke);
  }

  &:active {
    background-color: var(--color-bright-red);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const Price = styled.div``;

export const IconImage = styled.img``;
