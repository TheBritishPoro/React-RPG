import React, { Component } from "react";
import Player from "../player/player.jsx";
import Map from "../map/map.jsx";

class World extends Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "400px",
          margin: "20px auto"
        }}
      >
        <Map />
        <Player />
      </div>
    );
  }
}
export default World;