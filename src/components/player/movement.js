function handleMovement(e) {
  if (e.keyCode < 112 || e.keyCode > 123) {
    e.preventDefault();
  }
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

export default handleMovement;
