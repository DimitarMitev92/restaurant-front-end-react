import styled from "styled-components";

export const WorkingHoursOverlay = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
  flex-direction: column;
  display: flex;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const RestaurantCardContainer = styled.div`
  position: relative;
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 300px; 
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-teal);

  &:hover img {
    filter: brightness(70%);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const RestaurantCardContent = styled.div`
  position: relative;
  display: flex;
  color: var(--color-green);
`;

export const RestaurantCardTitle = styled.h3`
  margin-bottom: 10px;
`;

export const CardImageContainer = styled.div`
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
export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: filter 0.3s;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--color-golden);
  color: var(--color-black);
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
