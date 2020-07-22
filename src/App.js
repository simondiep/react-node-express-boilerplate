import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("/username")
      .then((username) => username.text())
      .then((username) => {
        this.setState({ username });
      })
      .catch(() => alert("Could not get username!"));
  }

  render() {
    if (this.state.username) {
      return <h1>{`Hello ${this.state.username}`}</h1>;
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default App;
