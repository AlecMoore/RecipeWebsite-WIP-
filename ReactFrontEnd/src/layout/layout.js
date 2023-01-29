import Sidebar from "../components/sidebar"
import "../styles/style.css";
import "../styles/LayoutStyles.css"
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="Window">
            <Sidebar />
            <div className="outlet-content">
                <Outlet/>
            </div>
        </div>

    )}
/*
 */
export default Layout;