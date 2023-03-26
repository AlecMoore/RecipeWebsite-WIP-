import React from "react";
import background from "../media/foodplate.png";
import ingredients from "../media/ingredientsimg1.png";
import "../styles/DashboardStyles.css";

function searchPlaceholder() {
  const date = new Date();
  if (date.getHours() < 10) {
    return "What's for Breakfast?";
  } else if (date.getHours() >= 10 && date.getHours() <= 15) {
    return "What's for Lunch?";
  } else if (date.getHours() >= 16) {
    return "What's for Dinner?";
  } else {
    return "Hungry?";
  }
}

function Dashboard() {
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div id="container">
      <img id="background-img" src={background} alt="foodPlate" />
      <img id="dash-img" src={ingredients} alt="ingredients-image" />
      <div className="hero-container">
        <fieldset className="hero-text">
          <legend className="border-text">
            Welcome to Unnamed Recipe Website
          </legend>
          <h1>Recipes Without The Rubbish</h1>
          {/* <p>Faff-free formulas for Breakfast, Lunch and Dinner</p> */}
        </fieldset>
      </div>
      <div className="search">
        <input type="search" id="search-bar" />
        {/* <Modal
          className="search-modal"
          closeTimeoutMS={150}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example"
        >
          <div className="modal-search-container">
            <input
              class="search-input"
              type="text"
              placeholder={searchPlaceholder()}
              autoFocus
            />
          </div>
        </Modal> */}
      </div>
      <div id="dashboard-feed">Dashboard Feed here</div>
    </div>
  );
}

export default Dashboard;
