import React, { Component } from "react";

import "./icons/fontAwesomeLibrary";

import ToDoList from "./components/ToDoList/ToDoList";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div data-test="component-app" className="draw-on-a-photo-container">
        <ToDoList />
      </div>
    );
  }
}

export default App;
