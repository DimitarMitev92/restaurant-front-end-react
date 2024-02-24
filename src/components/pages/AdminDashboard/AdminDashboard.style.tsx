import styled from "styled-components";
export const DashboardContainer = styled.div`
  padding: 20px;
  height: 85.8vh;
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
  @media screen and (max-width: 650px) {
    height: 87vh;
  }
`;
