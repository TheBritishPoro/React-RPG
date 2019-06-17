import React, { Component } from "react";
import TreeSprite from "../../img/treesprite.png";
import { AppContext } from "../../ContextProvider";

class Tree extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      x: undefined,
      y: undefined
    };
  }

  componentDidMount() {
    this.setState({
      x: this.generatePosition(
        this.context.state.width - this.props.width,
        "x"
      ),
      y: this.generatePosition(
        this.context.state.height - this.props.height,
        "y"
      )
    });
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: this.state.y,
          left: this.state.x,
          backgroundImage: `url('${TreeSprite}')`,
          backgroundPosition: "0 0",
          width: this.props.width + "px",
          height: this.props.height + "px"
        }}
      />
    );
  }

  generatePosition = (max, axis) => {
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

export default Tree;
