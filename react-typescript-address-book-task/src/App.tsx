import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Bottom />
      </div>
    );
  }
}

export default App;
