import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
    flex-direction: column;
    padding: 100px 16px;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    margin: 4px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(217, 217, 217, 1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(196, 196, 196);
  }
    


  /* @media (max-width: 768px) {
    padding: 10px;
  } */

  /* @media (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
  } */
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: calc(100% -20px);
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
