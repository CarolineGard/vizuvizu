import React from "react";

//Material-ui
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputForm from "./inputForm";
import Styles from "../styles/mui-styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    height: 140,
    width: 500,
  },

  control: {
    padding: theme.spacing.unit * 2,
  },

  button: {
    margin: "10px",
    padding: "10px",
    fontSize: "13px",
  },
});

const Start = state => (
  <div>
    <Button
      //className={classes.button}
      color="primary"
      variant="extendedFab"
      onClick={() => state.setState({ showInputForm: true })}
    >
      Start
    </Button>
  </div>
);

const TableChoice = state => (
  <div>
    <Grid container direction="row">
      <Button
        //className={classes.button}
        color="primary"
        variant="extendedFab"
        onClick={() => state.setState({ showInputForm: true })}
      >
        table
      </Button>
      <Button
        //className={classes.button}
        color="secondary"
        variant="extendedFab"
        onClick={() => (state.showInputForm = true)}
      >
        graph
      </Button>
    </Grid>
  </div>
);

class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showChoice: false, showInputForm: false };
  }

  clickStart = () => {
    this.setState(state => ({
      showInputForm: !state.showInputForm,
    }));
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyConent: "center",
          height: "80vh",
        }}
      >
        <MuiThemeProvider theme={Styles}>
          <Grid
            container
            className="root"
            align="center"
            vertical-align="center"
            direction="column"
          >
            <Typography variant="h1" gutterBottom>
              Create a new table
            </Typography>
            <Paper
              //className={classes.control}
              align-items="center"
              style={{ minWidth: 500, minHeight: 300 }}
            >
              <Button
                //className={classes.button}
                color="primary"
                variant="extendedFab"
                onClick={() => this.clickStart}
              >
                Start
              </Button>
              <InputForm />
              {/* {!this.state.showChoice ? <Start /> : <inputForm />} */}
            </Paper>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

/*
const NewTable = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/create`}>CREATE!</Link>
      </li>
      <li>
        <Link to={`${match.url}/delete`}>DELETE!</Link>
      </li>
    </ul>
    <Input />

    <Route
      exact
      path={`${match.path}/:newtable`}
      render={({ match }) => <div> A table is {match.params.newtable} </div>}
    />
  </div>
);
*/

export default withStyles(styles)(NewTable);
