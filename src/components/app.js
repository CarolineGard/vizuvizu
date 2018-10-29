import React from "react";

import "../styles/App.css";
import Footer from "./footer";
import Navbar from "./navbar";

// when form is submitted, an action is triggered.
// The action calls the reducer to modify the global state

// Stateless function, pure
const App = () => (
  <div>
    <Navbar />
    <Footer />
  </div>
);

export default App;
