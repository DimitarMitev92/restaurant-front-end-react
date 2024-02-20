import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  /* justify-content: center;  
  align-items: center;       */
  min-height: 100vh;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: baseline;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 950px) {
    justify-content: center;
  }
`;
