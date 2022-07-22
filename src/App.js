import "./App.css";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      something: 0,
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Greeting Name Formatter</h1>
      </div>
    );
  }
}
