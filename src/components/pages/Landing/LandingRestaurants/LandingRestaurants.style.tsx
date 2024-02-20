import styled from "styled-components";
import { Link } from "react-router-dom";

export const RestaurantsWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  background: var(--color-white);
  padding: 20px;
`;

export const Title = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: var(--color-green);
`;

export const TitleWithLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  justify-content: space-between;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 950px) {
    justify-content: center;
  }
`;
export const StyledLink = styled(Link)`
  color: var(--color-green);
  text-decoration: none;
  &:hover {
    color: green;
    text-decoration: underline;
  }
`;
