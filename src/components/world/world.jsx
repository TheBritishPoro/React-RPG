import React, { Component } from "react";
import Player from "../player/player.jsx";
import Map from "../map/map.jsx";
import Tree from "../interactables/tree.jsx";
import { AppContext } from "../../ContextProvider";

class World extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: this.context.state.width + "px",
          height: this.context.state.height + "px",
          margin: "20px auto"
        }}
      >
        <Map />
        <Player />
        <Tree width="83" height="74" />
      </div>
    );
  }
}
export default World;
