import React from "react";
import Modal from "react-modal";
import sidebar from "../components/sidebar"
import "../styles/DashboardStyles.css"
import { BsSearch } from "react-icons/bs";

function searchPlaceholder() {
    const date = new Date();
    if (date.getHours() < 10) {
        return ("What's for Breakfast?");
    } else if (date.getHours() >= 10 && date.getHours() <= 15) {
        return ("What's for Lunch?");
    } else if (date.getHours() >= 16) {
        return ("What's for Dinner?");
    } else {
        return ("Hungry?");
    }
}

function Dashboard() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div id="container">
            <div className="search">
                <button onClick={openModal}>{searchPlaceholder()}</button>
                <Modal className="search-modal" closeTimeoutMS={150} isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example">
                    <div className="search-container">
                        <input class="search-input" type="text" placeholder={searchPlaceholder()} autoFocus/>
                    </div>
                </Modal>


                {/*<BsSearch/>*/}
                {/*<input type="text" id="searchBar" placeholder={searchPlaceholder()}/>*/}
            </div>
            <div id="dashboard-feed">
                Dashboard Feed here
            </div>
        </div>
    )
}

export default Dashboard;
