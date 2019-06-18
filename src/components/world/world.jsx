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
  treePositions = [];

  componentWillMount() {
    const renderedTrees = this.renderTrees();
    this.trees = renderedTrees.items;
    this.treePositions = renderedTrees.positions;
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
        {this.trees}
        <Player treePositions={this.treePositions} />
      </div>
    );
  }

  detectTrees = () => {
    return document.getElementById("tree0") === null;
  };

  renderTrees = () => {
    if (this.detectTrees()) {
      let items = [];
      let positions = [];
      for (let i = 0; i <= Math.floor(Math.random() * Math.floor(14)); i++) {
        let x = this.generateTreePosition(this.context.state.width - 83, "x");
        let y = this.generateTreePosition(this.context.state.height - 74, "y");
        items.push(
          <Tree
            id={"tree" + i}
            className="tree"
            key={"tree" + i}
            width="83"
            height="74"
            left={x}
            top={y}
          />
        );
        positions.push([x, y]);
      }
      return { items: items, positions: positions };
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
