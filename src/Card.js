import React, { Component } from "react";
import Weathericon from "./Weathericon";
import "./style.css";

export class Card extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  // <i class="fas fa-sun"></i>

  render() {
    return (
      <div className="ui card card-container">
        <div className="weathericon-container">
          <Weathericon weatherType={this.props.weatherType} />
        </div>
        <div className="city-container">
          <div className="content">{this.props.city}</div>
        </div>
        <div className="temp-container">
          <div className="description">{this.props.temp}</div>
        </div>
      </div>
    );
  }
}

export default Card;
