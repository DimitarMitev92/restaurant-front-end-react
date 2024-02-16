import { useState } from "react";
import {
  CloseIcon,
  Divider,
  LinksContainer,
  LoginContainer,
  LoginLink,
  LogoContainer,
  LogoImage,
  NavLi,
  Navbar,
  SmallScreenContainer,
  SmallScreenLinks,
  SmallScreenNavLink,
  SmallScreenOverlay,
} from "./Header.style";
import image from "../../../assets/gericht.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Navbar>
      <LogoContainer>
        <LogoImage src={image} alt="app__logo" />
      </LogoContainer>
      <LinksContainer>
        <NavLi>
          <NavLink to="/">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/#about">About Us</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/#most-ordered">Most Ordered</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/admin-dashboard">Admin Dashboard</NavLink>
        </NavLi>
      </LinksContainer>
      <LoginContainer>
        <LoginLink to="/auth">Log In / Registration</LoginLink>
        <Divider />
      </LoginContainer>
      <SmallScreenContainer>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <SmallScreenOverlay>
            <CloseIcon fontSize={27} onClick={() => setToggleMenu(false)} />
            <SmallScreenLinks>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to="/">Home</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to="/#about-us">About Us</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to="/#most-ordered">Most Ordered</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to="/restaurants">Restaurants</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to="/admin-dashboard">Admin Dashboard</NavLink>
              </SmallScreenNavLink>
            </SmallScreenLinks>
          </SmallScreenOverlay>
        )}
      </SmallScreenContainer>
    </Navbar>
  );
};
