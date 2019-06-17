import React, { Component } from "react";
import { AppContext } from "../ContextProvider";

class Score extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Score: {this.context.state.score}</h1>
      </div>
    );
  }
}

export default Score;
