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
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/routes.static";
import { useAuth } from "../../../context/AuthProvider";
import imageSrc from "../../../assets/FoodFlyLogo.png";

import { HashLink } from "react-router-hash-link";

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
          <HashLink smooth to={routes.MOST_ORDERED}>
            Most Ordered
          </HashLink>
        </NavLi>
        <NavLi>
          <HashLink to={routes.ABOUT_US}>About Us</HashLink>
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
          <>
            <LoginLink to={routes.PROFILE}>
              <FaUser />
            </LoginLink>
            <LoginLink to={routes.LOGOUT}>Log Out</LoginLink>
          </>
        )}
      </LoginContainer>
      <SmallScreenContainer>
        <GiHamburgerMenu
          color="var(--color-green)"
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
                <HashLink to={routes.MOST_ORDERED}>Most Ordered</HashLink>
              </SmallScreenNavLink>
              <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                <HashLink to={routes.ABOUT_US}>About Us</HashLink>
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
                <>
                  <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                    <NavLink to={routes.PROFILE}>Profile</NavLink>
                  </SmallScreenNavLink>
                  <SmallScreenNavLink onClick={() => setToggleMenu(false)}>
                    <NavLink to={routes.LOGOUT}>Log Out</NavLink>
                  </SmallScreenNavLink>
                </>
              )}
            </SmallScreenLinks>
          </SmallScreenOverlay>
        )}
      </SmallScreenContainer>
    </Navbar>
  );
};
