import styled from "styled-components";

export const RestaurantCardContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 15px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 30vw;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #d6dcd7;

  &:hover img {
    filter: brightness(70%);
  }

  &:hover::before {
    content: "Working hours";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
  }
`;

export const RestaurantCardContent = styled.div`
  position: relative;
  display: flex;
  color: #02804beb;
`;

export const RestaurantCardTitle = styled.h3`
  margin-bottom: 10px;
`;

export const RestaurantImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  align-items: right;
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
