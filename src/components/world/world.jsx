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

  trees = [];

  componentWillMount() {
    this.trees = this.renderTrees();
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
        {this.trees}
      </div>
    );
  }

  detectTrees = () => {
    return document.getElementById("tree0") === null;
  };

  renderTrees = () => {
    if (this.detectTrees()) {
      let items = [];
      for (let i = 0; i <= Math.floor(Math.random() * Math.floor(14)); i++) {
        items.push(
          <Tree
            id={"tree" + i}
            key={"tree" + i}
            width="83"
            height="74"
            left={this.generateTreePosition(this.context.state.width - 83, "x")}
            top={this.generateTreePosition(this.context.state.height - 74, "y")}
          />
        );
      }
      return items;
    }
  };

  generateTreePosition = (max, axis) => {
    const playerX = this.context.state.position[0];
    const playerY = this.context.state.position[1];
    while (true) {
      let randpos = Math.floor(Math.random() * Math.floor(max));
      if (axis === "x") {
        if (Math.sqrt(Math.pow(playerX - randpos, 2)) > 32) {
          return randpos;
        }
      } else {
        if (Math.sqrt(Math.pow(playerY - randpos, 2)) > 36) {
          return randpos;
        }
      }
    }
  };
}
export default World;
