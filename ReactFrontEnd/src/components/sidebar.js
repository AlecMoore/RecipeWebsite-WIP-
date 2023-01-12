import React, { useState } from "react";
import styled from "styled-components"
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
  width: 270px;
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

const SidebarWrap = styled.div`

`;

const testh1 = styled.h1`
    font-size: 25px;
`;

function Sidebar() {
    const [sidebar] = useState(false);
    return (
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
                <SidebarWrap>
                {AccountsData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    )
}

export default Sidebar;
