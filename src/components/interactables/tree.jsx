import React, { Component } from "react";
import TreeSprite from "../../img/treesprite.png";
import { AppContext } from "../../ContextProvider";

class Tree extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      width: 83,
      height: 74
    };
  }
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: this.generatePosition(
            this.context.state.height - this.state.height
          ),
          left: this.generatePosition(
            this.context.state.width - this.state.width
          ),
          backgroundImage: `url('${TreeSprite}')`,
          backgroundPosition: "0 0",
          width: this.state.width + "px",
          height: this.state.height + "px"
        }}
      />
    );
  }

  generatePosition = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
}

export default Tree;
