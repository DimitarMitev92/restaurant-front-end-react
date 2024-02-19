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
import { routes } from "../../../routes/routes.static";
import { useAuth } from "../../../context/AuthProvider";
import imageSrc from '../../../images/Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__2___1_-removebg-preview.png'
export const Header = () => {
  const { user } = useAuth();

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Navbar>
      <LogoContainer>
        <LogoImage src={imageSrc} alt="app__logo" />
      </LogoContainer>
      <LinksContainer>
        <NavLi>
          <NavLink to={routes.MAIN}>Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={routes.ABOUT_US}>About Us</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={routes.MOST_ORDERED}>Most Ordered</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={routes.RESTAURANTS}>Restaurants</NavLink>
        </NavLi>
        {user && user.user.rights === "ADMIN" && (
          <NavLi>
            <NavLink to={routes.ADMIN_DASHBOARD}>Admin Dashboard</NavLink>
          </NavLi>
        )}
      </LinksContainer>
      <LoginContainer>
        {!user ? (
          <>
            <LoginLink to={routes.SIGN_IN}>Sign In</LoginLink>
            <Divider />
            <LoginLink to={routes.SIGN_UP}>Sign Up</LoginLink>
          </>
        ) : (
          <LoginLink to={routes.LOGOUT}>Log Out</LoginLink>
        )}
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
                <NavLink to={routes.MAIN}>Home</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to={routes.ABOUT_US}>About Us</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to={routes.MOST_ORDERED}>Most Ordered</NavLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <NavLink to={routes.RESTAURANTS}>Restaurants</NavLink>
              </SmallScreenNavLink>
              {user && user.user.rights === "ADMIN" && (
                <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                  <NavLink to={routes.ADMIN_DASHBOARD}>Admin Dashboard</NavLink>
                </SmallScreenNavLink>
              )}
              {!user ? (
                <>
                  <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                    <NavLink to={routes.SIGN_IN}>Sign In</NavLink>
                  </SmallScreenNavLink>
                  <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                    <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
                  </SmallScreenNavLink>
                </>
              ) : (
                <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                  <NavLink to={routes.LOGOUT}>Log Out</NavLink>
                </SmallScreenNavLink>
              )}
            </SmallScreenLinks>
          </SmallScreenOverlay>
        )}
      </SmallScreenContainer>
    </Navbar>
  );
};
