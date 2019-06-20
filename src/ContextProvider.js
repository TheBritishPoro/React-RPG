import React, { Component } from "react";

export const AppContext = React.createContext();

class ContextProvider extends Component {
  state = {
    width: 800,
    height: 400,
    position: [3, 3],
    score: 0,
    playerSprite: [0, 0],
    chopVisibility: "hidden",
    chopEnabled: false
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updatePosition: (x, y) => {
            this.setState({
              position: [x, y]
            });
          },
          updateSprite: (a, b) => {
            this.setState({
              playerSprite: [a, b]
            });
          },
          updateChopVisibility: setting => {
            let chopEnabled = setting === "visible" ? true : false;
            this.setState({
              chopVisibility: setting,
              chopEnabled: chopEnabled
            });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
