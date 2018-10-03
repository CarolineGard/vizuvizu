// import React, { Component } from "react";
import React from "react";
import { Route, Link } from "react-router-dom";

import "../styles/App.css";
import Grid from "@material-ui/core/Grid";
import Footer from "./footer";
import Navbar from "./navbar";
import Background from "./backgroundimg";
// import Btn from "./button";

// Stateless function, pure
const App = () => (
  <div>
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <Navbar />
        {/* <Header title="vizuvizu" /> */}
      </Grid>
      <Grid item xs={6}>
        <Background />
      </Grid>
    </Grid>
    <Grid />
    <Footer />
  </div>
);

export default App;
