import React, { Component } from "react";

export class Weathericon extends Component {
  render(props) {
    const weatherIcon = this.props.weatherType;
    console.log("Weather component" + this.props.weatherType);
    // Determine what icon to display depending on what the weatherType is
    // Types: Thunderstorm, Drizzle, Rain, Snow, Clear, Clouds
    // Unlikely Types: Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash, Squall, Tornado
    if (weatherIcon === "Clear") {
      return <i class="fas fa-sun fa-3x"></i>;
    } else if (weatherIcon === "Rain" || weatherIcon === "Drizzle") {
      return <i class="fas fa-cloud-rain fa-3x"></i>;
    } else if (weatherIcon === "Clouds") {
      return <i class="fas fa-cloud-sun fa-3x"></i>;
    } else if (weatherIcon === "Thunderstorm") {
      return <i class="fas fa-bolt fa-3x"></i>;
    } else if (weatherIcon === "Snow") {
      return <i class="fas fa-snowflake fa-3x"></i>;
    } else {
      return <p>No icon found!</p>;
    }
  }
}

export default Weathericon;
