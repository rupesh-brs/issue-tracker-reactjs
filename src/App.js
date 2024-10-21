import React, { Component } from "react";

import { IssueForm } from "./Component/IssueForm";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">React JS Issue Tracker</h1>
        <IssueForm />
      </div>
    );
  }
}

export default App;
