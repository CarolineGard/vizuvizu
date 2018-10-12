import React from "react";

import "../styles/App.css";
import Grid from "@material-ui/core/Grid";
import Footer from "./footer";
import Navbar from "./navbar";

// import NewPost from "./newPost";
// when form is submitted, an action is triggered.
// The action calls the reducer to modify the global state
import CreatePost from "../containers/CreatePost";

// Stateless function, pure
const App = () => (
  <div>
    <Grid container justify="center" xs={12}>
      {/* <Navbar /> */}
      <CreatePost />
    </Grid>
    <Footer />
  </div>
);

export default App;
