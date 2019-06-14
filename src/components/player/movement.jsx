import React, { Component } from "react";

function handleMovement(player) {
  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        console.log("WEST");
        break;
      case 38:
        console.log("NORTH");
        break;
      case 39:
        console.log("EAST");
        break;
      case 40:
        console.log("SOUTH");
        break;
      case 65:
        console.log("WEST");
        break;
      case 68:
        console.log("EAST");
        break;
      case 83:
        console.log("SOUTH");
        break;
      case 87:
        console.log("NORTH");
        break;
      default:
        console.log(e.keyCode);
        break;
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return player;
}

export default handleMovement;
