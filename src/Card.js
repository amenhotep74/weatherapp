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
        <Weathericon weatherType={this.props.weatherType} />
        <div className="content">{this.props.city}</div>
        <div className="description">Temperature: {this.props.temp}</div>
      </div>
    );
  }
}

export default Card;
