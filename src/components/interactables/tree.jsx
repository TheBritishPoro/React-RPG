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
      x: this.generatePosition(this.context.state.width - this.props.width),
      y: this.generatePosition(this.context.state.height - this.props.height)
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

  generatePosition = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
}

export default Tree;
