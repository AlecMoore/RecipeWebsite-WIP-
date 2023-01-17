import React from "react";
import styled from "styled-components";
import dashboardBackground from "../media/dashboardBackground.jpg";

const DashboardContent = styled.div`
    width: 100%;
    padding-bottom: 100%;
    justify-content: center;
    display: flex;
    transition: 200ms;
    background-image: url(${props => props.img});
    background-size: cover;
`

function Dashboard() {
    return (
        <DashboardContent>
            Dashboard
        </DashboardContent>
    )
}

export default Dashboard;
