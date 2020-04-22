import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

class App extends Component {
  // Three types of weather Sun, Rain, Cloudy
  // Hard coded it for now
  state = { weatherType: "Sun", temp: "24", city: "Adelaide" };
  componentDidMount() {
    this.setState({ weatherType: "Sun", temp: "24", city: "Adelaide" });
  }
  render() {
    //   Passing state into Card.js
    return (
      <Card
        weatherType={this.state.weatherType}
        temp={this.state.temp}
        city={this.state.city}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
