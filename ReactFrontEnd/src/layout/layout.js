import Sidebar from "../components/sidebar"
import styled from "styled-components"



const SidebarNav = styled.nav`
  background: #fffee9;
  height: 100vh;
  box-shadow: 1px 0px 10px;
  display: grid;
  grid-template-columns: 220px;
  grid-template-rows: 80vh 20vh;
  overflow-y: hidden;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 400ms;
  z-index: 10;
`;


const Layout = () => {
    return (
        <SidebarNav>
            <Sidebar />
        </SidebarNav>
    )
}

export default Layout;