import React, { Component } from "react";
import World from "./components/world/world.jsx";
import ContextProvider from "./ContextProvider.js";
import Score from "./components/score.jsx";
import ActionButton from "./components/interactables/actionButton.jsx";

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <header className="App-header" />
          <World />
          <ActionButton />
          <Score />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
