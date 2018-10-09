import React from "react";

import "../styles/App.css";
import Grid from "@material-ui/core/Grid";
import Footer from "./footer";
import Navbar from "./navbar";

// Stateless function, pure
const App = () => (
  <div>
    <Grid container justify="center" xs={12}>
      <Navbar />
    </Grid>
    <Footer />
  </div>
);

export default App;
