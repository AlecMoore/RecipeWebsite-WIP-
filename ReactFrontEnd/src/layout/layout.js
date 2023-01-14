import Sidebar from "../components/sidebar"
import { useState } from "react"
import styled from "styled-components"
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const Container = styled.div``



const Header = styled.div`

`;

const SidebarNav = styled.nav`
background: #fffee9;
height: 100vh;
box - shadow: 1px 0px 10px;
width: 15 %;
overflow - y: hidden;
justify - content: center;
position: fixed;
top: 0;
transition: 400ms;
z - index: 10;
`;


const Layout = () => {
    //const [sidebar, setSidebar] = useState(false)
    //const showSidebar = () => setSidebar(!sidebar)

    //const handleSidebarDisplay = (e) => {
    //    e.preventDefault();
    //    if (window.innerWidth > 468) {
    //        setDisplaySidebar(!displaySidebar);
    //    } else {
    //        setDisplaySidebar(false);
    //    }
    //};

    return (
        <Container>
            <SidebarNav>
                <Sidebar />
            </SidebarNav>
            <Outlet />
        </Container>

    )
}

export default Layout;