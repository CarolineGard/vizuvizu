import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import { isAbsolute, relative } from "path";

const Styles = createMuiTheme({
  // const styles = theme => ({
  position: relative,
  palette: {
    primary: amber,
    secondary: blue,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
});
export default Styles;
