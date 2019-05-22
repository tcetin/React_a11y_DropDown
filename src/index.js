import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import DropDown from "./DropDown";

function App() {
  return (
    <div className="App">
      <DropDown />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
