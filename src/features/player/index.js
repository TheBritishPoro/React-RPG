import React, { Component } from "react";
import { connect } from "react-redux";
import walkSprite from "../../img/walkSprite.png";

function player(props) {
  return (
    <div
      style={{
        position: "relative",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: "0 0",
        width: "40px",
        height: "60px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(player);
