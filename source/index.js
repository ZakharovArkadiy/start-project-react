import React    from "react";
import ReactDOM from "react-dom";

import "./main.sass";

ReactDOM.render(
  <h1>Hello,world!</h1>,
  document.getElementById("root")
);

console.log("status:", process.env.NODE_ENV);