import React from "react";
import { Route, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SignIn from "./login";
import NewTable from "./newtable";
import Images from "./backgroundimg";
import styles from "./mui-styles";
import InputForm from "./inputForm";

// destructar header från props: props.header
// Reusable components
const Header = ({ title }) => <h1> {title} </h1>;
const Content = ({ text }) => <p> {text} </p>;

const Home = () => (
  <div>
    <MuiThemeProvider theme={styles}>
      <Header title="Home" />
      <Content text="Welcome to vizuvizu, the new and easy way for vizualizing data. lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum" />
      <Button variant="outlined" color="primary">
        Test Button
      </Button>
      <InputForm />
    </MuiThemeProvider>
    <Images />
  </div>
);

const Navbar = () => (
  <div>
    <MuiThemeProvider theme={styles}>
      <AppBar color="primary" title="My App">
        <Tabs>
          <Link to="/">
            <Tab label="HOME" />
          </Link>
          <Link to="/newtable">
            <Tab label="CREATE NEW" />
          </Link>
          <Link to="/login">
            <Tab label="LOGIN" />
          </Link>
        </Tabs>
      </AppBar>
    </MuiThemeProvider>

    <Route exact path="/" component={Home} />
    <Route path="/newtable" component={NewTable} />
    <Route path="/login" component={SignIn} />
  </div>
);

export default withStyles(styles)(Navbar);
