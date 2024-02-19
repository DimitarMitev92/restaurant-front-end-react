import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-yellow);
  padding: 1rem 2rem;
  font-size: 20px;

  @media screen and (max-width: 1150px) {
    .app__navbar-links {
      display: none;
    }

    .app__navbar-smallscreen {
      display: flex;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 150px;

  @media screen and (min-width: 2000px) {
    width: 210px;
  }

  @media screen and (max-width: 650px) {
    width: 110px;
  }
`;

export const LinksContainer = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const NavLi = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  color: var(--color-green);

  &:hover {
    color: var(--color-grey);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const LoginLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.5s ease;
  color: var(--color-green);

  &:hover {
    border-bottom: 1px solid var(--color-green);
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 30px;
  background: var(--color-grey);
`;

export const SmallScreenContainer = styled.div`
  display: none;

  @media screen and (max-width: 1150px) {
    display: flex;
  }
`;

export const SmallScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-yellow);
  transition: 0.5s ease;
  flex-direction: column;
  z-index: 5;
`;

export const CloseIcon = styled(MdOutlineRestaurantMenu)`
  font-size: 27px;
  color: var(--color-green);
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SmallScreenLinks = styled.ul`
  list-style: none;
`;

export const SmallScreenNavLink = styled.li`
  margin: 2rem;
  cursor: pointer;
  color: var(--color-green);
  font-size: 2rem;
  text-align: center;
  /* font-family: var(--font-base); */

  &:hover {
    color: var(--color-green);
  }
`;
