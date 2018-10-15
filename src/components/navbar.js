// React
import React from "react";
import { Route, Link } from "react-router-dom";

// Material ui
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

// Components
import NewTable from "./newtable";
import Styles from "../styles/mui-styles";
import LineChart from "../charts/LineChart";
import MarkSerie from "../charts/MarkSerie";
import BarChart from "../charts/BarChart";

// import NewPost from "./newPost";
// when form is submitted, an action is triggered.
// The action calls the reducer to modify the global state
import CreatePost from "../containers/CreatePost";

// destructar header från props: props.header
// Reusable components
const Header = ({ title }) => <Typography variant="H1"> {title} </Typography>;
const Content = ({ text }) => <Typography variant="body1"> {text} </Typography>;

const Home = () => (
  <div style={{ marginTop: "6rem" }}>
    {/* Switch between login and home first page for user */}
    <MuiThemeProvider theme={Styles}>
      <Header title="Home" />
      <Content text="Welcome to vizuvizu, the new and easy way for vizualizing data.  " />
      <CreatePost />
    </MuiThemeProvider>
  </div>
);

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
        </Tabs>
      </AppBar>
    </MuiThemeProvider>

    <Route exact path="/" component={Home} />
    <Route path="/newtable" component={NewTable} />
  </div>
);

export default withStyles(Styles)(Navbar);
