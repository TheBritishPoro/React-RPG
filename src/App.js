import React, { Component } from "react";
import World from "./components/world/world.jsx";
import ContextProvider from "./ContextProvider.js";
import Score from "./components/score.jsx";

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <header className="App-header" />
          <World />
          <Score />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
