import React, { Component } from "react";
import GrassBG from "../../img/grassbg.jpg";

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
          border: "4px solid white",
          margin: "10px auto",
          backgroundImage: `url('${GrassBG}')`
        }}
      />
    );
  }
}

export default Map;
