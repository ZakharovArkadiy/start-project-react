import React    from "react";
import ReactDOM from "react-dom";

import "./sass/main.sass";

ReactDOM.render(
  <div id="wrapper">
    <div id="flag"></div>
    <h1>Hello,world!</h1>
  </div>,
  document.getElementById("root")
);

console.log("status:", process.env.NODE_ENV);