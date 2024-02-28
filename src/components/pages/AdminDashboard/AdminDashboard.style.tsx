import styled from "styled-components";
export const DashboardContainer = styled.div`
  padding: 100px;
  height: 100%;
  @media screen and (max-width: 650px) {
    height: 87vh;
  }
`;

export const Header = styled.h1`
  display: flex;
  color: var(--color-black);
  text-align: center;
  justify-content: center;
  color: var(--color-green);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1059px) {
    display: flex;
  }

  @media screen and (max-width: 685px) {
    display: grid;
  }
`;

export const WrapperDashBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85.8vh;
  overflow: overlay;
  &::-webkit-scrollbar {
    width: 4px;
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
  @media screen and (max-width: 650px) {
    height: 87vh;
  }
`;

