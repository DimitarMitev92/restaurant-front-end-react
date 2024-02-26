import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Heading = styled.h1`
  color: var(--color-yellow);
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const StyledLink = styled(Link)`
  color: var(--color-green);
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;
