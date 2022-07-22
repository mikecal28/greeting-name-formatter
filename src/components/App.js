import { Component } from "react";

import "../styles/styles.scss";
import NameForm from "./NameForm";
import Greeting from "./Greeting";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "nameless",
      lastName: "one",
      displayFirst: "",
      displayLast: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState((state, props) => ({
      displayFirst: state.firstName[0].toUpperCase() + state.firstName.slice(1),
      displayLast: state.lastName[0].toUpperCase() + state.lastName.slice(1),
    }));
  }

  handleChange(target) {
    this.setState((state, props) => ({
      firstName: target.id === "name1" ? target.value : state.firstName,
      lastName: target.id === "name2" ? target.value : state.lastName,
    }));
  }

  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <h1>Greeting Name-Formatter</h1>
          <NameForm
            handleSubmit={(e) => this.handleSubmit(e)}
            handleChange={(target) => this.handleChange(target)}
          />
          <Greeting
            firstName={this.state.displayFirst}
            lastName={this.state.displayLast}
          ></Greeting>
        </div>
      </div>
    );
  }
}
