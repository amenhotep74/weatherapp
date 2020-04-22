import React, { Component } from "react";
import Weathericon from "./Weathericon";

export class Card extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  // <i class="fas fa-sun"></i>

  render() {
    return (
      <div class="ui card">
        <Weathericon weatherType={this.props.weatherType} />
        <div class="content">{this.props.city}</div>
        <div class="description">Temperature: {this.props.temp}</div>
      </div>
    );
  }
}

export default Card;
