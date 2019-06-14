import React, { Component } from "react";
import World from "./components/world/world.jsx";
import ContextProvider from "./ContextProvider.js";

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <header className="App-header" />
          <World />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
