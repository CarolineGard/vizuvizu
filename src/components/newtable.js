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

  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyConent: "center",
    height: "80vh",
  },

  paper: {
    justifyItems: "center",
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

class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showChoice: false, showInputForm: false, tableChoice: 1 };
  }

  clickStart = state => {
    this.setState(state => ({
      showChoice: true,
    }));
  };

  clickChoise = (state, tableIndex, max) => {
    this.setState(state => ({
      showInputForm: true,
      showChoice: false,
      tableChoice: tableIndex,
      maxFields: max,
    }));
  };

  render() {
    const { showChoice, showInputForm } = this.state;
    return (
      <div className="wrapper">
        <MuiThemeProvider theme={Styles}>
          <Grid container justify="center" xs={24}>
            <Grid
              container
              className="root"
              align="center"
              vertical-align="center"
              direction="column"
              xs={12}
            >
              <Typography variant="h4" gutterBottom>
                Create a new table
              </Typography>
              <Paper
                //className={classes.control}
                align-items="center"
                style={{ minWidth: 500, minHeight: 300 }}
              >
                {!showChoice &&
                  !showInputForm && (
                    <Button
                      color="primary"
                      variant="extendedFab"
                      onClick={() => this.clickStart(this.state)}
                    >
                      Start
                    </Button>
                  )}

                {showChoice &&
                  !showInputForm && (
                    <Grid container direction="row">
                      <Button
                        color="primary"
                        variant="extendedFab"
                        onClick={() =>
                          this.clickChoise(this.state, "line-chart", 5)
                        }
                      >
                        Line Chart
                      </Button>
                      <Button
                        color="secondary"
                        variant="extendedFab"
                        onClick={() =>
                          this.clickChoise(this.state, "bar-chart", 1)
                        }
                      >
                        Bar Chart
                      </Button>
                      <Button
                        color="secondary"
                        variant="extendedFab"
                        onClick={() =>
                          this.clickChoise(this.state, "mark-serie", 1)
                        }
                      >
                        Mark Serie
                      </Button>
                    </Grid>
                  )}
                {this.state.showInputForm && (
                  <InputForm
                    dataType={this.state.tableChoice}
                    maxFields={this.state.maxFields}
                  />
                )}
              </Paper>
            </Grid>
            <Grid direction="column" xs={12}>
              Here's the table
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(NewTable);
