import React, { Component } from "react";
import TreeSprite from "../../img/treesprite.png";
import { AppContext } from "../../ContextProvider";

class Tree extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id={this.props.id}
        style={{
          position: "absolute",
          top: this.props.top,
          left: this.props.left,
          backgroundImage: `url('${TreeSprite}')`,
          backgroundPosition: "0 0",
          width: this.props.width + "px",
          height: this.props.height + "px"
        }}
      />
    );
  }
}

export default Tree;
