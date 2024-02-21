import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85.8vh;
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 950px) {
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const HeaderWithInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-green);
  margin-bottom: 40px;
`;
