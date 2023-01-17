import Sidebar from "../components/sidebar"
import { useState } from "react"
import styled from "styled-components"
import { Link, Outlet } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const Container = styled.div`
`

const MainContent = styled.div`
    width: 100%;
    padding-left: 220px;
    justify-content: center;
    display: flex;
    height: 100%;


`;

const Layout = () => {

    return (
        <Container className="Window">
            <Sidebar />
            <MainContent>
                <Outlet/>
            </MainContent>
        </Container>
    )
}

export default Layout;