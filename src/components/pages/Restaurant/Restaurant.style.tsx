import styled from "styled-components";

export const MenuWrapper = styled.main`
  height: 100%;
  width: 100%;
`;
export const RestaurantWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 100px;
  }
`;

export const RestaurantNameContainer = styled.h1`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 375px) {
    align-content: center;
  }
`;
export const WorkingHoursContainer = styled.h3`
  display: flex;
  padding: 20px;
`;
export const AdminButtonsContainer = styled.div`
  display: flex;
  gap: 0.25em;
`;
