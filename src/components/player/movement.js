function handleMovement(e, context, treePositions) {
  if (e.keyCode < 112 || e.keyCode > 123) {
    e.preventDefault();
  }

  function directionMove(direction) {
    let blocked = false;
    switch (direction) {
      case "NORTH":
        treePositions.forEach(tree => {
          if (
            context.state.position[1] >= tree[1] + 30 &&
            context.state.position[1] <= tree[1] + 50
          ) {
            if (
              context.state.position[0] - tree[0] >= -10 &&
              context.state.position[0] - tree[0] <= 70
            ) {
              blocked = true;
            }
          }
        });
        if (!blocked) {
          context.updatePosition(
            context.state.position[0],
            context.state.position[1] - 10 >= 3
              ? context.state.position[1] - 10
              : 364
          );
        }
        switch (context.state.playerSprite[0]) {
          case 0:
            context.updateSprite(-32, -105);
            break;
          case -32:
            context.updateSprite(-64, -105);
            break;
          case -64:
            context.updateSprite(0, -105);
            break;
          default:
            context.updateSprite(0, -105);
            break;
        }
        break;
      case "SOUTH":
        treePositions.forEach(tree => {
          if (
            context.state.position[1] <= tree[1] - 10 &&
            context.state.position[1] >= tree[1] - 30
          ) {
            if (
              context.state.position[0] - tree[0] >= -10 &&
              context.state.position[0] - tree[0] <= 70
            ) {
              blocked = true;
            }
          }
        });
        if (!blocked) {
          context.updatePosition(
            context.state.position[0],
            context.state.position[1] + 10 <= 364
              ? context.state.position[1] + 10
              : 3
          );
        }
        switch (context.state.playerSprite[0]) {
          case 0:
            context.updateSprite(-32, 0);
            break;
          case -32:
            context.updateSprite(-64, 0);
            break;
          case -64:
            context.updateSprite(0, 0);
            break;
          default:
            context.updateSprite(0, 0);
            break;
        }
        break;
      case "WEST":
        treePositions.forEach(tree => {
          if (
            context.state.position[1] >= tree[1] - 20 &&
            context.state.position[1] <= tree[1] + 40
          ) {
            if (
              context.state.position[0] >= tree[0] + 57 &&
              context.state.position[0] <= tree[0] + 77
            ) {
              blocked = true;
            }
          }
        });
        if (!blocked) {
          context.updatePosition(
            context.state.position[0] - 10 >= 3
              ? context.state.position[0] - 10
              : 748,
            context.state.position[1]
          );
        }
        switch (context.state.playerSprite[0]) {
          case 0:
            context.updateSprite(-32, -35);
            break;
          case -32:
            context.updateSprite(-64, -35);
            break;
          case -64:
            context.updateSprite(0, -35);
            break;
          default:
            context.updateSprite(0, -35);
            break;
        }
        break;
      case "EAST":
        treePositions.forEach(tree => {
          if (
            context.state.position[1] >= tree[1] - 20 &&
            context.state.position[1] <= tree[1] + 40
          ) {
            if (
              context.state.position[0] + 32 >= tree[0] + 10 &&
              context.state.position[0] + 32 <= tree[0] + 30
            ) {
              blocked = true;
            }
          }
        });
        if (!blocked) {
          context.updatePosition(
            context.state.position[0] + 10 <= 768
              ? context.state.position[0] + 10
              : 3,
            context.state.position[1]
          );
        }
        switch (context.state.playerSprite[0]) {
          case 0:
            context.updateSprite(-32, -70);
            break;
          case -32:
            context.updateSprite(-64, -70);
            break;
          case -64:
            context.updateSprite(0, -70);
            break;
          default:
            context.updateSprite(0, -70);
            break;
        }
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
