import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import "./style.css";
import Axios from "axios";
class App extends Component {
  // Three types of weather Sun, Rain, Cloudy
  // Hard coded it for now
  state = { weatherType: "Sun", temp: "24", city: "Adelaide" };

  // Retrieve data from weather API
  getWeatherFromApi = async () => {
    const city = "Adelaide";
    const key = "5a059ff6ec9a1b593a4d3704d7581e37";
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const response = await axios.get(API_URL);
    console.log(response);
    function convertTemp(kelvin) {
      return Math.floor(kelvin - 273.15);
    }
    let celsuis = convertTemp(response.data.main.temp);
    console.log(celsuis);
    // Updating state with API data
    this.setState({
      temp: celsuis,
      city: response.data.name,
      weatherType: response.data.weather[0].main,
    });
  };

  render() {
    //   Passing state into Card.js
    return (
      <div>
        <div class="ui input">
          <input type="text" placeholder="Search for city..." />
        </div>
        <Card
          weatherType={this.state.weatherType}
          temp={this.state.temp}
          city={this.state.city}
        />
        <button onClick={this.getWeatherFromApi}>Click to get data</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
