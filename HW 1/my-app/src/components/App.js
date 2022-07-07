import React from "react";
import Example from "./Example";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "Ukraine",
    };
  }

  changeInnerText = () => {
    if (this.state.country === "Ukraine") {
      this.setState({ country: "Ukraine is the best" });
    } else {
      this.setState({ country: "Ukraine" });
    }
  };

  render() {
    return (
      <div className="app">
        <button className="changeInnerTextButton" onClick={this.changeInnerText}>Change text</button>
        <Example changedState={this.state.country} />
      </div>
    );
  }
}

export default App;
