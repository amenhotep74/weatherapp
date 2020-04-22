import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div class="ui card">
        <div class="image">
          Temp icon here
          <img src="#" />
        </div>
        <div class="content">City Name Here</div>
        <div class="description">Temperature Here</div>
      </div>
    );
  }
}

export default Card;
