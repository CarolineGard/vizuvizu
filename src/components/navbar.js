// React
import React from "react";
import { Route, Link } from "react-router-dom";

// Material ui
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

// Components
import Home from "./home";
//import MyCharts from "./myCharts";
import MyCharts from "../containers/MyCharts";
import Login from "./login";
import Register from "./register";
import Styles from "../styles/mui-styles";

// import NewPost from "./newPost";
// when form is submitted, an action is triggered.
// The action calls the reducer to modify the global state
import CreatePost from "../containers/CreatePost";

const Navbar = () => (
  <div>
    <MuiThemeProvider theme={Styles}>
      <AppBar color="primary" title="My App">
        <Tabs>
          <Button>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
              <Tab label="home" />
            </Link>
          </Button>
          <Button>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/newtable"
            >
              <Tab label="create new" />
            </Link>
          </Button>
          <Button>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/mycharts"
            >
              <Tab label="my charts" />
            </Link>
          </Button>
          <Button>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/login">
              <Tab label="Login" />
            </Link>
          </Button>
          <Button>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/register"
            >
              <Tab label="Register" />
            </Link>
          </Button>
        </Tabs>
      </AppBar>
    </MuiThemeProvider>

    <Route exact path="/" component={Home} />
    <Route path="/newtable" component={CreatePost} />
    <Route path="/mycharts" component={MyCharts} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </div>
);

export default withStyles(Styles)(Navbar);
