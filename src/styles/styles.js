import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
//import pink from "@material-ui/core/colors/pink";
//import white from "@material-ui/core/colors/white";
import { isAbsolute, relative } from "path";

const Styles = createMuiTheme({
  // const styles = theme => ({
  position: relative,
  height: "100%",
  palette: {
    primary: {
      light: "#616161",
      main: "#212121",
      dark: "#000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#84c887",
      main: "#66bb6a",
      dark: "#47824a",
      contrastText: "#fff",
    },
  },
  root: {
    flexGrow: 1,
  },

  wrapper: {
    height: "90vh",
  },

  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: "center",
    //color: theme.palette.text.secondary,
  },

  button: {
    marginTop: 30,
  },
});
export default Styles;
