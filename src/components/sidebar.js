import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";
import { AccountsData } from "./accountsData";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const NavLogo = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: center;
  align-items: center;
  height: 100px;
  text-decoration: none;
  font-size: 25px;
`;

const SidebarNav = styled.nav`
  background: #fffee9;
  width: 250px;
  height: 100vh;
  box-shadow: 1px 0px 10px;
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 80vh 20vh;
  overflow-y: auto;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 400ms;
  z-index: 10;
`;

const AccountLink = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #b4da81;
    border-left: 6px solid #4e8c77;
    cursor: pointer;
    transition: 300ms;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar] = useState(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <SidebarNav sidebar={sidebar}>
          {/* Sidebar main links */}
          <SidebarWrap>
            <NavLogo to="/">
              <span>Logo</span>
            </NavLogo>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>

          {/* Navbar account */}
          {AccountsData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
