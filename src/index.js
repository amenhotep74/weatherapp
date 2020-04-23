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
    // TEMP
    console.log(response.data.main.temp);
    // CITYNAME
    console.log(response.data.name);
    // WEATHERTYPE
    console.log(response.data.weather[0].main);

    // Updating state with API data
    this.setState({
      temp: response.data.main.temp,
      city: response.data.name,
      weatherType: response.data.weather[0].main,
    });
  };

  render() {
    //   Passing state into Card.js
    return (
      <div>
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
