import React, { Component } from "react";
import { AppContext } from "../../ContextProvider";

class ActionButton extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button
          onClick={this.handleClick}
          disabled={this.context.state.chopEnabled}
          style={{
            visibility: this.context.state.chopVisibility,
            color: "#fff",
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            display: "inline-block",
            fontWeight: 400,
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
            userSelect: "none",
            border: "1px solid transparent",
            padding: ".375rem .75rem",
            fontSize: "1rem",
            lineHeight: 1.5,
            borderRadius: ".25rem",
            transition:
              "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
          }}
        >
          Chop
        </button>
      </div>
    );
  }
}

export default ActionButton;
