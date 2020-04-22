import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

class App extends Component {
  // Three types of weather Sun, Rain, Cloudy
  // Hard coded it for now
  componentDidMount() {
    this.setState({ weatherType: "Sun" });
  }
  render() {
    //   Passing state into Card.js
    return <Card weatherType={this.state.weatherType} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
