import React, { Component } from "react";
import { AppContext } from "../../ContextProvider";

class Map extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: this.context.state.width + "px",
          height: this.context.state.height + "px",
          border: "4px solid white",
          margin: "10px auto",
          backgroundColor: "orange"
        }}
      />
    );
  }
}

export default Map;
