import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import BrowserRouter from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//console.log("hello");
