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

const SidebarWrap = styled.div`
    overflow-y: hidden;
`;

function Sidebar() {
    return (
        <IconContext.Provider value={{ color: "#000000" }}>
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
        </IconContext.Provider>
    )
}

export default Sidebar;