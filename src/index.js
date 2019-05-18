import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.onCount = this.onCount.bind(this);
  }

  onCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        {count}
        <br />
        <button id="countclick" name="countclick" onClick={this.onCount}>
          Count
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
