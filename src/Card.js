import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div class="ui card">
        <div class="image">
          <img src="#" />
        </div>
        <div class="content">{this.props.city}</div>
        <div class="description">Temperature: {this.props.temp}</div>
      </div>
    );
  }
}

export default Card;
