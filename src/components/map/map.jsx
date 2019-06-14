import React, { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: "800px",
          height: "400px",
          backgroundColor: "green",
          border: "4px solid white",
          margin: "10px auto  "
        }}
      />
    );
  }
}

export default Map;
