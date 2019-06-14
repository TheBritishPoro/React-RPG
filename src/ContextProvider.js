import React, { Component } from "react";

export const AppContext = React.createContext();

class ContextProvider extends Component {
  state = { position: [0, 0] };
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updatePosition: (x, y) => {
            this.setState({
              position: [x, y]
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
