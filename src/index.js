import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import Tempbuttontoggle from "./Tempbuttontoggle";
import "./style.css";

class App extends Component {
  // Three types of weather Sun, Rain, Cloudy
  // Hard coded it for now
  constructor(props) {
    super(props);
    this.state = { weatherType: null, temp: null, city: null, loading: false };
  }

  // Retrieve data from weather API
  getWeatherFromApi = async () => {
    this.setState({ loading: "loading" });
    const city = this.state.city;
    const key = "5a059ff6ec9a1b593a4d3704d7581e37";
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const response = await axios.get(API_URL);
    function convertTemp(kelvin) {
      return Math.floor(kelvin - 273.15);
    }
    let celsuis = convertTemp(response.data.main.temp);
    // Updating state with API data
    this.setState({
      temp: celsuis,
      city: response.data.name,
      weatherType: response.data.weather[0].main,
      loading: false,
    });
  };

  // Update the state whenever the input is typed in
  handleChange = (event) => {
    // Set state to the form text onchange
    this.setState({ city: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // When form is submitted call api
    this.getWeatherFromApi();
  };

  render() {
    //   Passing state into Card.js
    return (
      <div className="container">
        <div>
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className={`ui icon input ${this.state.loading}`}>
              <input
                className="search-input"
                type="text"
                onChange={this.handleChange}
                placeholder="Enter city"
              />
              <i className="search icon"></i>
            </div>
            <Tempbuttontoggle />
            {/* <button type="submit">Search</button> */}
          </form>
          <Card
            weatherType={this.state.weatherType}
            temp={this.state.temp}
            city={this.state.city}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
