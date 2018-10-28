// React
import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

import { logoutUser } from "../actions/authentication";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Material ui
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { withStyles } from "@material-ui/core/styles";
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
import Styles from "../styles/styles";

// when form is submitted, an action is triggered.
// The action calls the reducer to modify the global state
import CreatePost from "../containers/CreatePost";

//const Navbar = () => (
class Navbar extends React.Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
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
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "none" }}
                onClick={this.onLogout}
              >
                Logout
              </a>
            </Button>
          </Tabs>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/newtable" component={CreatePost} />
        <Route path="/mycharts" component={MyCharts} />
      </div>
    );

    const guestLinks = (
      <div>
        <AppBar color="primary" title="My App">
          <Tabs>
            <Button>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/login"
              >
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
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    );

    return (
      <div>
        <MuiThemeProvider theme={Styles}>
          {/* <AppBar color="primary" title="My App"> */}
          {isAuthenticated ? authLinks : guestLinks}
          {/* </AppBar> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar)
);
