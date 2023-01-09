import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarStyles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            About
          </NavLink>
          <NavLink to="/" activeStyle>
            Events
          </NavLink>
          <NavLink to="/" activeStyle>
            Annual Report
          </NavLink>
          <NavLink to="/" activeStyle>
            Teams
          </NavLink>
          <NavLink to="/" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
