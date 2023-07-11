import React, { Component } from "react";
import "../styles/CarouselStyles.css"
import { TruckFrontFill } from "react-bootstrap-icons";

const greekPlate = require('../media/GreekPlate.jpg'); // Use require function
const indianPlate = require('../media/IndianPlate.jpg'); // Use require function
const italianPlate = require('../media/ItalianPlate.jpg'); // Use require function
const japanesePlate = require('../media/JapanesePlate.jpg'); // Use require function
const mexicanPlate = require('../media/MexicanPlate.jpg'); // Use require function
const spanishPlate = require('../media/SpanishPlate.jpg'); // Use require function
const turkishPlate = require('../media/TurkishPlate.jpg'); // Use require function


export default class Carousel extends Component {

  render() {
    
    return (
      <div class="carousel-container">
        <div class="card">
          <h3 class="title">Italian</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={italianPlate} alt="Recipe" />
        </div>
        <div class="card">
          <h3 class="title">Greek</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={greekPlate} alt="Recipe" />
        </div>
        <div class="card">
          <h3 class="title">Spanish</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={spanishPlate} alt="Recipe" />
        </div>
        <div class="card">
          <h3 class="title">Japanese</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={japanesePlate} alt="Recipe" />
        </div>
        <div class="card">
          <h3 class="title">Indian</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={indianPlate} alt="Recipe" />
        </div>
                <div class="card">
          <h3 class="title">Mexican</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={mexicanPlate} alt="Recipe" />
        </div>
                <div class="card">
          <h3 class="title">Turkish</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
            <img className="carouselImg" src={turkishPlate} alt="Recipe" />
        </div>
      </div>
    );
  }
}
