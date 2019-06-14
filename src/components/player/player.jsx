import React, { Component } from "react";
import { connect } from "react-redux";
import WalkSprite from "../../img/walkSprite.png";
import HandleMovement from "./movement.js";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.renderPlayer(this.props)}</div>;
  }

  renderPlayer = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url('${WalkSprite}')`,
          backgroundPosition: "0 0",
          width: "32px",
          height: "36px"
        }}
      />
    );
  };

  mapStateToProps = state => {
    return {
      ...state.player
    };
  };
}

export default Player;
