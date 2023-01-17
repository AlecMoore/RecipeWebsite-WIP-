import React, { useState } from "react";
import styled from "styled-components"
import { SidebarData } from "./sidebarData";
import SubMenu from "./subMenu";
import { AccountsData } from "./accountsData";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

const Nav = styled.div`
  background: #fffee9;
  position: relative;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 0px 12px;
  z-index: 1;

`;

const NavIcon = styled.label`
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: #fff;
    top: 10px;
    left: 15px;
    cursor: pointer;
    border-radius: 2px;
    box-shadow: 0 0 10px #000;
    .common{
        position: absolute;
        height: 2px;
        width: 20px;
        background-color: #000;
        border-radius: 50px;
        transition: 300ms ease;
    }
    .top_line{
        top: 25%;
        left: 50%;
        transform: translate(-50%, 50%);
    }    
    .middle_line{
        top: 45%;
        left: 50%;
        transform: translate(-50%, 50%);
     }    
     .bottom_line{
        top: 65%;
        left: 50%;
        transform: translate(-50%, 50%);
     }
`;

const ToggleSidebar = styled.input`
    display: none;

    &:checked + ${NavIcon}{
    .top_line{
        left: 7px;
        top: 18px;
        width: 25px;
        transform: rotate(45deg);
    }    
    .bottom_line{
        left: 7px;
        top: 18px;
        width: 25px;
        transform: rotate(-45deg);
    }    
    .middle_line{
        opacity: 0;
        transform: translateX(20px);
    }  
}
`;

const SidebarNav = styled.nav`
  background: #fffee9;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  padding-top: 100px;
  box-shadow: 1px 0px 12px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 450ms;
`;

const SidebarWrap = styled.div`
    overflow-y: hidden;
    width: 95%;
`;

const AccountsWrap = styled.div`
    overflow-y: hidden;
    width: 95%;
    position: absolute;
    bottom: 0;
`;


function Sidebar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <Nav>
                    <ToggleSidebar id="SidebarToggle" type="checkbox" />
                    <NavIcon for="SidebarToggle" onClick={showSidebar}>
                        <span className="top_line common"></span>
                        <span className="middle_line common"></span>
                        <span className="bottom_line common"></span>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>

                    <SidebarWrap>
                        <SidebarWrap>
                            {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                            })}
                        </SidebarWrap>

                        <AccountsWrap>
                            {AccountsData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </AccountsWrap>
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>

        //<IconContext.Provider value={{ color: "#000000" }}>
        //    {/* Sidebar main links */}
        //    <SidebarWrap>
        //        <Nav>
        //            <NavIcon to='#'>
        //                <FaIcons.FaBars onClick={showSidebar} />
        //            </NavIcon>
        //        </Nav>
        //        <NavLogo to="/">
        //            <span>Logo</span>
        //        </NavLogo>
        //    </SidebarNav>
        //        {SidebarData.map((item, index) => {
        //            return <SubMenu item={item} key={index} />;
        //        })}

        //    {/* Navbar account */}
        //        {AccountsData.map((item, index) => {
        //            return <SubMenu item={item} key={index} />;
        //        })}
        //    </SidebarWrap>
        //    </SidebarNav >

        //</IconContext.Provider>
    )
}

export default Sidebar;
