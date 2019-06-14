import React, { Component } from "react";
import { connect } from "react-redux";
import WalkSprite from "../../img/walkSprite.png";
import HandleMovement from "./movement";

function player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${WalkSprite}')`,
        backgroundPosition: "0 0",
        width: "32px",
        height: "36px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(HandleMovement(player));
