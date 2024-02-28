import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  padding: 1rem;
  overflow: hidden;
  height: 17rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: filter 0.3s;
`;
