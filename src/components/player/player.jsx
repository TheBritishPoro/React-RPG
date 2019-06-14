import React, { Component } from "react";
import WalkSprite from "../../img/walkSprite.png";
import HandleMovement from "./movement.js";
import { AppContext } from "../../ContextProvider";

class Player extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      HandleMovement(e, this.context);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", e => {
      HandleMovement(e, this.context);
    });
  }

  render() {
    return <div>{this.renderPlayer(this.props)}</div>;
  }

  renderPlayer = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: this.context.state.position[1],
          left: this.context.state.position[0],
          backgroundImage: `url('${WalkSprite}')`,
          backgroundPosition: "0 0",
          width: "32px",
          height: "36px"
        }}
      />
    );
  };
}

export default Player;
