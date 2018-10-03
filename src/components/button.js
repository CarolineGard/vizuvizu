import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: { main: amber[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" }, // This is just green.A700 as hex.
  },
});

function Btn(color) {
  return (
    <MuiThemeProvider theme={theme}>
      <Button color={color}>color</Button>
    </MuiThemeProvider>
  );
}

export default Btn;
