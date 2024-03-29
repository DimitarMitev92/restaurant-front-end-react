import styled from "styled-components";

export const MostOrderedWrapper = styled.section`
  width: 100%;
  padding: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 950px) {
    justify-content: center;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  padding: 40px;
  text-align: start;
  font-size: 28px;
  font-weight: 600;
  color: var(--color-green);
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
