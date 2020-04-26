import React, { Component } from "react";

export class Tempbuttontoggle extends Component {
  render() {
    return (
      <div>
        <br />
        {/* Temperature select buttons */}
        <div class="ui buttons temp-btn-grp">
          <button class="ui button active">Celsius</button>
          <button class="ui button">Fahrenheit</button>
          <button class="ui button">Kelvin</button>
        </div>
      </div>
    );
  }
}

export default Tempbuttontoggle;
