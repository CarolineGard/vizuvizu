import { createMuiTheme } from "@material-ui/core/styles";
import { isAbsolute, relative } from "path";

const Styles = createMuiTheme({
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
    textAlign: "center",
  },

  button: {
    marginTop: 30,
  },
});
export default Styles;
