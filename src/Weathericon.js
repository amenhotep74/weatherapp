import React, { Component } from "react";

export class Weathericon extends Component {
  render(props) {
    const weatherIcon = this.props.weatherType;
    if (weatherIcon === "Sun") {
      return <i class="fas fa-sun fa-3x"></i>;
    } else if (weatherIcon === "Rain") {
      return <i class="fas fa-cloud-rainfa-3x"></i>;
    } else if (weatherIcon === "Cloudy") {
      return <i class="fas fa-cloud-sun fa-3x"></i>;
    } else {
      return <p>No icon found!</p>;
    }
  }
}

export default Weathericon;
