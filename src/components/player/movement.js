function handleMovement(e, context) {
  if (e.keyCode < 112 || e.keyCode > 123) {
    e.preventDefault();
  }

  function directionMove(direction) {
    switch (direction) {
      case "NORTH":
        context.updatePosition(
          context.state.position[0],
          context.state.position[1] - 10 >= 3
            ? context.state.position[1] - 10
            : 3
        );
        break;
      case "SOUTH":
        context.updatePosition(
          context.state.position[0],
          context.state.position[1] + 10 <= 364
            ? context.state.position[1] + 10
            : 364
        );
        break;
      case "WEST":
        context.updatePosition(
          context.state.position[0] - 10 >= 3
            ? context.state.position[0] - 10
            : 3,
          context.state.position[1]
        );
        break;
      case "EAST":
        context.updatePosition(
          context.state.position[0] + 10 <= 768
            ? context.state.position[0] + 10
            : 768,
          context.state.position[1]
        );
        break;
      default:
        console.log(direction);
        break;
    }
  }

  switch (e.keyCode) {
    case 37:
      directionMove("WEST");
      break;
    case 38:
      directionMove("NORTH");
      break;
    case 39:
      directionMove("EAST");
      break;
    case 40:
      directionMove("SOUTH");
      break;
    case 65:
      directionMove("WEST");
      break;
    case 68:
      directionMove("EAST");
      break;
    case 83:
      directionMove("SOUTH");
      break;
    case 87:
      directionMove("NORTH");
      break;
    default:
      console.log(e.keyCode);
      break;
  }
}

export default handleMovement;
